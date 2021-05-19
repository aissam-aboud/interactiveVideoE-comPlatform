<template>

    <div class="container">

      <div class="draggable">
        <div class="dragger">
          aaaaaaaaa <br>
          fffffff
        </div>
      </div>
        <!-- <div class="draggable">
          <SiBubble class="dragger" :style="{visibility: 'visible', top: '0%', left: '0%'}" theme="light"
                            arrow="left" text="hhh bbbb bbbb hhh"
          />
        </div> -->

    </div>
</template>

<script>
  var x, y, target = null;

document.addEventListener('mousedown', function(e) {
  var clickedDragger = false;
  for(var i = 0; e.path[i] !== document.body; i++) {
    if (e.path[i].classList.contains('dragger')) {
      clickedDragger = true;
    }
    else if (clickedDragger && e.path[i].classList.contains('draggable')) {
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

// import SiBubble from '../components/SiBubble';

export default {
  components: {
    // SiBubble,
  },
  
  created() {
   
  },
    methods: {
     
    },
}
</script>

<style scoped>
    /* .container {
        width: 500px;
        height: 320px;
        position: relative;
        margin: 30px 0 0 40px;
        border: 1px solid #ccc;
        background-color:white; 
    }*/
    .draggable {
        /* width: 200px; */

        /* background: black;
      */  position: relative; 
    }
    .dragger {
        /* height: 40px; */
        /* background: yellow; */
        position: relative;
    }
  </style>

  