<template>
    <div class="admin-main">
        <div v-if="showRefModal">
                <ConfirmAddModal :success="success" />
        </div>

        <SiSidebar @getComponentName="getComponentName" />
        <div class="main-container">
            <div class="global-container">
                <div>
                    <button v-if="!isSideberOpened" class="open-sidebar" @click="openSidebar()">Add element</button>
                    <button v-if="isSideberOpened" class="close-sidebar" @click="closeSidebar()">Close</button>
                    <input class="upload-video-btn" type="file">
                </div>
                <div class="admin-video-container">
                    <div id="admin-elementsDiv" class="admin-elementsDiv">

                        <SiPlayButton style="visibility: hidden;" v-if="!isVideoStart" @playVideo="playVideo()" />
                        <SiReplayButton v-if="isVideoEnd" @replayVideo="replayVideo()" />
                        <SiMutedButton v-if="!isVideoEnd && isVideoStart" :isMuted="isVideoMuted" @changeVideoSound="changeVideoSound()" />
                        <SiPlayPauseButton v-if="!isVideoEnd && isVideoStart" :isPaused="isVideoPaused" @changeVideoState="changeVideoState()" />

                        <!-- <component id="compoo"
                            :is="'SiBubble'" 
                            v-bind="{theme: theme,arrow: arrow,text: text,}" 
                            :style="{visibility: 'visible'}"
                        /> -->
                        <div class="si-bubble-draggable" @mousemove="getPosition()">
                            <SiBubble v-if="componentName == 'SiBubble'"
                                class="si-bubble-dragger"
                                :style="{visibility: 'visible'}" :theme="theme"
                                :arrow="arrow" :text="text"
                            />
                        </div>
                        <div class="si-link-draggable" @mousemove="getPosition()">
                            <SiLink v-if="componentName == 'SiLink'" 
                            class="si-link-dragger si-link-default"
                            :style="{visibility: 'visible'}" :theme="theme" 
                            :text="text" :url="url"
                        />
                        </div>
                        <div class="si-button-draggable" @mousemove="getPosition()">
                            <SiButton 
                                class="si-button-dragger"
                                v-if="componentName == 'SiButton'" 
                                :style="{visibility: 'visible'}" :theme="theme"  
                                :text="text" :moveTo=0
                        />
                        </div>
                        <div class="si-form-draggable" @mousemove="getPosition()">
                            <SiForm v-if="componentName == 'SiForm'"
                                class="si-form-dragger"
                                :style="{visibility: 'visible'}" :theme="theme" 
                            />
                        </div>
                        <div class="si-select-draggable" @mousemove="getPosition()">
                            <SiSelect v-if="componentName == 'SiSelect'" 
                                class="si-select-dragger si-select-default"
                                :style="{visibility: 'visible'}" :theme="theme"
                                :select_title="selectTitle" :items="selectItems"
                            />
                        </div>
                        <div class="si-btn-tag-draggable" @mousemove="getPosition()">
                            <SiTagProduct v-if="componentName == 'SiTagProduct'"
                                class="si-btn-tag-dragger"
                                :style="{visibility: 'visible'}" :theme="theme" 
                                :url="url"
                            />
                        </div>
                    </div>
                    <video class="admin-video" @ended="onEnd()">
                        <!-- <source src="../assets/videos/video.mp4" type="video/mp4" > -->
                    </video>
                </div>
                <div>
                    <p class="current-time-text">{{currentTime}}</p>
                    <VideoTimeLine />
                </div>
            </div>
            
            <div class="elements-form">
                <form class="input-group" v-if="componentName!='' && isSideberOpened" @submit.prevent="insertObjetToDB()">
                    <h2>Fill in this form please</h2>
                    <div v-if="componentName!='SiMoveTo'">
                        <div class="form-block">
                            <div class="form-block-item">
                                <label class="form-label">Start Time</label>
                                <input class="form-input start-time" type="number" min="0" disabled required>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">End Time</label>
                                <input class="form-input end-time" type="number" min="0" disabled required>
                            </div>
                        </div>
                        <!-- <div class="form-block">
                            <div class="form-block-item">
                                <label class="form-label">Position X</label>
                                <input class="form-input" v-model="left"
                                    type="number" min="0" max="100" disabled>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Position Y</label>
                                <input class="form-input" v-model="top"
                                    type="number" min="0" max="100" disabled>
                            </div>
                        </div> -->
                        <div class="form-block">
                            <!-- <div class="form-block-item">
                                <label class="form-label">Skippable</label>
                                <select class="form-input" name="skippable" v-model="skippable" required>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div> -->
                            <div class="form-block-item">
                                <label class="form-label" style="position: relative">Stop video</label><br>
                                <input @change="fnt()" type="checkBox">
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Theme</label>
                                <select class="form-input" name="theme" v-model="theme" required>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                        </div>
                        <!-- Bubble -->
                        <div class="form-block" v-if="componentName=='SiBubble'">
                            <div class="form-block-item">
                                <label class="form-label">Text</label>
                                <input class="form-input" type="text" v-model="text" required>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Arrow</label>
                                <select class="form-input" name="arrow" v-model="arrow" required>
                                    <option value="top-left">Top left</option>
                                    <option value="top-right">Top right</option>
                                    <option value="bottom-left">Bottom left</option>
                                    <option value="bottom-right">Bottom right</option>
                                </select>
                            </div>
                        </div>
                        <!-- Button -->
                        <div class="form-block" v-if="componentName=='SiButton'">
                            <div class="form-block-item">
                                <label class="form-label">Text</label>
                                <input class="form-input" type="text" v-model="text" required>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Move to</label>
                                <input class="form-input" type="number" v-model="moveTo" disabled required>
                            </div>
                        </div>
                        <!-- Link -->
                        <div class="form-block" v-if="componentName=='SiLink'">
                            <div class="form-block-item">
                                <label class="form-label">Text</label>
                                <input class="form-input" type="text" v-model="text" required>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">URL</label>
                                <input class="form-input" type="text" v-model="url" required>
                            </div>
                        </div>
                        <!-- Select -->
                        <div v-if="componentName=='SiSelect'" class="form-block">
                            <div class="form-block">
                                <div class="form-block-item">
                                    <label class="form-label">Select title</label>
                                    <input class="form-input" type="text" v-model="selectTitle" required>
                                </div>
                                <div class="form-block-item">
                                    <label class="form-label">Item name</label>
                                    <input class="form-input" type="text" v-model="selectItemName">
                                </div>
                                <div class="form-block-item">
                                    <label class="form-label">Item value(Move to)</label>
                                    <input class="form-input" type="text" v-model="moveTo">
                                </div>
                                <button @click.prevent="getCurrentTime('moveTo')" class="btn-group-item">get move to
                            </button>
                            </div>
                            <button @click.prevent="addItemToSelectList({name: selectItemName, moveTo: moveTo})"
                                v-if="selectItemName && moveTo" 
                                class="btn-group-item save-btn">Add to list
                            </button>
                        </div>
                        <!-- Tag product -->
                        <div class="form-block" v-if="componentName=='SiTagProduct'">
                            <div class="form-block-item">
                                <label class="form-label">URL</label>
                                <input class="form-input" type="text" v-model="url" required>
                            </div>
                        </div>
                    </div>
                    <!-- Move to -->
                    <div class="form-block" v-if="componentName=='SiMoveTo'">
                        <div class="form-block-item">
                            <label class="form-label">Start Time</label>
                            <input class="form-input" type="number" min="0" :value="startTime" disabled required>
                        </div>
                        <div class="form-block-item">
                            <label class="form-label">Move to</label>
                            <input class="form-input" type="number" min="0" :value="moveTo" disabled required>
                        </div>
                    </div>


                    <div class="form-block">
                        <!-- <button class="btn-group-item" @click="getPosition()">Get position</button> -->
                        <!-- <button @click.prevent="getCurrentTime('start')" class="btn-group-item">get start time</button> -->
                        <!-- <button @click.prevent="getCurrentTime('end')"  class="btn-group-item"
                                v-if="componentName!='SiMoveTo'">get end time
                        </button> -->
                        <button @click.prevent="getCurrentTime('moveTo')" class="btn-group-item"
                                v-if="componentName=='SiMoveTo' || componentName=='SiButton'">get move to
                        </button>
                        <button type="submit" class="save-btn">Save element</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
