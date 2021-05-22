<template>

    <div class="main">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap" rel="stylesheet">

        <SiSidebar @getComponentName="getComponentName" />

        <div class="container">
            <div class="btn-group">
                <button v-if="!isSideberOpened" class="btn1" @click="openSidebar()">Add element</button>
                <button v-if="isSideberOpened" class="btn1" @click="closeSidebar()">Close</button>
            </div>
            <div class="video-container">
                <div id="elementsDiv" class="elementsDiv">   
                    <!-- <component id="compoo"
                        :is="'SiBubble'" 
                        v-bind="{theme: theme,arrow: arrow,text: text,}" 
                        :style="{visibility: 'visible'}"
                    /> -->>
                    <div class="si-bubble-draggable">
                        <SiBubble v-if="componentName == 'SiBubble'"
                            class="si-bubble-dragger"
                            :style="{visibility: 'visible'}" :theme="theme"
                            :arrow="arrow" :text="text"
                        />
                    </div>
                    <div class="si-link-draggable">
                        <SiLink v-if="componentName == 'SiLink'" 
                        class="si-link-dragger"
                        :style="{visibility: 'visible'}" :theme="theme" 
                        :text="text" :url="url"
                    />
                    </div>
                    <div class="si-button-draggable">
                        <SiButton 
                            class="si-button-dragger"
                            v-if="componentName == 'SiButton'" 
                            :style="{visibility: 'visible'}" :theme="theme"  
                            :text="text" :moveTo=0
                        />
                    </div>
                    <div class="si-form-draggable">
                        <SiForm v-if="componentName == 'SiForm'"
                            class="si-form-dragger"
                            :style="{visibility: 'visible'}" :theme="theme" 
                        />
                    </div>
                    <div class="si-select-draggable">
                         <SiSelect v-if="componentName == 'SiSelect'" 
                            class="si-select-dragger"
                            :style="{visibility: 'visible'}" :theme="theme"
                            :select_title="selectTitle" :items="selectItems"
                        />
                    </div>
                    <div class="si-btn-tag-draggable">
                        <SiTagProduct v-if="componentName == 'SiTagProduct'" 
                            id="azaz"
                            class="si-btn-tag-dragger"
                            :style="{visibility: 'visible'}" :theme="theme" 
                            :url="url"
                        />
                    </div> 
                </div>
                <video class="siVideo" controls>
                    <source src="../assets/video.mp4" type="video/mp4" >
                </video>
            </div>
            
            <div class="elements-form">
                <div class="input-group" v-if="componentName!='' && isSideberOpened">
                    <h2>Fill in this form please</h2>
                    <div v-if="componentName!='SiMoveTo'">
                        <div class="form-block">
                            <div class="form-block-item">
                                <label class="form-label">Start Time</label>
                                <input class="form-input" type="number" min="0" :value="startTime" disabled>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">End Time</label>
                                <input class="form-input" type="number" min="0" :value="endTime" disabled>
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="form-block-item">
                                <label class="form-label">Position X</label>
                                <input class="form-input" :value="left"
                                    type="number" min="0" max="100" disabled>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Position Y</label>
                                <input class="form-input" :value="top"
                                    type="number" min="0" max="100" disabled>
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="form-block-item">
                                <label class="form-label">Skippable</label>
                                <select class="form-input" name="skippable" v-model="skippable">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Theme</label>
                                <select class="form-input" name="theme" v-model="theme">
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                        </div>
                        <!-- Bubble -->
                        <div class="form-block" v-if="componentName=='SiBubble'">
                            <div class="form-block-item">
                                <label class="form-label">Text</label>
                                <input class="form-input" type="text" v-model="text">
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Arrow</label>
                                <select class="form-input" name="arrow" v-model="arrow">
                                    <option value="left">Left</option>
                                    <option value="right">right</option>
                                </select>
                            </div>
                        </div>
                        <!-- Button -->
                        <div class="form-block" v-if="componentName=='SiButton'">
                            <div class="form-block-item">
                                <label class="form-label">Text</label>
                                <input class="form-input" type="text" v-model="text">
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Move to</label>
                                <input class="form-input" type="number" v-model="moveTo">
                            </div>
                        </div>
                        <!-- Link -->
                        <div class="form-block" v-if="componentName=='SiLink'">
                            <div class="form-block-item">
                                <label class="form-label">Text</label>
                                <input class="form-input" type="text" v-model="text">
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">URL</label>
                                <input class="form-input" type="text" v-model="url">
                            </div>
                        </div>
                        <!-- Select -->
                        <form v-if="componentName=='SiSelect'" class="form-block" @submit.prevent="addSelectItem({name: selectItemName, moveTo: selectItemMoveto})">
                            <div class="form-block">
                                <div class="form-block-item">
                                    <label class="form-label">Select title</label>
                                    <input class="form-input" type="text" v-model="selectTitle" required>
                                </div>
                            </div>
                            <div class="form-block-item">
                                <label class="form-label">Item name</label>
                                <input class="form-input" type="text" v-model="selectItemName" required>
                            </div>
                            <div class="form-block-item" style="margin-right: 10px;">
                                <label class="form-label">Item value(Move to)</label>
                                <input class="form-input" type="text" v-model="selectItemMoveto" required>
                            </div>
                            <button class="add-select-btn">+</button>
                        </form>
                        <!-- Tag product -->
                        <div class="form-block" v-if="componentName=='SiTagProduct'">
                            <div class="form-block-item">
                                <label class="form-label">URL</label>
                                <input class="form-input" type="text" v-model="url">
                            </div>
                        </div>
                    </div>
                    <!-- Move to -->
                    <div class="form-block" v-if="componentName=='SiMoveTo'">
                        <div class="form-block-item">
                            <label class="form-label">Start Time</label>
                            <input class="form-input" type="number" min="0" :value="startTime" disabled>
                        </div>
                        <div class="form-block-item">
                            <label class="form-label">Move to</label>
                            <input class="form-input" type="number" min="0" v-model="moveTo">
                        </div>
                    </div>
                    
                    <button @click="getPosition()">Click</button>
                    <button @click="applyPosition()">Apply</button>
                    <button @click="currTime('start')">get start time</button>
                    <button @click="currTime('end')">get end time</button>
                    <button @click="getObject()">get Object</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// use settimeout to call getcurrenttime trying to get the same values
