<template>
    <button ref="skipBtn" :class="`btn-skip btn-skip-${theme}`" @click="skip()" oncontextmenu="return false">
        SKIP
        <img class="icon" src="./../assets/skip-icon.png">
    </button>
</template>

<script>
export default {
    name: 'SiButton',
    props: {
        theme: String,
        elements: Array,
    },
    methods: {
        skip() {
            window.siVideo.play();
            window.isVidepPaused = false;
            this.$refs.skipBtn.style='visibility: hidden;';

            this.elements.forEach(element => {
                window.passedComponents.forEach(passedComponent => {
                    if(element.id == passedComponent.id && element.currentProps.start == element.currentProps.end) 
                        element.currentProps.style+= 'visibility: hidden;';            
                });
            });
        },
    },
}
</script>