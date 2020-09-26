<template>
  <div class="product-items">
    <section class="women-banner spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 mt-5">
            <carousel
              class="product-slider"
              :items="3"
              :autoplay="true"
              :nav="false"
              :dots="false"
            >
              <div
                class="product-item"
                v-for="product in DumyHome.Product"
                v-bind:key="product._id"
              >
                <div class="pi-pic">
                  <img :src="product.imageUrl" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view">
                      <router-link to="/product">+ Quick View</router-link>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coat</div>
                  <a href="#">
                    <h5>{{ product.name }}</h5>
                  </a>
                  <div class="product-price">
                    {{ product.price }}
                    <span>$35.00</span>
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import DumyHome from "@/Dumy/Home.json";
export default {
  name: "ProductItems",
  data: function() {
    return {
      DumyHome,
    };
  },
  components: {
    carousel,
  },
};
</script>

<style scoped>
.product-item {
  margin-right: 25px;
}
</style>
