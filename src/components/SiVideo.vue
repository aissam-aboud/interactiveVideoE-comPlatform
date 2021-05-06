<template>
    <div class="container">
        <div class="elementsDiv">
            <div v-for="(element, index) in this.elements" :key="index">
                <component v-if="element.currentProps.start <= `${currentTime}` 
                                && element.currentProps.end >= `${currentTime}`"
                    :is="element.currentComponent" 
                    v-bind="element.currentProps" 
                />
                <!-- v-on="element.currentMethodes" -->
                <component   v-if="element.currentProps.start <= `${currentTime}`
                            && element.currentComponent =='SiMoveTo'" 
                            :is="element.currentComponent" 
                            v-bind="element.currentProps"
                />
            </div>
            <SiReplayButton v-if="isVideoEnd" @replayVideo="replayVideo()" />
        </div>
        
        <video ref="siVideo" class="siVideo" controls autoplay muted @timeupdate="getCurrentTime()" @ended="onEnd()">
            <source src="../assets/myVideo.mp4" type="video/mp4" >
        </video>
        <!-- <button @click="fnt()">click</button> -->
    </div>
</template>

<script>
// work on a vertical video
// many theme for each item


import SiButton from './SiButton';
import SiBubble from './SiBubble';
import SiLink from './SiLink';
import SiForm from './SiForm';
import SiReplayButton from './SiReplayButton';
import SiSelect from './SiSelect';
import SiMoveTo from './SiMoveTo';

export default {
    name: 'SiVideo',
    components: {
        SiButton,
        SiBubble,
        SiLink,
        SiForm,
        SiReplayButton,
        SiSelect,
        SiMoveTo,
    },
    data() {
        return {

            currentTime: 0,
            isVideoEnd: false,
            elements: [
                {
                    currentComponent: 'SiButton',
                    currentProps: {
                        text: 'See more about camera',
                        style: 'visibility: visible; margin: 21% 0% 0% 48%;',
                        moveTo: 60.337806, start: 0.26, end: 0.27,
                        theme: 'dark',
                    },
                },
                {
                    currentComponent: 'SiBubble',
                    currentProps: {
                        text: 'Arrière : 12 MP f/1.8 + 12 MP f/2.4 | Avant : 7 MP f/2.2Arrière : 12 MP f/1.8 + 12 MP f/2.4 | Avant : 7 MP f/2.2',
                        style: 'visibility: visible; margin: 7% 0% 0% 50%;',
                        start: 0.12, end: 0.12,
                        theme: 'light',
                        arrow: 'left'
                    },
                },
                {
                    currentComponent: 'SiLink',
                    currentProps: {
                        text: 'Visit our web site and buy it now!',
                        style: 'visibility: visible; margin: 10% 0% 0% 32%;',
                        url: 'https://www.apple.com/ma/iphone/',
                        start: 1.12, end: 1.18,
                        theme: 'dark',
                    },
                },
                {
                    currentComponent: 'SiForm', 
                    currentProps: {
                        style: 'visibility: visible; margin: 15% 0% 0% 32%;',
                        start: 1.4, end: 1.51,
                        theme: 'dark',
                    },
                },
                {
                    currentComponent: 'SiLink', 
                    currentProps: {
                        text: 'Youtube.com', url: 'https://www.youtube.com',
                        style: 'visibility: visible; margin: 8% 0% 0% 45%;',
                        start: 0.26, end: 0.3,
                        theme: 'dark',
                    },
                },
                {
                    currentComponent: 'SiSelect',
                    currentProps: {
                        items: [
                            {name: 'blue', moveTo: 48.145067}, 
                            {name: 'golden', moveTo: 54.59333}, 
                            {name: 'black', moveTo: 131.892914}, 
                            {name: 'white', moveTo: 70.317959}
                        ],
                        style: 'visibility: visible; margin: 30% 0% 0% 32%;',
                        start: 1.19, end: 1.19,
                        theme: 'dark',
                    },
                },
                // {
                //     currentComponent: 'SiMoveTo',
                //     currentProps: {
                //         start: 0.12,
                //         moveTo: 20.9864940,
                //     },
                // },
            ],
        }
    },
    methods: {
        fnt() {
            // console.log((this.$refs.siVideo.currentTime));
        },
        onEnd() {
            this.isVideoEnd = true;
        },
        getCurrentTime() {
            // console.log(((this.$refs.siVideo.currentTime)/100).toFixed(3));
            window.siVideo = this.$refs.siVideo;
            this.currentTime = (((this.$refs.siVideo.currentTime).toFixed(0))/100);
        },
        replayVideo() {
            this.isVideoEnd = false;
            this.$refs.siVideo.currentTime = 0;
            this.$refs.siVideo.play();
        },
    },
}
</script>