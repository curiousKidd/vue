import { fetchCartItems } from '~/api';

export const state = () => ({
  cartItems: [],
});

export const getters = {
  getCartItems(state) {
    return state.cartItems;
  },
};

export const mutations = {
  addCartItem(state, item) {
    state.cartItems.push(item);
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
};

export const actions = {
  async FETCH_CART_ITEMS({ commit }) {
    const { data } = await fetchCartItems();
    commit('setCartItems', data);
  },
};
