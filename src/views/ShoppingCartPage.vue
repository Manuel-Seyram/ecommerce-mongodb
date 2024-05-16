<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <CartList @remove-from-cart="removeFromCart($event)" :Cart="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">No items in cart</div>
</template>
<script>
import CartList from "../components/CartList.vue";
import axios from "axios";
export default {
  name: "ShoppingCartPage",
  props: ["user"],
  components: {
    CartList,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        const CartResponse = await axios.get(
          `/api/users/${this.newUserValue.uid}/cart`
        );
        const cart = CartResponse.data;
        this.cart = cart;
      }
    },
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(
        `/api/users/${this.user.uid}/cart/${productId}`
      );
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },
  async created() {
    if (this.user) {
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = response.data;
      this.cartItems = cartItems;
    }
  },
};
</script>
