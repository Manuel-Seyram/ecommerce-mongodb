<template>
  <h1>Products</h1>
  <ProductList :products="products" />
</template>
<script>
import ProductList from "../components/ProductList.vue";
import axios from "axios";
export default {
  name: "ProductPage",
  components: {
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const response = await axios.get("/api/products");
    const products = response.data;
    this.products = products;
  },
};
</script>
