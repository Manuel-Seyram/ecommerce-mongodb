import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "../views/ProductsPage.vue";
import ShoppingCartPage from "../views/ShoppingCartPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/products",
    component: ProductsPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCartPage,
  },
  {
    path: "/products/:productId",
    name: "product-details",
    component: ProductDetailPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
