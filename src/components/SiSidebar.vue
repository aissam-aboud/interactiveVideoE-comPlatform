<template>
    <div class="main-menu">
        <ul>
                <li class="menu-item"><i class="fas fa-list"></i>Select</li>
                <li class="menu-item"><i class="fas fa-paperclip"></i>Link</li>
                <li class="menu-item"><i class="fas fa-comment-dots"></i>Bubble</li>
                <li class="menu-item"><i class="fas fa-align-left"></i>Form</li>
                <li class="menu-item"><i class="fas fa-mouse"></i>Gaming</li>
                <li class="menu-item"><i class="fas fa-tags"></i>Gaming</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SiSidebar',

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
/* .main-menu:hover{
    width : 16%;
    overflow-y: scroll;
} */
.main-menu .menu-item{
    padding: 10px;
}
.main-menu .menu-item:hover{
    cursor: pointer;
    background-color: #d6d6d6;
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
    color: #1d0daa;
}
/* section.home{
    background-color: #f3f3f3;
} */
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