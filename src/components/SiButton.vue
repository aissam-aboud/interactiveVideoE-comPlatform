<template>
    <button ref="btn" :class="`si-button si-button-${theme}`" @click="clickButtonEvent()">{{text}}</button>
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
            window.isVidepPaused = true;
        }
        console.log('eee ::'+this.theme);
    },
    methods: {
        clickButtonEvent() {
            this.$refs.btn.style='visibility: hidden;';
            window.siVideo.currentTime = this.moveTo;
            window.isVidepPaused = false;
            window.siVideo.play();
        },
    },
}
</script>