<template>
  <div class="container">
    <div>
      <a v-for="story in stories" :key="story.id" class="list-data"> 
        <h2>{{ story.data.title }}</h2>
        <p>Type: {{ story.data.type }}</p>
        <p>Link: {{ story.data.url }}</p>
        <p>Score: {{ story.data.score }}</p> 
      </a>
    </div>
    <BasePagination />
  </div>
</template>

<script>
import axios from 'axios';
import BasePagination from '@/components/BasePagination.vue'

export default {
  static: {
    visiableItemsPerPage: 20
  },

  data() {
    return {
      stories: [],
      pageNumber2Items: [],
      currentPage: 1,
      pageCount: 0
    }
  },

  created() {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => {
          this.results = response.data.slice(0, 20)
          this.results.forEach(item => {
              axios
              .get("https://hacker-news.firebaseio.com/v0/item/" + item + ".json")
              .then(result => {
                this.stories.push(result)
              .catch(error => {
                console.log(error)
              })
            })
          })
        })
        .catch(error => {
          console.log(error)
      }).finally
  },

  mounted() {
    console.log('mounted...')
    console.log('the size of loaded stories ' + this.stories.length)
    let stories = this.stories
    if (this.pageNumber2Items[this.currentPage] === undefined)
        this.pageNumber2Items[this.currentPage] = stories
  },

  computed: {

  },

  methods: {
        async pageChangeHandle(value) {
            switch(value) {
                case 'next':
                    this.currentPage += 1
                    break
                case 'previous':
                    this.currentPage -= 1
                    break
                default:
                    this.currentPage = value
            }
            const { data } = await axios
                            .get()
                            .then()
                            .catch(error => {
                              console.log(error)
                            }) 
        }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.list-data {
  background: #ddd;
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 16px;
  padding:16px;
}
</style>
