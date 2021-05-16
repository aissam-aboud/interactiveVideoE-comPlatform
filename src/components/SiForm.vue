<template>
    <div ref="form" :class="`si-form si-form-${theme}`">
        <h3>Sign up for our newsletter</h3>
        <form>
            <input type="text" placeholder="First name" required>
            <input type="email" placeholder="Last name" required>
            <input type="email" placeholder="Email" required>
            <input type="email" placeholder="Phone number" required>
            <button>Sign up</button>
        </form> 
    </div>
</template>

<script>
export default {
    name: 'SiForm',
    props: {
        end: Number,
        start: Number,
        theme: String,
    },
    data() {
        return {
        }
    },
    created() {
        if(this.start && this.end && this.start == this.end) {
            window.siVideo.pause();
            window.isVidepPaused = true;
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