<template>
    <div class="main-menu" oncontextmenu="return false">
        <ul>
            <li class="menu-item select-li" @click="getComponentName('SiSelect', 'select')">
                <img class="li-icon select-icon" src="./../../assets/images/select.png"><p class="li-text">Select</p> 
            </li>
            <li class="menu-item link-li" @click="getComponentName('SiLink', 'link')">
                <img class="li-icon link-icon" src="./../../assets/images/link.png"><p class="li-text">Link</p> 
            </li>
            <li class="menu-item bubble-li" @click="getComponentName('SiBubble', 'bubble')">
                <img class="li-icon bubble-icon" src="./../../assets/images/bubble.png"><p class="li-text">Bubble</p> 
            </li>
            <li class="menu-item form-li" @click="getComponentName('SiForm', 'form')">
                <img class="li-icon form-icon" src="./../../assets/images/form.png"><p class="li-text">Form</p> 
            </li>
            <li class="menu-item button-li" @click="getComponentName('SiButton', 'button')">
                <img class="li-icon button-icon" src="./../../assets/images/button.png"><p class="li-text">Button</p> 
            </li>
            <li class="menu-item btn-tag-li" @click="getComponentName('SiTagProduct', 'btn-tag')">
                <img class="li-icon btn-tag-icon" src="./../../assets/images/tag.png"><p class="li-text">Tag product</p> 
            </li>
            <li class="menu-item move-to-li" @click="getComponentName('SiMoveTo', 'move-to')">
                <img class="li-icon move-to-icon" src="./../../assets/images/skip.png"><p class="li-text">Move video to</p> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SiSidebar',

    methods: {
        getComponentName(componentName, componentDraggClass) {
            var lis = document.getElementsByClassName('menu-item');
            var imgs = document.getElementsByClassName('li-icon');
            lis.forEach(li => {
                li.style.backgroundColor = 'white';
            });
            imgs.forEach(img => {
                img.style.filter = 'invert(50%) sepia(10%) saturate(4000%) hue-rotate(165deg)';
            });

            document.getElementsByClassName(`${componentDraggClass}-li`)[0].style.backgroundColor = '#6bb8fd';
            document.getElementsByClassName(`${componentDraggClass}-icon`)[0].style.filter = 'invert(99%) sepia(0%) saturate(500%) hue-rotate(0deg)';
            
            this.$emit("getComponentName", componentName, componentDraggClass);
        }
    }
}
</script>