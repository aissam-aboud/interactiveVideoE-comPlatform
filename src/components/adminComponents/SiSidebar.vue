<template>
    <div class="main-menu">
        <ul>
                <li @click="getComponentName('SiSelect', 'select')" class="menu-item"><i class="fas fa-list"></i>Select</li>
                <li @click="getComponentName('SiLink', 'link') " class="menu-item"><i class="fas fa-paperclip"></i>Link</li>
                <li @click="getComponentName('SiBubble', 'bubble') " class="menu-item"><i class="fas fa-comment-dots"></i>Bubble</li>
                <li @click="getComponentName('SiForm', 'form') " class="menu-item"><i class="fas fa-align-left"></i>Form</li>
                <li @click="getComponentName('SiButton', 'button') " class="menu-item"><i class="fas fa-mouse"></i>Button</li>
                <li @click="getComponentName('SiTagProduct', 'btn-tag') " class="menu-item"><i class="fas fa-tags"></i>Tag product</li>
                <li @click="getComponentName('SiMoveTo', '') " class="menu-item"><i class="fas fa-forward"></i>Move video to</li>
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
    padding: 10px;
}
.main-menu .menu-item:hover{
    cursor: pointer;
    color: white;
    background-color: #6bb8fd;
}
.main-menu .menu-item .fas{
    width:40px;
    padding: 10px;
    color: #2196f3;
    font-size: 25px;
}
.main-menu ul {
    list-style: none;
}
.main-menu .menu-item:hover > .fas{
    color: white;
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