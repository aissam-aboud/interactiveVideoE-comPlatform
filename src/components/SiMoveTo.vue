<template>
    <div></div>
</template>

<script>
export default {
    props: {
        start: Number,
        moveTo: Number,
    },
    created() {  
        window.siVideo.currentTime = this.moveTo;
        window.siVideo.play();
    }
}
</script>