<template>
    <button ref="btn" :class="`si-button si-button-${theme}`" @click="clickButtonEvent()" oncontextmenu="return false">{{text}}</button>
</template>

<script>
export default {
    name: 'SiButton',
    props: {
        text: String,
        moveTo: Number,
        start: Number,
        end: Number,
        theme: String,
    },
    created() {
        if(this.start && this.end && this.start == this.end) {
            window.siVideo.pause();
            window.isVideoPaused = true;
        }
    },
    methods: {
        clickButtonEvent() {
            this.$refs.btn.style='visibility: hidden;';
            window.siVideo.currentTime = this.moveTo;
            window.isVideoPaused = false;
            window.siVideo.play();
        },
    },
}
</script>