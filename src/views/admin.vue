<template>

    <div class="main">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap" rel="stylesheet">

        <SiSidebar />

        <div class="container">
            <div class="btn-group">
                <button v-if="!isOpened" class="btn1" @click="openNavbar(), isOpened = true">Add element</button>
                <button v-if="isOpened" class="btn1" @click="closeNavbar(), isOpened = false">Close</button>
            </div>
            <div class="video-container">
                <div class="elementsDiv">
                    <SiBubble style="visibility: visible" text="hhhh hhh" theme="dark" arrow="left" />
                </div>
                <video class="siVideo" controls @timeupdate="getCurrentTime()" @ended="onEnd()">
                    <source src="../assets/video.mp4" type="video/mp4" >
                </video>
                <div class="input-group">
                    <h2>Fill in this form please</h2>
                    <div>
                        <label class="input-label">Start Time</label>
                        <input type="number"><br>
                    </div>
                    <div>
                        <label class="input-label">End Time</label>
                        <input type="number"><br>
                    </div>
                    <div>
                        <label class="input-label skip-label">Skippable</label>
                        <div class="skippable">
                            <input type="checkbox" id="yes" checked>
                            <label for="yes">Yes</label>
                        </div>
                        <div class="skippable">
                            <input type="checkbox" id="no">
                            <label for="no">No</label>
                        </div>
                    </div>
                    <div>
                        <label class="input-label">Text</label>
                        <input type="text"><br>
                    </div>
                    <div>
                        <label class="input-label">URL</label>
                        <input type="text"><br>
                    </div>
                    <div>
                        <label class="input-label">Position X</label>
                        <input type="number"><br>
                    </div>
                    <div>
                        <label class="input-label">Position Y</label>
                        <input type="number"><br>
                    </div>
                    <div>
                        <label class="input-label">Move to</label>
                        <input type="number"><br>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import SiBubble from '../components/SiBubble';
import SiSidebar from '../components/SiSidebar';

export default {

    data() {
        return {
            isOpened: false,
        }
    },
    components: {
        SiBubble,
        SiSidebar ,
    },
    methods: {
        openNavbar() {
            document.getElementsByClassName("main-menu")[0].style.width = "16%";
            document.getElementsByClassName("container")[0].style.width = "80%";
        },
        closeNavbar() {
            document.getElementsByClassName("main-menu")[0].style.width = "5%";
            document.getElementsByClassName("container")[0].style.width = "90%";
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
    height: 100%;  
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




.container .video-container .input-group h2{
    color: #2196f3;
    margin-bottom: 15px;
}
.container .video-container .input-group {
    width: 25%;
    float: right;
}
.container .video-container .input-group input{
    padding: 5px 5px;
    margin: 20px 0 8px 0;
    position: relative;
    border-radius: 5px;
    border: 1px solid grey;
}
.container .video-container .input-group .input-label{
    font-size: 12px;
    margin-top: 5px;
    position: absolute;
}


.container .video-container .input-group .skippable {
    display: inline;
    margin-right: 20px;
}



</style>