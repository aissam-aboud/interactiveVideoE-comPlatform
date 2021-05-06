<template>
    <div ref="bubble" class="speechbubble">
        <button v-if="isStop" @click="closeBubble">X</button>
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
    },
    data() {
        return {
            isStop: false,
        }
    },
    created() {
        if( this.start == this.end) {
            window.siVideo.pause();
            this.isStop = true;
        }
    },
    methods: {
        closeBubble() {
            this.$refs.bubble.style='visibility: hidden;';
            window.siVideo.play();
        },
    },
}
</script>