<template>
    <a ref="link" class="link" :href="url" target="_blank">{{text}}</a>
</template>

<script>
export default {
    name: 'SiLink',
    props: {
        url: String,
        text: String,
        start: Number,
        end: Number,
    },
    created() {
        if( this.start == this.end) {
            window.siVideo.pause();
        }
    },
}
</script>