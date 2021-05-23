<template>
	<button :class="`btn-play btn-play-${theme}`" @click="playVideo()" oncontextmenu="return false">
		<img class="icon" src="./../assets/images/play-icon.png">
	</button>
</template>

<script>
export default {
    name: 'SiPlayButton',
    props: {
        theme: String,
    },
    methods: {
        playVideo() {
            this.$emit("playVideo");
        }
    }
}
</script>