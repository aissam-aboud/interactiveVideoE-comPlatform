<template>
    <div id="container" class="container">
      <!-- <div> -->
        <SiBubble id="slider" :style="{visibility: 'visible', top: '0%', left: '0%'}" theme="light"
                          arrow="left" text="hhh hhh"
        />
<!-- 
        <component
                        :is="'SiBubble'" 
                        v-bind="{theme: 'light',arrow: 'left',text: 'ttttt',}" 
                        :style="{visibility: 'visible', top: '0%', left: '0%'}"
        /> -->
      <!-- </div> -->
    </div>
</template>

<script>

  setTimeout( function() {

    document.onselectstart = function(e) {
      e.preventDefault();
        return false;
      }

      window.slider = document.getElementById('slider');
      window.container = document.getElementById('container');

      document.mouseState = 'up';
      window.slider.mouseState = 'up';
      window.slider.lastMousePosY = null;
      window.slider.lastMousePosX = null;
      window.slider.proposedNewPosY = parseInt( window.slider.style.top, 10);
      window.slider.proposedNewPosX = parseInt( window.slider.style.left, 10);
    
      window.slider.style.top = 0;
      window.slider.style.left = 0;
      window.slider.style.height = '60px';
      window.slider.style.width = '60px';
      window.container.style.top = 0;
      window.container.style.left = 0;
      window.container.style.height = '300px';
      window.container.style.width = '600px';

      document.onmousedown = function() {
        document.mouseState = 'down';
      };

      document.onmouseup = function() {
        document.mouseState = 'up';
        window.slider.mouseState = 'up';
      };

      window.slider.onmousedown = function(e) {
        window.slider.lastMousePosY = e.pageY;
        window.slider.lastMousePosX = e.pageX;
        window.slider.mouseState = 'down';
        document.mouseState = 'down';
      };

      window.slider.onmouseup = function() {
        window.slider.mouseState = 'up';
        document.mouseState = 'up';
      };    

      var getAtInt = function getAtInt(obj, attrib) {
        return parseInt(obj.style[attrib], 10);
      };   

      document.onmousemove = function(e) {
        if ((document.mouseState === 'down') && (window.slider.mouseState === 'down')) {
          window.slider.proposedNewPosY = getAtInt(window.slider, 'top') + e.pageY - window.slider.lastMousePosY;
          window.slider.proposedNewPosX = getAtInt(window.slider, 'left') + e.pageX - window.slider.lastMousePosX;

          if (window.slider.proposedNewPosY < getAtInt(window.container, 'top')) {
            window.slider.style.top = window.container.style.top;
          } else if (window.slider.proposedNewPosY > getAtInt(window.container, 'top') + getAtInt(window.container, 'height') - getAtInt(window.slider, 'height')) {
            window.slider.style.top = getAtInt(window.container, 'top') + getAtInt(window.container, 'height') - getAtInt(window.slider, 'height') + 'px';
          } else {
            window.slider.style.top = window.slider.proposedNewPosY + 'px';
          }

          if (window.slider.proposedNewPosX < getAtInt(window.container, 'left')) {
            window.slider.style.left = window.container.style.left;
          } else if (window.slider.proposedNewPosX > getAtInt(window.container, 'left') + getAtInt(window.container, 'width') - getAtInt(window.slider, 'width')) {
            window.slider.style.left = getAtInt(window.container, 'left') + getAtInt(window.container, 'width') - getAtInt(window.slider, 'width') + 'px';
          } else {
            window.slider.style.left = window.slider.proposedNewPosX + 'px';
          }
          window.slider.lastMousePosY = e.pageY;
          window.slider.lastMousePosX = e.pageX;
        }
      };
    },1);

  






import SiBubble from '../components/SiBubble';

export default {
  components: {
    SiBubble,
  },
  
  created() {
    // setTimeout( function() {
      
    //   document.onselectstart = function(e) {
    //     e.preventDefault();
    //     return false;
    //   }

    //   window.slider = document.getElementById('slider');
    //   window.container = document.getElementById('container');

    //   document.mouseState = 'up';
    //   window.slider.mouseState = 'up';
    //   window.slider.lastMousePosY = null;
    //   window.slider.lastMousePosX = null;
    //   window.slider.proposedNewPosY = parseInt( window.slider.style.top, 10);
    //   window.slider.proposedNewPosX = parseInt( window.slider.style.left, 10);
    // },1);
  },
    methods: {
      // dMousedown() {
      //   window.slider.lastMousePosY = 10;
      //   window.slider.lastMousePosX = 10;
      //   window.slider.mouseState = 'down';
      //   document.mouseState = 'down';
      //   // console.log('div down');
      // },
      // dMouseup() {
      //   window.slider.mouseState = 'up';
      //   document.mouseState = 'up';
      //   // console.log('div up');
      // },
    },
}
</script>

<style>
    body {
      margin: 0;
      padding: 0;
    }
    #container {
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 600px;
      height: 300px;
      position : relative;
      background-color : red;
      top: 0;
      left: 0;
    }
    #slider {
      /* top: 0; */
      /* left: 0; */
      margin: 0;
      padding: 0;
      /* width: 60px; */
      /* height: 60px; */
      cursor: move;
      /* background: blue; */
      /* position : absolute; */
      border: 1px solid black;
    } 
    div {
      cursor : default;
    }
  </style>

  