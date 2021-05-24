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