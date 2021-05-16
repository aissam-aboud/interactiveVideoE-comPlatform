<template>
    <ul :class="`si-select si-select-${theme}`" ref="SiList">
        <li class="si-select-text">{{list_header}}</li>
        <div class="si-select-options">
            <li class="si-select-item" v-for="(item, index) in items" :key="index" @click="chooseOption(item.moveTo)">{{item.name}}</li>
        </div>
    </ul>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'SiList',
    props: {
        items: Array,
        theme: String,
        start: Number,
        end: Number,
        list_header: String,
    },
    created() {
        if(this.start && this.end && this.start == this.end) {
            window.siVideo.pause();
            window.isVidepPaused = true;
        }
    },
    methods: {
        chooseOption(moveTo) {
            window.siVideo.play();
            window.isVidepPaused = false;
            window.siVideo.currentTime = moveTo;
            this.$refs.SiList.style = 'visibility: hidden;';
        },
    }
}
</script>