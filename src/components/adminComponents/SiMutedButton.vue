<template>
    <button class="btn-muted" @click="changeVideoSound()" oncontextmenu="return false">
		<img v-if="isMuted" class="icon" src="./../../assets/images/soundOn-icon.png">
		<img v-if="!isMuted" class="icon" src="./../../assets/images/muted-icon.png">
	</button>    
</template>

<script>
export default {
    props: {
        isMuted: Boolean,
    },
    methods: {
        changeVideoSound() {
            this.$emit("changeVideoSound");
        }
    }
}
</script>