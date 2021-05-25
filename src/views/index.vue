<template>
  <div class="index-page">
    <ul>
      <li class="logo"><img src="./../assets/images/storeino_logo.png"></li>
      <li style="float:right"><h2 class="active">Interactive video</h2></li>
    </ul>

    <SiVideo />
  </div>
</template>

<script>
import SiVideo from "../components/SiVideo";

export default { 
  components: {
    SiVideo,
  },
};
</script>

<style scoped>


</style>
