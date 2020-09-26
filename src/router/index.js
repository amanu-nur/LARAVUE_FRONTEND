import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import ShopingCart from "../views/ShopingCart.vue";
import Success from "../views/Success.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/product",
    name: "Detail Product",
    component: Product,
  },
  {
    path: "/check_out",
    name: "Shoping",
    component: ShopingCart,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
