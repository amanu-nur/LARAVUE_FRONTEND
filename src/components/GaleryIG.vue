<template>
  <div class="galery-ig">
    <div class="instagram-photo">
      <div
        class="insta-item set-bg"
        v-for="galery in DumyHome.GaleryIG"
        v-bind:key="galery._id"
        v-bind:style="{ backgroundImage: 'url(' + galery.imageUrl + ')' }"
      >
        <div class="inside-text">
          <i class="ti-instagram"></i>
          <h5>
            <a href="#">{{ galery.name }}</a>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DumyHome from "@/Dumy/Home.json";
export default {
  data: function() {
    return {
      DumyHome,
    };
  },
  name: "GaleryIG",
};
</script>
