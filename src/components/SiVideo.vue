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
            <SiSkipButton :elements="elements" v-if="isVideoPaused" />
            <SiPlayButton v-if="!isVideoStart" @playVideo="playVideo()" />
            <SiReplayButton v-if="isVideoEnd" @replayVideo="replayVideo()" />
        </div>
        
        <!-- <video @click="getCursorPosition()" ref="siVideo" class="siVideo" controls @timeupdate="getCurrentTime()" @ended="onEnd()"> -->
        <video ref="siVideo" class="siVideo" controls @ended="onEnd()" oncontextmenu="return false">
            <source src="./../assets/videos/video.mp4" type="video/mp4">
        </video>

    </div>
</template>

<script>

// trate the case of unskipable elements : skip btn should get ele.skipable in props => skip btn in loop

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

import axios from 'axios';

window.passedComponents = [];
window.isVideoPaused = false;

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
            isVideoPaused: false,
            elements: [],
        }
    },
    async created() {
        try {
            this.elements= await axios.get("http://localhost:3000/api/insert");
            this.elements = this.elements.data;
            console.log(this.elements);
        }
        catch (err) {
            console.log(err);
        }        
    },
    methods: {
        onEnd() {
            this.isVideoEnd = true;
            this.elements.forEach(element => {
                element.currentProps.style += 'visibility: visible;';
            });
        },
        replayVideo() {
            this.isVideoEnd = false;
            this.$refs.siVideo.currentTime = 0;
            this.$refs.siVideo.play();
        },
        playVideo() {           
            window.siVideo = this.$refs.siVideo;            
            this.isVideoStart = true;
            window.siVideo.play();
                       
            setInterval(()=> {
                this.isVideoPaused = window.isVideoPaused;
                this.currentTime = (((window.siVideo.currentTime)/100).toFixed(3));
                
                this.elements.forEach(element => {
                    if(element.currentProps.start == this.currentTime) {
                        window.passedComponents.push(element);
                    }
                });
            }, 100);
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
                console.log("x: "+ xp +" ; y: "+ yp);
            }
        }
    },
}
</script>