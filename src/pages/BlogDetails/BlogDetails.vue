<template>
  <section class="blog-details">
    <img
      :src="featuredImage"
      class="blog-details--image"
      alt="featured_image">
    <div class="blog-details--content">
      <div class="font-48 font-weight-bold">
        {{ blogDetails.title }}
      </div>
      <div class="flex m-t-10">
        <div>
          <img
            :src="authorAvatar"
            class="blog-details--content__avatar"
            alt="author">
        </div>
        <div class="blog-details--content__profile">
          <div class="blog-details--content__name font-20">
            {{ authorName }}
          </div>
          <div class="m-t-5">
            {{publishedDate}}
          </div>
        </div>
      </div>
      <div class="post-content" v-html="postContent"></div>
    </div>
  </section>
</template>
<script src="./blogDetails.js"></script>
<style lang="scss" scoped>
  @import '~@/assets/scss/utilities';

  .blog-details {
    &--image {
      width: 100%;
      height: 90vh;
    }
    &--content {
      padding: 50px 20%;
      
      @media only screen and (max-width: 1000px) {
        padding: 50px 10%;
      }
      &__profile {
        margin: 10px 0 0 10px;
      }
      &__name {
        font-family: sans-serif;
      }
      &__avatar {
        width: 50px;
        border-radius: 50%
      }
    }
  }
</style>