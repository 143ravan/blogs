import Card from '@/components/Card.vue'
import { mapGetters } from 'vuex'
import Pagination from 'vue-pagination-2'

export default {
  name: 'Blog',
  data () {
    return {
      page: 1,
      pageOfItems: [],
      selectedValue: 'all-categories',
      customLabels: {
        previous: '<',
        next: '>'
      },
      cardParams: {
        page: 1,
        number: 20
      }
    }    
  },
  components: {
    Card,
    Pagination
  },
  created () {
    this.$store.dispatch('getCardList', this.cardParams)
    this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapGetters(['cardList', 'cardCount', 'categories']),
    totalPost () {
      const post = Math.ceil(this.cardCount / 2)
      return [...Array(post).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }))
    }
  },
  methods: {
    getDetails (slug) {
      this.$router.push({name: 'BlogDetails', params: {slug}})
    },
    onChangePage(keys) {
      const page = (keys.length && keys[keys.length - 1].id / 10) || this.page
      this.cardParams.page = Math.ceil(page)
      this.$store.dispatch('getCardList', this.cardParams)
    },
    filterBlogs () {
      this.cardParams.page = this.page
      this.cardParams.category = this.selectedValue
      this.$store.dispatch('getCardList', this.cardParams)
    }
  }
}