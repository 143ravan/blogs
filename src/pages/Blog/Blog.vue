<template>
  <section class="blog">
    <div class="blog--header">
      <div class="blog--header__title flex jc-center align-center font-40 font-weight-bold">
        <span>The TrueCaller Blog</span>
      </div>
      <img
        src="@/assets/images/header.png"
        alt="header"
        class="blog--header__image"
      >
    </div>
    <div class="blog--articles m-t-90">
      <div class="blog--articles__title font-48 font-weight-bold">
        Latest articles
      </div>
      <div class="blog--articles__filter m-t-50 font-weight-bold">
        <select
          class="select-box font-16 font-weight-bold padding-20"
          id="categories"
          v-model="selectedValue"
          @change="filterBlogs">
          <option
            value="all-categories"
            disabled>
            All Categories
          </option>
          <option
            v-for="category in categories"
            :value="category.slug"
            :key="category.slug">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="blog--articles__card m-t-40">
        <div
          v-for="post in cardList"
          :key="post.slug"
          @click="getDetails(post.slug)" >
          <Card
            :post="post" />
        </div>
      </div>
      <div class="blog--articles__pagination flex jc-around font-weight-bold m-t-20">
        <jw-pagination :items="totalPost" @changePage="onChangePage" :labels="customLabels" />
      </div>
    </div>
  </section>
</template>
<script src="./blog.js"></script>
<style lang="scss" scoped>
  @import '~@/assets/scss/utilities';
  .blog {
    *:focus {
      outline: none;
    }
    &--header {
      position: relative;
      background-image: url('/assets/images/header.png');
      width: 100%;

      &__image {
        width: 100%;
        height: 90vh;
      }
      &__screen {
        width: 100%;
        height: 90vh;
      }
      &__title {
        position: absolute;
        width: 100%;
        height: 90vh;
        color: #FFF;
      }
    }
    &--articles {
      padding: 90px 8% 40px;

      @media only screen and (min-width: 760px) and (max-width: 1000px) {
        padding: 90px 4% 40px;
      }
      @media only screen and (max-width: 759px) {
        padding: 90px 20px 40px;
      }

      &__filter {
        width: 280px;

        .select-box {
          border: none;
          border-radius: 2px;
          box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.12);
        }
      }
      &__card {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        @media only screen and (min-width: 760px) and (max-width: 1000px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media only screen and (max-width: 759px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
</style>
<style lang="scss">
  .blog--articles__pagination {
    .page-item.page-number.active > .page-link {
      color: #fff;
      background-color: #007bff;
      border-radius: 50%;
    }
  }
</style>