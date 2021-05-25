<template>
    <ul :class="`si-select si-select-${theme}`" ref="SiList" oncontextmenu="return false">
        <li class="si-select-text">{{select_title}}</li>
        <div class="si-select-options">
            <li class="si-select-item" v-for="(item, index) in items" :key="index" @click="chooseOption(item.moveTo)">{{item.name}}</li>
        </div>
    </ul>
</template>

<script>
export default {
    name: 'SiList',
    props: {
        items: Array,
        theme: String,
        start: Number,
        end: Number,
        select_title: String,
    },
    created() {
        if(this.start && this.end && this.start == this.end) {
            window.siVideo.pause();
            window.isVideoPaused = true;
        }
    },
    methods: {
        chooseOption(moveTo) {
            window.siVideo.play();
            window.isVideoPaused = false;
            window.siVideo.currentTime = moveTo;
            this.$refs.SiList.style = 'visibility: hidden;';
        },
    }
}
</script>