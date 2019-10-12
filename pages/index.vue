<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        My premium Nuxt.js project
      </h2>
      <div>
        {{posts}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: []
    }
  },
  asyncData() {
    return axios.get('https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty')
          .then(response => {
            let posts = response.data
            return {posts}
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
