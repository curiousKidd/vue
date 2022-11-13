<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <div class="list-wrapper">
      <ul>
        <CartPage
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        ></CartPage>
      </ul>
    </div>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartPage from '@/components/CartPage.vue';
export default {
  components: {
    CartPage,
  },
  async asyncData({ store }) {
    await store.dispatch('FETCH_CART_ITEMS');
    return { products: store.state.cartItems };
  },
};
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
</style>
