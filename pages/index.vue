<template>
  <div class="container">
    <div>
      <!--a v-for="story in pageNumber2Stories[currentPage]" 
        :key="story.id" 
        class="list-data"> 
        <h2>{{ story.data.title }}</h2>
        <p>Type: {{ story.data.type }}</p>
        <p>Link: {{ story.data.url }}</p>
        <p>Score: {{ story.data.score }}</p> 
      </a-->

      <BasePagination 
        class="pagination"
        :currentPage="currentPage"
        :pageCount="this.pageCount"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BasePagination from '@/components/BasePagination.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      stories: [],
      pageNumber2Ids: [],
      pageNumber2Items: [],
      currentPage: 1,
    }
  },

  created() {
    this.$store.dispatch('loadStories')
  },

  computed: {
    ...mapState({
      pageCount: 'pageCount'
    })
  },

  components: {
    BasePagination
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
              break
      }
      var stories = this.pageNumber2Stories[this.currentPage]
      if (stories === undefined)
        this.$store.dispatch('loadStoriesOnPageClick', this.currentPage)
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

.pagination {
  margin: 16px 0;
}
</style>
