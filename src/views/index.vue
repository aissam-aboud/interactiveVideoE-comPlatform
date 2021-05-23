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
.index-page {
  height: 100vh;
  background: rgb(241, 241, 241);
}
ul {
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  background-color: #46a6f5;
  box-shadow: 0 6px 6px -6px black;
}
ul .logo{
  padding: 10px 16px 7px 16px;
}

li {
  float: left;
}

li h2 {
  margin: 0;
  display: block;
  color: white;
  user-select: none;
  text-align: center;
  text-decoration: none;
  font-family: sans-serif;
  padding: 14px 16px 7px 16px;
}

</style>
