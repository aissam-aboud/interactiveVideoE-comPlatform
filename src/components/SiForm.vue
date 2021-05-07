<template>
    <div ref="form" :class="`siForm siForm-${theme}`">
        <h3 class="title">Sign up for our newsletter</h3>
        <form>
            <input type="text" placeholder="Full name">
            <input type="text" placeholder="Email">
            <button>Sign up</button>
            <button v-if="isStop" @click="closeForm" class="btn-close">Close</button>
        </form> 
    </div>
</template>

<script>
export default {
    name: 'SiForm',
    props: {
        start: Number,
        end: Number,
        theme: String,
    },
    data() {
        return {
            isStop: false,
        }
    },
    created() {
        if( this.start == this.end) {
            window.siVideo.pause();
            this.isStop = true;
        }
    },
    methods: {
        closeForm() {
            this.$refs.form.style='visibility: hidden;';
            window.siVideo.play();
        },
    },
}
</script>