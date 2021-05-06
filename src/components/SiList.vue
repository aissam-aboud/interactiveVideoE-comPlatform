<template>
    <ul class="SiList" ref="SiList">
        <li v-for="(item, index) in items" :key="index" @click="chooseOption(item.moveTo)">{{item.name}}</li>
    </ul>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'SiList',
    props: {
        items: Array,
        start: Number,
        end: Number,
    },
    created() {
        if( this.start == this.end) {
            window.siVideo.pause();
        }
    },
    methods: {
        chooseOption(moveTo) {
            this.$refs.SiList.style = 'visibility: hidden;';
            window.siVideo.currentTime = moveTo;
            window.siVideo.play();
        }
    }
}
</script>