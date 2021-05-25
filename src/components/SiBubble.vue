<template>
    <div ref="bubble" :class="`si-bubble si-bubble-${theme} si-bubble-${arrow}`" oncontextmenu="return false">
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: 'SiBubble',
    props: {
        text: String,
        start: Number,
        end: Number,
        theme: String,
        arrow: String,
    },
    created() {
        if(this.start && this.end && this.start == this.end) {
            window.siVideo.pause();
            window.isVideoPaused = true;
        }
    },
}
</script>

<style scoped>

/* strict left or right */

/* .sb12:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #00bfb6;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  right: -23px;
}

.sb12:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #fff;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  right: -17px;
} 
*/
</style>