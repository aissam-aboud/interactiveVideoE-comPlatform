<template>
    <!-- <div class="aaa"> -->
        <a ref="link" :class="`si-link si-link-${theme}`" :href="url" target="_blank" oncontextmenu="return false">
            <p>{{text}}</p>
        </a>
    <!-- </div> -->
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
        if(this.start && this.end && this.start == this.end) {
            window.siVideo.pause();
            window.isVidepPaused = true;
        }
    },
}
</script>