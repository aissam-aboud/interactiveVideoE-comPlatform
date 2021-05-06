<template>
    <button ref="btn" class="siButton" @click="clickButtonEvent()">{{text}}</button>
</template>

<script>
export default {
    name: 'SiButton',
    props: {
        text: String,
        moveTo: Number,
        start: Number,
        end: Number,
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