<template>
  <div class="container">
    <div>
      <a v-for="story in stories" 
        :key="story.id" 
        class="list-data"> 
        <h2>{{ story.title }}</h2>
        <p>Type: {{ story.type }}</p>
        <p>Link: {{ story.url }}</p>
        <p>Score: {{ story.score }}</p>
      </a>

      <BasePagination 
        class="pagination"
        :currentPage="currentPage"
        :pageCount="Number(pageCount)"
        @nextPage="pageChangeHandle('next')"
        @previousPage="pageChangeHandle('previous')"
        @loadPage="pageChangeHandle"
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
      currentPage: 1
    }
  },

  created() {
    this.$store.dispatch('loadStories')
  },

  computed: {
    ...mapState({
      pageCount: 'pageCount',
      pageNumber2Items: 'pageNumber2Items'
    })
  },

  watch: {
    stories: function(data) {
      this.$store.dispatch('setUp')
      this.$store.dispatch('loadStoriesOnPageClick', this.currentPage)
    }
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
      var stories = this.pageNumber2Items[this.currentPage]
      if (stories === undefined)
        this.$store.dispatch('loadStoriesOnPageClick', this.currentPage)
      this.stories = this.pageNumber2Items[this.currentPage]
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
  align-content: center;
  margin: 16px;
  padding:16px;
  cursor: pointer;
}

.pagination {
  margin: 16px 0;
}
</style>
