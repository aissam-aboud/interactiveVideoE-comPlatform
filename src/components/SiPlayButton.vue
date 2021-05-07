<template>
	<button :class="`btn-play btn-play-${theme}`" @click="playVideo()">
		<img class="icon" src="./../assets/play-icon.png">
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