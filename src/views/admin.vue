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
                <div id="elementsDiv" class="elementsDiv">
                        
                    <!-- <component id="compoo"
                        :is="'SiBubble'" 
                        v-bind="{theme: theme,arrow: arrow,text: text,}" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}"
                    /> -->
                   
       
                    <SiBubble 
                        id="compoo"
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme"
                        :arrow="arrow" :text="text"
                    />

                    <SiLink v-if="componentName == 'SiLink'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme" 
                        :text="text" :url="url"
                    />
                    <SiForm v-if="componentName == 'SiForm'"  id="compoo"
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme" 
                    />
                    <SiSelect v-if="componentName == 'SiSelect'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme"
                        :select_title="selectTitle" :items="selectItems"
                    />
                    <SiButton v-if="componentName == 'SiButton'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme"  
                        :text="text" :moveTo=0
                    />
                    <SiTagProduct v-if="componentName == 'SiTagProduct'" 
                        :style="{visibility: 'visible', top: top+'%', left: left+'%'}" :theme="theme" 
                         :url="url"
                    />
                </div>
                <video class="siVideo" controls>
                    <source src="../assets/video.mp4" type="video/mp4" >
                </video>

                <div v-if="componentName!='' && isOpened" class="input-group">
                    <h2>Fill in this form please</h2>
                    <div v-if="componentName!='SiMoveTo'">
                        <div class="form-block">
                            <div class="form-block-item">
                                <label class="input-label">Start Time</label>
                                <input class="input-group-item" type="number" min="0">
                            </div>
                            <div class="form-block-item">
                                <label class="input-label">End Time</label>
                                <input class="input-group-item" type="number" min="0">
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="form-block-item">
                                <label class="input-label">Position X</label>
                                <input class="input-group-item" v-model="left"
                                    type="number" min="0" :max="maxX">
                            </div>
                            <div class="form-block-item">
                                <label class="input-label">Position Y</label>
                                <input class="input-group-item" v-model="top"
                                    type="number" min="0" :max="maxY">
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="form-block-item">
                                <label class="input-label">Skippable</label>
                                <select class="input-group-item" name="skippable" v-model="skippable">
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                            <div class="form-block-item">
                                <label class="input-label">Theme</label>
                                <select class="input-group-item" name="theme" v-model="theme">
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                        </div>
                        <!-- Bubble -->
                        <div class="form-block" v-if="componentName=='SiBubble'">
                            <div class="form-block-item">
                                <label class="input-label">Text</label>
                                <input class="input-group-item" type="text" v-model="text">
                            </div>
                            <div class="form-block-item">
                                <label class="input-label">Arrow</label>
                                <select class="input-group-item" name="arrow" v-model="arrow">
                                    <option value="left">Left</option>
                                    <option value="right">right</option>
                                </select>
                            </div>
                        </div>
                        <!-- Button -->
                        <div class="form-block" v-if="componentName=='SiButton'">
                            <div class="form-block-item">
                                <label class="input-label">Text</label>
                                <input class="input-group-item" type="text" v-model="text">
                            </div>
                            <div class="form-block-item">
                                <label class="input-label">Move to</label>
                                <input class="input-group-item" type="number" v-model="moveTo">
                            </div>
                        </div>
                        <!-- Link -->
                        <div class="form-block" v-if="componentName=='SiLink'">
                            <div class="form-block-item">
                                <label class="input-label">Text</label>
                                <input class="input-group-item" type="text" v-model="text">
                            </div>
                            <div class="form-block-item">
                                <label class="input-label">URL</label>
                                <input class="input-group-item" type="text" v-model="url">
                            </div>
                        </div>
                        <!-- Select -->
                        <form v-if="componentName=='SiSelect'" class="form-block" @submit.prevent="addSelectItem({name: selectItemName, moveTo: selectItemMoveto})">
                            <div class="form-block">
                                <div class="form-block-item">
                                    <label class="input-label">Select title</label>
                                    <input class="input-group-item" type="text" v-model="selectTitle" required>
                                </div>
                            </div>
                            <div class="form-block-item">
                                <label class="input-label">Item name</label>
                                <input class="input-group-item" type="text" v-model="selectItemName" required>
                            </div>
                            <div class="form-block-item" style="margin-right: 10px;">
                                <label class="input-label">Item value(Move to)</label>
                                <input class="input-group-item" type="text" v-model="selectItemMoveto" required>
                            </div>
                            <button class="add-select-btn">+</button>
                        </form>
                        <!-- Tag product -->
                        <div class="form-block" v-if="componentName=='SiTagProduct'">
                            <div class="form-block-item">
                                <label class="input-label">URL</label>
                                <input class="input-group-item" type="text" v-model="url">
                            </div>
                        </div>
                    </div>
                    <!-- Move to -->
                    <div class="form-block" v-if="componentName=='SiMoveTo'">
                        <div class="form-block-item">
                            <label class="input-label">Start Time</label>
                            <input class="input-group-item" type="number">
                        </div>
                        <div class="form-block-item">
                            <label class="input-label">Move to</label>
                            <input class="input-group-item" type="number" v-model="moveTo" required>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    setTimeout( function() {
        document.onselectstart = function(e) {
            e.preventDefault();
            return false;
        }

        window.sliderr = document.getElementById('compoo');
        window.containerr = document.getElementById('elementsDiv');

        document.mouseState = 'up';
        window.sliderr.mouseState = 'up';
        window.sliderr.lastMousePosY = null;
        window.sliderr.lastMousePosX = null;
        window.sliderr.proposedNewPosY = parseInt(window.sliderr.style.top, 10);
        window.sliderr.proposedNewPosX = parseInt(window.sliderr.style.left, 10);
       
        window.sliderr.style.top = 0;
        window.sliderr.style.left = 0;
        window.containerr.style.top = 0;
        window.containerr.style.left = 0;

        // window.sliderr.style.maxHeight = '50px';
        // window.sliderr.style.width = '20%';

        window.containerr.style.height = '357px';
        window.containerr.style.width = '780px';

        document.onmousedown = function() {
            document.mouseState = 'down';
        };

        document.onmouseup = function() {
            document.mouseState = 'up';
            window.sliderr.mouseState = 'up';
        };

        window.sliderr.onmousedown = function(e) {
            window.sliderr.lastMousePosY = e.pageY;
            window.sliderr.lastMousePosX = e.pageX;
            window.sliderr.mouseState = 'down';
            document.mouseState = 'down';
        };

        window.sliderr.onmouseup = function() {
            window.sliderr.mouseState = 'up';
            document.mouseState = 'up';
        };    

        var getAtInt = function getAtInt(obj, attrib) {
            return parseInt(obj.style[attrib], 10);
        };   

        document.onmousemove = function(e) {
            if ((document.mouseState === 'down') && (window.sliderr.mouseState === 'down')) {
            window.sliderr.proposedNewPosY = getAtInt(window.sliderr, 'top') + e.pageY - window.sliderr.lastMousePosY;
            window.sliderr.proposedNewPosX = getAtInt(window.sliderr, 'left') + e.pageX - window.sliderr.lastMousePosX;

            if (window.sliderr.proposedNewPosY < getAtInt(window.containerr, 'top')) {
                window.sliderr.style.top = window.containerr.style.top;
            } else if (window.sliderr.proposedNewPosY > getAtInt(window.containerr, 'top') + getAtInt(window.containerr, 'height') - getAtInt(window.sliderr, 'height')) {
                window.sliderr.style.top = getAtInt(window.containerr, 'top') + getAtInt(window.containerr, 'height') - getAtInt(window.sliderr, 'height') + 'px';
            } else {
                window.sliderr.style.top = window.sliderr.proposedNewPosY + 'px';
            }

            if (window.sliderr.proposedNewPosX < getAtInt(window.containerr, 'left')) {
                window.sliderr.style.left = window.containerr.style.left;
            } else if (window.sliderr.proposedNewPosX > getAtInt(window.containerr, 'left') + getAtInt(window.containerr, 'width') - getAtInt(window.sliderr, 'width')) {
                window.sliderr.style.left = getAtInt(window.containerr, 'left') + getAtInt(window.containerr, 'width') - getAtInt(window.sliderr, 'width') + 'px';
            } else {
                window.sliderr.style.left = window.sliderr.proposedNewPosX + 'px';
            }
            window.sliderr.lastMousePosY = e.pageY;
            window.sliderr.lastMousePosX = e.pageX;
            }
        };
    },2000);


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
            isOpened: false,
            text: '',
            theme: '',
            arrow: '',
            left: 0,
            top: 0,
            maxX: 100,
            maxY: 100,
            url: '',
            componentName: '',
            componentProps: {},
            moveTo: 0,
            skippable: false,
            selectItems: [],
            selectTitle: '',
            selectItemName: '',
            selectItemMoveto: '',
        }
    },
    created() {
        window.ele = this.$refs.sliderr;
    },
    methods: {
        aa() {
            console.log('mouse down');
        },
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
            this.isOpened = true;
            document.getElementsByClassName("main-menu")[0].style.width = "16%";
            document.getElementsByClassName("container")[0].style.width = "80%";

            // if(componentName == 'SiBubble') {
            //     this.componentProps = {
            //         theme: this.theme,
            //         arrow: this.arrow,
            //         text: this.text,
            //     }
            // }
            // elseif(componentName == '') {}
            // elseif(componentName == '') {}
            // elseif(componentName == '') {}
            // elseif(componentName == '') {}
            // elseif(componentName == '') {}
            // elseif(componentName == '') {}
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
    width: 780px;
    height: auto;
}
.container .video-container .elementsDiv {
    top: 0;
    left: 0;
    z-index: 1;
    width: 800px;
    height: 345;
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


.video-container .input-group {
    width: 260px;
    float: right;
}
.video-container .input-group h2{
    color: #2196f3;
    margin-bottom: 15px;
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


.video-container .input-group .form-block {
    position: relative;
    overflow: hidden;
}
.video-container .input-group .form-block .form-block-item{
    width: 35%;
    margin-right: 9%;
    display: inline-block;
}

.add-select-btn {
    width: 20px; 
    height: 20px;
    color: #2196f3;
    /* font-size: 17px; */
    margin: 0 0 0 15px;
    background-color: white;
    border: 2px solid #2196f3;
    border-radius: 4px;
    box-shadow: 0 0 10px rgb(163, 163, 163);
}
</style>