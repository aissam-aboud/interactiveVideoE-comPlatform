<template>
    <div ref="form" class="siForm">
        <h3 class="title">Sign up for our newsletter</h3>
        <form>
            <label for="fname">Full name</label><br>
            <input type="text" placeholder="..."><br>
            <label for="lname">Email</label><br>
            <input type="text" placeholder="..."><br><br>
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