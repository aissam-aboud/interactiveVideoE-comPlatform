<template>
    <button :class="`si-btn-tag btn-tag-${theme}`">
        <a :href="url" target="_blank">
            <img src="./../assets/click-icon.png" alt="">    
        </a>  
         
    </button>
</template>
<script>
export default {
    props: {
        url: String,
        end: Number,
        start: Number,
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