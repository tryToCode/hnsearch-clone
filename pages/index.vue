<template>
  <div class="container">
    <div>
      <a v-for="story in stories" :key="story.id" class="list-data"> 
        mein gott 
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { from, forkJoin } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

export default {
  data() {
    return {
      stories: []
    }
  },

  methods: {
    getStory(id) {
      return axios.get(`https://hacker-news.firebaseio.com/v0/item/${params.id}.json`, {
        params: {
          id: id
        }
      })
      .catch(error => {
        console.log(error)
      })
    },

    listStories() {
      return axios.get('https://hacker-news.firebaseio.com/v0/beststories.json')
        .catch(error => {
          console.log(error)
      })
    },

    getStories() {
      return from(this.listStories())
      .pipe(
        mergeMap((id) => this.getStory(id)),
      ).subscribe(
        (results) => { this.stories = results }
      )
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
  display: inline-block;
  margin:10px;
  padding:10px;
}
</style>
