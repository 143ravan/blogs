export default {
  name: 'Card',
  props: {
    post: {
      required: true,
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    postThumbnail () {
      return this.post.post_thumbnail && this.post.post_thumbnail.URL
    }
  },
  filters: {
    formattedDate (date) {
      const now = new Date();
      const hours = parseInt((now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60))
      const timeFilter = [{
          duration: 24,
          unit: 'hrs ago'
        },
        {
          duration: 7,
          unit: 'days ago'
        },
        {
          duration: 4,
          unit: 'week ago'
        },
        {
          duration: 12,
          unit: 'month ago'
        }]

      let totalTime = timeFilter.reduce(function (time, filter, index, arr) {
        if (time < filter.duration) {
          arr.length = 0;
          return time + ' ' + filter.unit
        }
          return Math.floor(time / filter.duration)
        }, hours);
      return totalTime.toString().split(' ')[1] ? totalTime : totalTime + ' ' + 'years ago'
    }
  }
}