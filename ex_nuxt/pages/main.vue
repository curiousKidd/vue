<template>
  <div>
    <h1>메인 페이지</h1>
    <div>메인페이지 입니다.</div>
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product }}
          <img :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </div>
    <!-- <ProductList></ProductList> -->
  </div>
</template>

<script>
import axios from 'axios';
// import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    // ProductList,
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
};
</script>

<style></style>
