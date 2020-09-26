<template>
  <div class="partner">
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
      <div class="container">
        <carousel
          class="logo-carousel"
          :items="5"
          :autoplay="true"
          :nav="false"
        >
          <div
            class="logo-item"
            v-for="partner in DumyHome.Partner"
            v-bind:key="partner._id"
          >
            <div class="tablecell-inner">
              <img :src="partner.imageUrl" :alt="partner._id" />
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import DumyHome from "@/Dumy/Home.json";
export default {
  name: "Partner",
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