// bottom of the bubble cross the divelements
/*  the prblm in postion fct is in slice(.. , 2) in the first time the 
    pos is with 'px' but next with '%' so we need slice(.. , 1) so find a way to solve it*/

var componentDraggClass;
var x, y, target = null;
document.addEventListener('mousedown', function(e) {
    var clickedDragger = false;
    for(var i = 0; e.path[i] !== document.body; i++) {
        if (e.path[i].classList.contains(`si-${componentDraggClass}-dragger`)) {
            clickedDragger = true;
        }
        else if (clickedDragger && e.path[i].classList.contains(`si-${componentDraggClass}-draggable`)) {
            target = e.path[i];
            target.classList.add('dragging');
            x = e.clientX - target.style.left.slice(0, -2);
            y = e.clientY - target.style.top.slice(0, -2);
            return;
        }
    }
});
document.addEventListener('mouseup', function() {
    if (target !== null) target.classList.remove('dragging');
    target = null;
});
document.addEventListener('mousemove', function(e) {
    if (target === null) return;
    target.style.left = e.clientX - x + 'px';
    target.style.top = e.clientY - y + 'px';
    var pRect = target.parentElement.getBoundingClientRect();
    var tgtRect = target.getBoundingClientRect();
    if (tgtRect.left < pRect.left) target.style.left = 0;
    if (tgtRect.top < pRect.top) target.style.top = 0;
    if (tgtRect.right > pRect.right) target.style.left = pRect.width - tgtRect.width + 'px';
    if (tgtRect.bottom > pRect.bottom) target.style.top = pRect.height - tgtRect.height + 'px';
});
// https://esstudio.site/2018/11/01/create-draggable-elements-with-javascript.html
import axios from 'axios';
import SiLink from '../components/SiLink';
import SiForm from '../components/SiForm';
import SiBubble from '../components/SiBubble';
import SiSelect from '../components/SiSelect';
import SiButton from '../components/SiButton';
import SiTagProduct from '../components/SiTagProduct';
import SiSidebar from '../components/adminComponents/SiSidebar';
export default {
    components: {
        SiBubble,
        SiButton,
        SiForm,
        SiLink,
        SiSelect,
        SiTagProduct,
        SiSidebar ,
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
            aa: {},
        }
    },
    created() {
        window.ele = this.$refs.sliderr;
    },
    methods: {
        async getObject() {
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
            

            // console.log(this.componentObject);

            this.aa = await axios.post(`http://localhost:3000/api/insert`, this.componentObject)
            .then(() => {
                console.log(this.aa);
            }).catch((err)=>{
                console.log(err);
            });

            this.top = 0;
            this.left = 0;
            this.text = '';
            this.theme = '';
            this.arrow = '';
            this.endTime = 0;
            this.startTime = 0;
            this.skippable = true;
            this.url = '';
            this.moveTo= 0;
            this.skippable= true;
            this.selectTitle= '';
            this.selectItems= [];
            this.selectItemName= '';
            this.selectItemMoveto= '';
            this.componentProps= {};
            this.componentObject = {};
        },
        currTime(time) {
            var video = document.getElementsByClassName('siVideo')[0];
            if(time == 'start') {
                this.startTime = video.currentTime;
                console.log(this.startTime);
            }
            if(time == 'end') {
                this.endTime = video.currentTime;
                console.log(this.endTime);
            }
        },
        getPosition() {
            var top = document.getElementsByClassName(`si-${componentDraggClass}-draggable`)[0].style.top.slice(0, -2);
            var left = document.getElementsByClassName(`si-${componentDraggClass}-draggable`)[0].style.left.slice(0, -2);
            var videoHeight = document.getElementsByClassName('siVideo')[0].offsetHeight;
            var videoWidth = document.getElementsByClassName('siVideo')[0].offsetWidth;
            var pt = (top / videoHeight) * 100;
            var pl = (left / videoWidth) * 100;
            console.log('aa : '+pt, +' '+pl);
            // document.getElementsByClassName(`si-${componentDraggClass}-draggable`)[0].style.top = pt+'%';
            // document.getElementsByClassName(`si-${componentDraggClass}-draggable`)[0].style.left = pl+'%';
            this.applyPosition(pt, pl);
        },
        applyPosition(pt, pl) {
            this.top = pt;
            this.left = pl;
            // document.getElementsByClassName(`si-${componentDraggClass}-draggable`)[0].style.top = pt+'%';
            // document.getElementsByClassName(`si-${componentDraggClass}-draggable`)[0].style.left = pl+'%';
        },
        openSidebar() {
            document.getElementsByClassName("main-menu")[0].style.width = "15%";
            document.getElementsByClassName("container")[0].style.width = "82%";
            this.isSideberOpened = true;
        },
        closeSidebar() {
            this.componentName = '';
            componentDraggClass = '';
            this.isComponentShows = false;
            document.getElementsByClassName("main-menu")[0].style.width = "5%";
            document.getElementsByClassName("container")[0].style.width = "90%";
            this.isSideberOpened = false
        },
        getComponentName(componentName, draggClass){
            if(!this.isComponentShows) {
                this.componentName = componentName;
                componentDraggClass = draggClass;
                this.openSidebar();
                this.isComponentShows = true;
            }
            else {
                if(this.componentName == componentName) {
                    this.componentName = '';
                    componentDraggClass = '';
                    this.closeSidebar();
                    this.isComponentShows = false;
                }
                else {
                    this.isComponentShows = false;
                    this.getComponentName(componentName, draggClass);

                }
            }
        },
        addSelectItem(item) {
            this.selectItems.push(item);
            this.selectItemName = '';
            this.selectItemMoveto = '';
        }
    },
}
</script>

