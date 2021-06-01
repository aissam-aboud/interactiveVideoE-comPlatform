<template>
    <button class="btn-play-pause" @click="changeVideoState()" oncontextmenu="return false">
		<img v-if="!isPaused" class="icon" src="./../../assets/images/pause-video-icon.png">
		<img v-if="isPaused" class="icon" src="./../../assets/images/play-video-icon.png">
	</button> 
</template>

<script>
export default {
    props: {
        isPaused: Boolean,
    },
    methods: {
        changeVideoState() {
            this.$emit("changeVideoState");
        }
    }    
}
</script>