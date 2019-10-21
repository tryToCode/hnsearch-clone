import axios from 'axios'

export const state = () => ({
    stories: [],
    pageNumber2Items: [],
    pageNumber2Ids: [],
    pageCount: Number
  })
  
  export const mutations = {
    setStories(state, stories) {
        state.stories = stories
    },

    setStoriesOnPageClick(state, params) {
        state.pageNumber2Items[params.pageNumber] = params.stories
    },

    setIds(state) {
        var i, pageNumber = 1, chunk = 20
        for(i=0; i < state.stories.length; i += chunk) {
            var ids = state.stories.slice(i, i + chunk)
            state.pageNumber2Ids[pageNumber] = ids
            pageNumber += 1
        }
    },

    setPageCount(state) {
        state.pageCount = Math.ceil(500 / 20)
    }
  }

  export const actions = {
     async loadStories({commit}) {
        try {
            var stories = await axios
                    .get('https://hacker-news.firebaseio.com/v0/topstories.json')
            commit('setStories', stories)
            commit('setIds')
            commit('setPageCount')
        } catch(error) {
            console.log(error)
        }
     },
     
     async loadStoriesOnPageClick({commit, state}, pageNumber) {
        var stories = []
        var storyIds = state.pageNumber2Ids[pageNumber]    
        storyIds.forEach(elem => {
            axios
                .get("https://hacker-news.firebaseio.com/v0/item/" + elem + ".json")
                .then(response => {
                    stories.push(response.data) 
                })
                .catch(error => {
                    console.log(error)
                })
        })
        commit('setStoriesOnPageClick', {
            'pageNumber': pageNumber, 
            'stories': stories})
        }
  }