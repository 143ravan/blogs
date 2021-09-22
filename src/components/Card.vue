<template>
  <section class="card">
    <div class="padding-20 font-weight-bold font-14">
      {{ Object.keys(post.categories)[0] }}
    </div>
    <img
      :src="postThumbnail"
      alt="post_thumbnail"
      class="card--avatar">
    <div class="padding-20">
      <div class="font-18">
        {{ post.title }}
      </div>
      <div class="posted font-12 m-t-10 m-t-10">
        {{ post.date | formattedDate}}
      </div>
    </div>
  </section>
</template>
<script src="./js/card.js"></script>
<style lang="scss" scoped>
  @import '~@/assets/scss/utilities';

  .card {
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 0 16px -4px rgba(0, 0, 0, 0.12);

    background: #FFF;
    margin-top: 20px;

    &--title, &--description {
      padding: 20px;

      @media only screen and (max-width: 759px) {
        padding: 20px 10px;
      }
    }
    &--avatar {
      height: 120px;
      width: 100%;
    }
    .posted {
      color: rgba(0, 0, 0, 0.38);
    }
  }
</style>
