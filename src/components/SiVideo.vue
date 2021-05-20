<template>
    <div class="container">
        <div class="elementsDiv">
            <div v-for="(element, index) in this.elements" :key="index">

                <component
                    id="myComponent" 
                    v-if="element.currentProps.start <= `${currentTime}` 
                    && element.currentProps.end >= `${currentTime}`" 
                    :is="element.currentComponent" v-bind="element.currentProps" 
                />
                <!-- v-on="element.currentMethodes" -->
                <component 
                    v-if="element.currentComponent =='SiMoveTo' 
                    && element.currentProps.start <= `${currentTime}`" 
                    :is="element.currentComponent" v-bind="element.currentProps"
                />
            </div>
            <SiSkipButton :elements="elements" v-if="isVidepPaused" />
            <SiPlayButton v-if="!isVideoStart" @playVideo="playVideo()" />
            <SiReplayButton v-if="isVideoEnd" @replayVideo="replayVideo()" />
        </div>
        
        <!-- <video @click="getCursorPosition()" ref="siVideo" class="siVideo" controls @timeupdate="getCurrentTime()" @ended="onEnd()"> -->
        <video ref="siVideo" class="siVideo" controls @timeupdate="getCurrentTime()" @ended="onEnd()" oncontextmenu="return false">
            <source src="../assets/video.mp4" type="video/mp4" >
        </video>

        <!-- <button @click="fnt()">click</button> -->
    </div>
</template>

<script>

// trate the case of unskipable elements : skip btn should get ele.skipable in props => skip btn in loop
// add a play pause video btn in the buttom and it change automatically using the data we have in this page
// get the start and end time but take them like seconds to put them in settimeout
// find a way to make divElement on top of video in fullscreen

import SiForm from './SiForm';
import SiLink from './SiLink';
import SiButton from './SiButton';
import SiBubble from './SiBubble';
import SiSelect from './SiSelect';
import SiMoveTo from './SiMoveTo';
import SiPlayButton from './SiPlayButton';
import SiTagProduct from './SiTagProduct';
import SiSkipButton from './SiSkipButton';
import SiReplayButton from './SiReplayButton';


window.passedComponents = [];
window.isVidepPaused = false;

