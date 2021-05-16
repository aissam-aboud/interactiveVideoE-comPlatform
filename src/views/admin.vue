<template>

    <div class="main">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap" rel="stylesheet">

        <SiSidebar @getComponentName="getComponentName" />

        <div class="container">
            <div class="btn-group">
                <button v-if="!isOpened" class="btn1" @click="openNavbar(), isOpened = true">Add element</button>
                <button v-if="isOpened" class="btn1" @click="closeNavbar(), isOpened = false">Close</button>
            </div>
            <div class="video-container">
                <div class="elementsDiv">
                    <!-- <component
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}"
                        :theme="theme" 
                        :is="componentName" v-bind="componentProps" 
                    /> -->

                    <SiBubble v-if="componentName == 'SiBubble'"
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme"
                        :arrow="arrow" :text="text"
                    />
                    <SiLink v-if="componentName == 'SiLink'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme" 
                        :text="text"
                    />
                    <SiForm v-if="componentName == 'SiForm'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme" 
                    />
                    <SiSelect v-if="componentName == 'SiSelect'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme" 
                    />
                    <SiButton v-if="componentName == 'SiButton'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme"  
                        :text="text" :moveTo=0
                    />
                    <SiTagProduct v-if="componentName == 'SiTagProduct'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme" 
                    />
                </div>
                <video class="siVideo" controls @timeupdate="getCurrentTime()" @ended="onEnd()">
                    <source src="../assets/video.mp4" type="video/mp4" >
                </video>
                <div class="input-group">
                    <h2>Fill in this form please</h2>

                    <div class="form-block">
                        <div class="form-block-item">
                            <label class="input-label">Start Time</label>
                            <input class="input-group-item" type="number">
                        </div>
                        <div class="form-block-item">
                            <label class="input-label">End Time</label>
                            <input class="input-group-item" type="number">
                        </div>
                    </div>

                    <div class="form-block">
                        <div class="form-block-item">
                            <label class="input-label">Position X</label>
                            <input 
                                class="input-group-item" 
                                type="number" min="0" max="100"
                                v-model="left"
                            >
                        </div>
                        <div class="form-block-item">
                            <label class="input-label">Position Y</label>
                            <input 
                                class="input-group-item" 
                                type="number" min="0" max="100"
                                v-model="top"
                            >
                        </div>
                    </div>

                    <div class="form-block">
                        <div class="form-block-item">
                            <label class="input-label-skip">Skippable</label><br>
                            <div class="skippable">
                                <input type="checkbox" id="yes" checked>
                                <label for="yes">Yes</label>
                            </div>
                            <div class="skippable">
                                <input type="checkbox" id="no">
                                <label for="no">No</label>
                            </div>
                        </div>
                        <div class="form-block-item">
                            <label class="input-label">Theme</label>
                            <select v-model="theme" class="input-group-item" name="theme">
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>
                    </div>



                    <div>
                        <label class="input-label">Text</label>
                        <input class="input-group-item" type="text" v-model="text">
                    </div>
                    <div>
                        <label class="input-label">Arrow</label>
                        <select v-model="arrow" class="input-group-item" name="arrow">
                            <option value="left">Left</option>
                            <option value="right">right</option>
                        </select>
                    </div>
                    <div>
                        <label class="input-label">URL</label>
                        <input class="input-group-item" type="text">
                    </div>
                    <div>
                        <label class="input-label">Move to</label>
                        <input class="input-group-item" type="number">
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import SiBubble from '../components/SiBubble';
import SiButton from '../components/SiButton';
import SiForm from '../components/SiForm';
import SiLink from '../components/SiLink';
import SiSelect from '../components/SiSelect';
import SiTagProduct from '../components/SiTagProduct';
import SiSidebar from '../components/SiSidebar';

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
            isOpened: false,
            text: '',
            theme: '',
            arrow: '',
            left: 0,
            top: 0,
            maxX: 0,
            maxY: 0,
            componentName: '',
            componentProps: {},
        }
    },
    methods: {
        openNavbar() {
            document.getElementsByClassName("main-menu")[0].style.width = "16%";
            document.getElementsByClassName("container")[0].style.width = "80%";
        },
        closeNavbar() {
            document.getElementsByClassName("main-menu")[0].style.width = "5%";
            document.getElementsByClassName("container")[0].style.width = "90%";
        },
        getComponentName(componentName){
            this.componentName = componentName;
            // console.log('tt : '+componentName);
        }
    }
}
</script>

<style scoped>
*, body{
    margin:0;
    padding:0;
}
.main{
    /* background-color: #ebebeb; */
    font-family: 'Fira Sans', sans-serif;
}
.container{
    width: 90%;
    float: right;
    transition: .3s ease;
    padding: 10px 2% 0 2%;
}


.container .video-container {
    margin-top: 20px;
    float: left;

    position: relative;
    z-index: 0;
}
.container .video-container .siVideo {
    width: 70%;
    height: auto;
}
.container .video-container .elementsDiv {
    top: 0;
    left: 0;
    z-index: 1;
    width: 70%;
    height: 394px;  
    /* height: auto; */
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



.video-container .input-group h2{
    color: #2196f3;
    margin-bottom: 15px;
}
.video-container .input-group {
    width: 25%;
    float: right;
}
.video-container .input-group .input-group-item{
    padding: 5px 5px;
    margin: 20px 0 8px 0;
    width: 100%;
    position: relative;
    border-radius: 5px;
    border: 1px solid grey;
}
.video-container .input-group .input-label{
    font-size: 12px;
    margin-top: 5px;
    position: absolute;
}
.video-container .input-group .input-label-skip{
    font-size: 12px;
    margin-top: 5px;
}
.video-container .input-group .skippable {
    display: inline;
    margin-right: 20px;
}
.video-container .input-group .skippable input {
    margin: 0 0 8px 0;
}



.video-container .input-group .form-block {
    position: relative;
    overflow: hidden;
}
.video-container .input-group .form-block .form-block-item{
    width: 40%;
    display: inline-block;
    margin-right: 10%;
    background-repeat: no-repeat;
}

</style>