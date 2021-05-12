<template>
    <a ref="link" :class="`si-link si-link-${theme}`" :href="url" target="_blank">{{text}}</a>
</template>

<script>
export default {
    name: 'SiLink',
    props: {
        url: String,
        text: String,
        start: Number,
        end: Number,
        theme: String,
    },
    created() {
        if( this.start == this.end) {
            window.siVideo.pause();
            window.isVidepPaused = true;
        }
    },
}
</script>