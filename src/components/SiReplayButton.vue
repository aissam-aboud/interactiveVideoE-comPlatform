<template>
	<button :class="`btn-replay btn-replay-${theme}`" @click="replayVideo()" oncontextmenu="return false">
		<img class="icon" src="./../assets/images/replay-icon.png">
	</button>
</template>

<script>
export default {
    name: 'SiReplayButton',
    props: {
        theme: String,
    },
    methods: {
        replayVideo() {
            this.$emit("replayVideo");
        }
    }
}
</script>