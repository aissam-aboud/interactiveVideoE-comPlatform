<template>
    <button ref="btn" :class="`siButton siButton-${theme}`" @click="clickButtonEvent()">{{text}}</button>
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
        if( this.start == this.end) {
            window.siVideo.pause();
        }
    },
    methods: {
        clickButtonEvent() {
            this.$refs.btn.style='visibility: hidden;';
            window.siVideo.currentTime = this.moveTo;
            window.siVideo.play();
        },
    },
}
</script>