<style scoped>
*, body{
    margin:0;
    padding:0;
}
.main{
    font-family: 'Fira Sans', sans-serif;
}
.container{
    width: 90%;
    float: right;
    transition: .3s ease;
    padding: 10px 2% 0 0%;
    position: relative;
}
.container .video-container {
    z-index: 0;
    width: 75%;
    float: left;
    position: relative;
    margin: 20px 0 0 0px;
}
.container .video-container .siVideo {
    width: 100%;
    height: auto;
    /* position: absolute; */
    /* overflow: hidden; */
}
.container .video-container .elementsDiv {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    visibility: hidden;
}
.btn1{
    z-index: 1;
    cursor: pointer;
    font-size: 15px;
    background: none;
    transition: 0.8s;
    overflow: hidden;
    color: #2196f3;
    user-select: none;
    position: relative;
    padding: 8px 20px;
    border-radius: 5px 5px;
    font-family: "montserrat";
    border: 2px solid #2196f3;
    box-shadow: 0 0 10px rgb(163, 163, 163);
}
.btn1::before{
    top: 0;
    left: 0;
    height: 0%;
    content: "";
    z-index: -1;
    width: 100%;
    transition: 0.8s;
    position: absolute;
    background: #6bb8fd;
    border-radius: 0 0 50% 50%;
}
.btn1:hover{
    color: #fff;
    border: 2px solid #fff;
}
.btn1:hover::before{
    height: 180% ;
}
.container .elements-form{
    width: 24%;
    height: auto;
    float: right;
    user-select: none;
    position: relative;
}
.container .input-group {
    transition: 1.3s ease;
    position: absolute;
    margin: 20px 0 0 0;
    width: 100%;
    /* float: right; */
}
.container .input-group h2{
    color: #2196f3;
    margin-bottom: 15px;
}
.container .input-group .form-input{
    padding: 5px 5px;
    margin: 20px 0 8px 0;
    width: 100%;
    position: relative;
    border-radius: 5px;
    border: 1px solid grey;
    outline: none;
}
.container .input-group .form-label{
    font-size: 12px;
    margin-top: 5px;
    position: absolute;
}
.container .input-group .form-block {
    position: relative;
    overflow: hidden;
}
.container .input-group .form-block .form-block-item{
    width: 42%;
    /* margin-right: 20px; */
    margin-right: 8%;
    display: inline-block;
}
.add-select-btn {
    width: 20px; 
    height: 20px;
    cursor: pointer;
    color: #2196f3;
    /* font-size: 17px; */
    border-radius: 4px;
    margin: 0 0 0 15px;
    background-color: white;
    border: 2px solid #2196f3;
    box-shadow: 0 0 10px rgb(163, 163, 163);
}
.add-select-btn:hover {
    transform: scale(1.08);
}
@media only screen and (max-width: 411px) {
}
</style>