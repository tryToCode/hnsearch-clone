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

  created() {
    axios.get('https://hacker-news.firebaseio.com/v0/beststories.json')
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
      })
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