export default {
    name: 'SiVideo',
    components: {
        SiForm,
        SiLink,
        SiButton,
        SiBubble,
        SiSelect,
        SiMoveTo,
        SiPlayButton,
        SiTagProduct,
        SiSkipButton,
        SiReplayButton,
    },
    data() {
        return {

            currentTime: 0,
            isVideoEnd: false,
            isVideoStart: false,
            isVidepPaused: false,
            elements: [
                {
                    id: 0,
                    currentComponent: 'SiSelect',
                    currentProps: {
                        select_title: 'Choose what do you want to know about this phone',
                        items: [
                            {name: 'display', moveTo: 17.810878}, 
                            {name: 'plateform', moveTo: 26.751889}, 
                            {name: 'storage', moveTo: 38.131214}, 
                            {name: 'processor', moveTo: 48.607019}, 
                            {name: 'back camera', moveTo: 62.933575}, 
                            {name: 'touch ID', moveTo: 66.586525},
                            {name: 'wireless charging', moveTo: 73.697076},
                            {name: 'front camera', moveTo: 88.855526},
                            {name: 'colors', moveTo: 93.489768},
                            {name: 'design', moveTo: 103.686094},
                        ],
                        style: 'visibility: visible; top: 5%; left: 3%;',
                        start: 0.16, end: 0.16,
                        theme: 'light',
                        skipable: false,
                    },
                },
                {
                    id: 1,
                    currentComponent: 'SiLink',
                    currentProps: {
                        text: 'Read more about A15 Bionic',
                        style: 'visibility: visible; top: 8%; left: 37%;',
                        url: 'https://youtube.com',
                        start: 0.58, end: 0.62,
                        theme: 'light',
                        skipable: true,
                    },
                },
                {
                    id: 2,
                    currentComponent: 'SiTagProduct',
                    currentProps: {
                        style: 'visibility: visible; top: 49%; left: 19.5%;',
                        url: 'https://www.apple.com/shop/buy-iphone/iphone-12-pro',
                        start: 1.02, end: 1.02,
                        theme: 'light',
                        skipable: true,
                    },
                },
                {
                    id: 3,
                    currentComponent: 'SiTagProduct',
                    currentProps: {
                        style: 'visibility: visible; top: 49%; left: 37.5%;',
                        url: 'https://google.com',
                        start: 1.02, end: 1.02,
                        theme: 'light',
                        skipable: true,
                    },
                },
                {
                    id: 4,
                    currentComponent: 'SiTagProduct',
                    currentProps: {
                        style: 'visibility: visible; top: 49%; left: 56%;',
                        url: 'https://google.com',
                        start: 1.02, end: 1.02,
                        theme: 'light',
                        skipable: true,
                    },
                },
                {
                    id: 5,
                    currentComponent: 'SiTagProduct',
                    currentProps: {
                        style: 'visibility: visible; top: 49%; left: 76%;',
                        url: 'https://google.com',
                        start: 1.02, end: 1.02,
                        theme: 'light',
                        skipable: true,
                    },
                },
                {
                    id: 6,
                    currentComponent: 'SiBubble',
                    currentProps: {
                        text: '120Hz OLED',
                        style: 'visibility: visible; top: 18%; left: 21%;',
                        start: 0.23, end: 0.25,
                        theme: 'light',
                        arrow: 'right',
                        skipable: true,
                    },
                },
                {
                    id: 7,
                    currentComponent: 'SiBubble',
                    currentProps: {
                        text: 'HDR10+',
                        style: 'visibility: visible; top: 46%; left: 60%;',
                        start: 0.23, end: 0.25,
                        theme: 'light',
                        arrow: 'left',
                        skipable: true,
                    },
                },
                // {
                //     id: 8,
                //     currentComponent: 'SiButton',
                //     currentProps: {
                //         text: 'move to button',
                //         style: 'visibility: visible; top: 53%; left: 12%;',
                //         moveTo: 60.337806, start: 0.01, end: 0.01,
                //         theme: 'dark',
                //         skipable: true,
                //     },
                // },                
                {
                    id: 9,
                    currentComponent: 'SiForm', 
                    currentProps: {
                        style: 'visibility: visible; top: 21%; left: 36%;',
                        start: 1.33, end: 1.33,
                        theme: 'light',
                        skipable: true,
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
            console.log((this.$refs.siVideo.currentTime));
        },
        onEnd() {
            this.isVideoEnd = true;
            this.elements.forEach(element => {
                element.currentProps.style += 'visibility: visible;';
            });
            console.log(this.elements)
        },
        getCurrentTime() {
            // console.log(((this.$refs.siVideo.currentTime)/100).toFixed(3));
            window.siVideo = this.$refs.siVideo;
            this.isVidepPaused = window.isVidepPaused;
            this.currentTime = (((this.$refs.siVideo.currentTime).toFixed(0))/100);

            this.elements.forEach(element => {
                if(element.currentProps.start == this.currentTime) {
                    window.passedComponents.push(element);
                }
            });
        },
        replayVideo() {
            this.isVideoEnd = false;
            this.$refs.siVideo.currentTime = 0;
            this.$refs.siVideo.play();
        },
        playVideo() {
            this.isVideoStart = true;
            this.$refs.siVideo.play();
        },

        getCursorPosition() {
            var divElements = document.querySelector("#app > div > div");
            // var element = document.getElementById('myComponent');
            
            divElements.onclick = function clickEvent(e) {
                var rect = e.target.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                
                var xp = x / (document.querySelector("#app > div > div > div").offsetWidth) * 100;
                var yp = y / (document.querySelector("#app > div > div > div").offsetHeight) * 100;
                // element.style.top = yp+"%";
                // element.style.left = xp+"%";
                console.log("x: "+ xp +" ; y: "+ yp);
            }
        }
    },
}
</script>