// make the pos of red line and item progress with % not px
// make red line follow the current video time

// add login to access admin and client space

// add borders to time line progress so if its width == 0 we can dragg it from borders

// essayer de rendre l'appel des components dynamique

import axios from 'axios';
import SiLink from '../components/SiLink';
import SiForm from '../components/SiForm';
import SiBubble from '../components/SiBubble';
import SiSelect from '../components/SiSelect';
import SiButton from '../components/SiButton';
import SiTagProduct from '../components/SiTagProduct';
import SiSidebar from '../components/adminComponents/SiSidebar';
import ConfirmAddModal from '../components/adminComponents/ConfirmAddModal';
import SiPlayButton from '../components/SiPlayButton';
import SiReplayButton from '../components/SiReplayButton';
import VideoTimeLine from '../components/adminComponents/VideoTimeLine';
import SiMutedButton from '../components/adminComponents/SiMutedButton';
import SiPlayPauseButton from '../components/adminComponents/SiPlayPauseButton';

export default {
    components: {
        SiBubble,
        SiButton,
        SiForm,
        SiLink,
        SiSelect,
        SiTagProduct,
        SiSidebar ,
        ConfirmAddModal,
        SiPlayButton,
        SiReplayButton,
        VideoTimeLine,
        SiMutedButton,
        SiPlayPauseButton,
    },
    data() {
        return {
            text: '',
            theme: '',
            arrow: '',
            left: 0,
            top: 0,
            url: '',
            moveTo: 0,
            skippable: true,
            selectTitle: '',
            selectItems: [],
            selectItemName: '',
            selectItemMoveto: '',
            componentName: '',
            componentProps: {},
            endTime: 0,
            startTime: 0,
            componentObject: {},
            isComponentShows: false,
            isSideberOpened: false,
            object: {},
            showRefModal: false,
            success: true,
            videoDuration: 0,
            isVideoStart: false,
            isVideoEnd: false,
            isVideoMuted: false,
            isVideoPaused: true,
            currentTime: "00:00",
        }
    },
    created() {
        localStorage.removeItem('videoLink'); 
    },
    methods: {
        fnt() {
            var startTimeInput = document.getElementsByClassName('start-time')[0];
            var endTimeInput = document.getElementsByClassName('end-time')[0];

            endTimeInput.value = startTimeInput.value;
        },
        closeModal () {
            this.showRefModal = !this.showRefModal;
        },
        openSidebar() {
            document.getElementsByClassName("main-menu")[0].style.width = "14%";
            document.getElementsByClassName("main-container")[0].style.width = "83%";
            this.isSideberOpened = true;
        },
        closeSidebar() {
            this.componentName = '';
            window.componentDraggClass = '';
            this.isComponentShows = false;
            document.getElementsByClassName("main-menu")[0].style.width = "5%";
            document.getElementsByClassName("main-container")[0].style.width = "90%";
            this.isSideberOpened = false;

            var imgs = document.getElementsByClassName('li-icon');
            var lis = document.getElementsByClassName('menu-item');
            lis.forEach(li => {
                li.style.backgroundColor = 'white';
            });
            imgs.forEach(img => {
                img.style.filter = 'invert(50%) sepia(10%) saturate(4000%) hue-rotate(165deg)';
            });

            document.getElementsByClassName('time-line')[0].style.visibility = 'hidden';
            document.getElementsByClassName('time-line-dragger')[0].style.visibility = 'hidden';
        },

        getComponentName(componentName, draggClass){
                       
            var adminVideo = document.getElementsByClassName('admin-video')[0];
            window.videoDuration = adminVideo.duration;
            var currentTime = adminVideo.currentTime;
            var videoPosition = (currentTime*100) / window.videoDuration;
            var defaultWidth = ((10*100)/window.videoDuration);

            var ItemTimeLine = document.getElementsByClassName('time-line')[0];
            var timeLineDragger = document.getElementsByClassName('time-line-dragger')[0];
            var timeLineProgress = document.getElementsByClassName('time-line-progress')[0];

            var timeLineProgressEndPos = videoPosition + defaultWidth;
            var defaultEndTime = ((timeLineProgressEndPos * window.videoDuration) / 100);
            
            if(!this.isComponentShows) {
                this.componentName = componentName;
                window.componentDraggClass = draggClass;
                this.openSidebar();
                this.isComponentShows = true;
                
                ItemTimeLine.style.visibility = 'visible';
                timeLineDragger.style.visibility = 'visible';

                timeLineProgress.style.width = defaultWidth+'%';
                timeLineProgress.style.left = videoPosition+ '%';

                setTimeout(()=>{
                    var startTimeInput = document.getElementsByClassName('start-time')[0];
                    var endTimeInput = document.getElementsByClassName('end-time')[0];

                    if (startTimeInput && endTimeInput) {
                        startTimeInput.value = (currentTime/100).toFixed(3);
                        endTimeInput.value = (defaultEndTime/100).toFixed(3);
                    }
                }, 100);


            }
            else {
                if(this.componentName == componentName) {
                    this.componentName = '';
                    window.componentDraggClass = '';
                    this.closeSidebar();
                    this.isComponentShows = false;

                    ItemTimeLine.style.visibility = 'hidden';
                    timeLineDragger.style.visibility = 'hidden';
                }
                else {
                    this.isComponentShows = false;
                    this.getComponentName(componentName, draggClass);
                }
            }
        },

        getCurrentTime(time) {
            var video = document.getElementsByClassName('admin-video')[0];
            if(time == 'start') {
                this.startTime = (video.currentTime/100).toFixed(3);
            }
            if(time == 'end') {
                this.endTime = (video.currentTime/100).toFixed(3);
            }
            if(time == 'moveTo') {
                this.moveTo = video.currentTime;
            }
        },
        getPosition() {
            var top = document.getElementsByClassName(`si-${window.componentDraggClass}-draggable`)[0].style.top.slice(0, -2);
            var left = document.getElementsByClassName(`si-${window.componentDraggClass}-draggable`)[0].style.left.slice(0, -2);
            var videoHeight = document.getElementsByClassName('admin-video')[0].offsetHeight;
            var videoWidth = document.getElementsByClassName('admin-video')[0].offsetWidth;
            var pt = (top / videoHeight) * 100;
            var pl = (left / videoWidth) * 100;
            this.top = pt;
            this.left = pl;
        },
        addItemToSelectList(item) {
            this.selectItems.push(item);
            this.selectItemName = '';
            this.selectItemMoveto = '';
            this.moveTo = '';
        },
        async insertObjetToDB() {

            var startTimeInput = document.getElementsByClassName('start-time')[0];
            var endTimeInput = document.getElementsByClassName('end-time')[0];

            if (startTimeInput && endTimeInput) {
                this.startTime = startTimeInput.value;
                this.endTime = endTimeInput.value;                
            }

            if(this.componentName == 'SiBubble') {
                this.componentObject = {
                    currentComponent: this.componentName,
                    currentProps: {
                        text: this.text,
                        style: `visibility: visible; top: ${this.top}%; left: ${this.left}%;`,
                        start: this.startTime, end: this.endTime, theme: this.theme,
                        arrow: this.arrow, skippable: this.skippable,
                    },
                };
            }
            if(this.componentName == 'SiButton') {
                this.componentObject = {
                    currentComponent: this.componentName,
                    currentProps: {
                        text: this.text,
                        style: `visibility: visible; top: ${this.top}%; left: ${this.left}%;`,
                        start: this.startTime, end: this.endTime, theme: this.theme, 
                        moveTo: this.moveTo, skippable: this.skippable,
                    },
                };
            }
            if(this.componentName == 'SiForm') {
                this.componentObject = {
                    currentComponent: this.componentName,
                    currentProps: {
                        style: `visibility: visible; top: ${this.top}%; left: ${this.left}%;`,
                        start: this.startTime, end: this.endTime,
                        theme: this.theme, skippable: this.skippable,
                    },
                };
            }
            if(this.componentName == 'SiLink') {
                this.componentObject = {
                    currentComponent: this.componentName,
                    currentProps: {
                        text: this.text,
                        style: `visibility: visible; top: ${this.top}%; left: ${this.left}%;`,
                        start: this.startTime, end: this.endTime, theme: this.theme,
                        url: this.url, skippable: this.skippable,
                    },
                };
            }
            if(this.componentName == 'SiSelect') {
                this.componentObject = {
                    currentComponent: this.componentName,
                    currentProps: {
                        select_title: this.selectTitle,
                        style: `visibility: visible; top: ${this.top}%; left: ${this.left}%;`,
                        start: this.startTime, end: this.endTime, theme: this.theme,
                        items: this.selectItems, skippable: this.skippable,
                    },
                };
            }
            if(this.componentName == 'SiTagProduct') {
                this.componentObject = {
                    currentComponent: this.componentName,
                    currentProps: {
                        style: `visibility: visible; top: ${this.top}%; left: ${this.left}%;`,
                        start: this.startTime, end: this.endTime, theme: this.theme, 
                        url: this.url, skippable: this.skippable,
                    },
                };
            }
            if(this.componentName == 'SiMoveTo') {
                this.componentObject = {
                    currentComponent: this.componentName,
                    currentProps: {
                        start: this.startTime,
                        moveTo: this.moveTo,
                    },
                };
            }
            
            this.object = await axios.post(`http://localhost:3000/api/insert-object`, this.componentObject)
            .then(() => {
                this.showRefModal = !this.showRefModal;
                this.clearInputs();
                this.closeSidebar();
                this.openSidebar();
                setTimeout(()=> { 
                    this.showRefModal = !this.showRefModal 
                }, 1000);
            })
            .catch((err)=>{
                this.success = false;
                this.showRefModal = !this.showRefModal;
                setTimeout(()=> { 
                    this.showRefModal = !this.showRefModal 
                }, 1000);
                console.log(err);
            });
        },
        clearInputs() {
            this.selectItems = [];
            this.skippable = true;
            this.selectItemName = this.selectItemMoveto = this.componentName = '';
            this.text = this.theme = this.arrow = this.url = this.selectTitle = '';
            this.top = this.left = this.endTime = this.startTime = this.moveTo= 0;
            this.componentProps = this.componentObject = {};
        },
        playVideo() {
            var adminVideo = document.getElementsByClassName('admin-video')[0];
            var duration = adminVideo.duration;
            adminVideo.play();       
            this.isVideoStart = true;

            setInterval(()=> {
                var currentTime = adminVideo.currentTime;
                this.currentTime = ((currentTime/100).toFixed(3)).replace('.', ':');
                var videoPostion = ((currentTime * 100) / duration).toFixed(2);
                var videoTimeProgress = document.getElementsByClassName('time-progress')[0];
                videoTimeProgress.style.width = videoPostion+'%';
            }, 100);
        },
        replayVideo() {
            this.isVideoEnd = false;
            document.getElementsByClassName('admin-video')[0].currentTime = 0;
            document.getElementsByClassName('admin-video')[0].play();
        },
        onEnd() {
            this.isVideoEnd = true;
        },
        changeVideoSound() {
            var adminVideo = document.getElementsByClassName('admin-video')[0];
            this.isVideoMuted = !this.isVideoMuted;
            adminVideo.muted = !adminVideo.muted;
        },
        changeVideoState() {
            var adminVideo = document.getElementsByClassName('admin-video')[0];
            this.isVideoPaused = !this.isVideoPaused;
            if (adminVideo.paused) {
                adminVideo.play(); 
            }
            else {
                adminVideo.pause();
            }
        },
    },
}
</script>