<template>
  <div class="app">
    <main>
      <!-- <SearchInput
        :search-keyword="searchKeyword"
        @raiseToKeyword="updateSearchKeyword"
      ></SearchInput> -->
      <SearchInput
        v-model="searchKeyword"
        @search="searchProducts"
      ></SearchInput>
      <ul>
        <li
          class="item flex"
          v-for="product in products"
          :key="product.id"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductsByKeyword } from '@/api/index';

export default {
  components: {
    SearchInput,
  },
  async asyncData() {
    const { data } = await axios.get('http://localhost:3000/products');
    const products = data.map(item => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      };
    });
    return { products };
  },
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword;
    // },
    async searchProducts() {
      const { data } = await fetchProductsByKeyword(this.searchKeyword);
      this.products = data.map(item => {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        };
      });
    },
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`);
    },
    moveToCartPage() {
      this.$router.push(`cart`);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
