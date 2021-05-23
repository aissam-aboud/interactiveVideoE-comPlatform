<template>
    <div class="main-menu" oncontextmenu="return false">
        <ul>
                <!-- <li class="logo"><img src="./../../assets/storeino_logo.png"></li> -->

                <li class="menu-item" @click="getComponentName('SiSelect', 'select')">
                    <img class="li-icon" src="./../../assets/images/select.png"><p class="li-text">Select</p> 
                </li>
                <li class="menu-item" @click="getComponentName('SiLink', 'link')">
                    <img class="li-icon" src="./../../assets/images/link.png"><p class="li-text">Link</p> 
                </li>
                <li class="menu-item" @click="getComponentName('SiBubble', 'bubble')">
                    <img class="li-icon" src="./../../assets/images/bubble.png"><p class="li-text">Bubble</p> 
                </li>
                <li class="menu-item" @click="getComponentName('SiForm', 'form')">
                    <img class="li-icon" src="./../../assets/images/form.png"><p class="li-text">Form</p> 
                </li>
                <li class="menu-item" @click="getComponentName('SiButton', 'button')">
                    <img class="li-icon" src="./../../assets/images/button.png"><p class="li-text">Button</p> 
                </li>
                <li class="menu-item" @click="getComponentName('SiTagProduct', 'btn-tag')">
                    <img class="li-icon" src="./../../assets/images/tag.png"><p class="li-text">Tag product</p> 
                </li>
                <li class="menu-item" @click="getComponentName('SiMoveTo', '')">
                    <img class="li-icon" src="./../../assets/images/skip.png"><p class="li-text">Move video to</p> 
                </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SiSidebar',

    methods: {
        getComponentName(componentName, componentDraggClass) {
            this.$emit("getComponentName", componentName, componentDraggClass);
        }
    }

}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}

.main-menu{
    top:0;
    left:0;
    width: 5%;
    height: 100vh;
    position: fixed;
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    transition: .3s ease;
    background-color: #fff;
    box-shadow: 0px 0px 20px #d4d4d4;
}
.main-menu .menu-item{
    padding: 4px 10px;
    margin: 0;
    user-select: none;
}
.main-menu .menu-item:hover{
    cursor: pointer;
    color: white;
    background-color: #6bb8fd;
}
.main-menu .menu-item .li-icon{
    width: 33px;
    padding: 10px 10px 10px 8px;
    filter: invert(50%) sepia(10%) saturate(4000%) hue-rotate(165deg);
    font-size: 25px;
}
.main-menu .menu-item .li-text{
    padding: 0; 
    display: inline;
    position: absolute;
    margin: 18px 0 0 9px; 
}
.main-menu ul {
    list-style: none;
}
.main-menu .menu-item:hover > .li-icon{
    filter: invert(99%) sepia(0%) saturate(500%) hue-rotate(0deg);
}
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background: transparent !important;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #bbbbbb;
}

</style>