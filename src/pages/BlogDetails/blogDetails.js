import { mapGetters } from "vuex"

export default {
  name: 'BlogDetails',
  created () {
    const params = {
      slug: this.$route.params && this.$route.params.slug
    }
    this.$store.dispatch('getBlogDetails', params)
  },
  computed: {
    ...mapGetters(['blogDetails']),
    featuredImage () {
      return this.blogDetails.featured_image
    },
    authorName () {
      return this.blogDetails.author && this.blogDetails.author.name
    },
    authorAvatar () {
      return this.blogDetails.author && this.blogDetails.author.avatar_URL
    },
    publishedDate () {
      return this.blogDetails.date && new Date (this.blogDetails.date).toISOString().substring(0, 10)
    },
    postContent () {
      return this.blogDetails.content
    }
  }
}