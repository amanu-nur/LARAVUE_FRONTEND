<template>
  <div class="Hero">
    <!-- Hero Section Begin -->
    <section class="hero-section">
      <carousel class="hero-items" :items="1" :autoplay="true" :nav="false">
        <div
          class="single-hero-items set-bg"
          v-for="Hero in DumyHome.Hero"
          v-bind:key="Hero._id"
          v-bind:style="{ backgroundImage: 'url(' + Hero.imageUrl + ')' }"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Bag,kids</span>
                <h1>Black friday</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </section>
    <!-- Hero Section End -->
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
