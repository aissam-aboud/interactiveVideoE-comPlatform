<template>
    <div class="timeline">
      <div class="timeline__drag"></div>
      <span class="timeline__progress"></span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.timeline {

  top: 10px;
  width: 100%;
  height: 10px;
  background-color: black;
  cursor: pointer;
  position: relative;
}

/* Here is the dragger that I will use to move the video 
* current time forward or backward.
* I have added a background color for you to see it
* but just remove it in production.
*/

.timeline__drag {
  width: 1px;
  height: 20px;
  top: -10px;
  background-color: yellow;
  position: absolute;
  z-index: 2;
  transform-origin: 0 0;
}
.timeline__progress {
  display: block;
  width: 100%;
  height: 100%;
  background-color: green;
  transform: scaleX(0);
  transform-origin: 0 0;
  position: relative;
  z-index: 1;
}
</style>