<template>
	<button class="btn-replay" @click="replayVideo()">
		<img class="icon" src="./../assets/replay-icon.png">
	</button>
</template>

<script>
export default {
    name: 'SiReplayButton',
    methods: {
        replayVideo() {
            this.$emit("replayVideo");
        }
    }
}
</script>