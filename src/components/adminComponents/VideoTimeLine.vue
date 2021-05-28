<template>
  <div class="video-time-line">
    <div class="time-line-draggable">
      <div class="time-line-dragger"></div>
    </div>
    <div class="time-progress"></div>
  </div>
</template>

<script>
export default {
    
}

setTimeout(()=> {
    var videoProgressLine = document.getElementsByClassName('time-progress')[0];
    var timeLineProgressDraggable = document.getElementsByClassName('time-line-draggable')[0];
    var timeLineProgressDragger = document.getElementsByClassName('time-line-dragger')[0];

    timeLineProgressDragger.addEventListener('mousedown', ()=> {
        var videoTimeLine = document.getElementsByClassName('video-time-line')[0];
        window.videoTimeLineWidth = videoTimeLine.offsetWidth;
   
        document.addEventListener('mouseup', ()=> {
            var videoTimeLineProgressLeft = timeLineProgressDraggable.style.left.slice(0, -2);
            var videoTimePassed = ((videoTimeLineProgressLeft * 100) / window.videoTimeLineWidth); //time line position
            videoProgressLine.style.width = videoTimePassed+'%'; // time line progress position
            window.adminVideo.currentTime = ((videoTimePassed * window.adminVideo.duration) / 100); // video new position
        });
    });
}, 100);


var x, target = null;
document.addEventListener('mousedown', function(e) {
    var clickedDragger = false;
    for(var i = 0; e.path[i] !== document.body; i++) {
        if (e.path[i].classList.contains('time-line-dragger')) {
            clickedDragger = true;
        }
        else if (clickedDragger && e.path[i].classList.contains('time-line-draggable')) {
            target = e.path[i];
            target.classList.add('dragging');
            x = e.clientX - target.style.left.slice(0, -2);
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
    var pRect = target.parentElement.getBoundingClientRect();
    var tgtRect = target.getBoundingClientRect();
    if (tgtRect.left < pRect.left) target.style.left = 0;
    if (tgtRect.right > pRect.right) target.style.left = pRect.width - tgtRect.width + 'px';
});

</script>

<style scoped>
.video-time-line {
    top: -30px;
    width: 100%;
    height: 4px;
    user-select: none;
    position: relative;
    border-radius: 5px;
    border: 1px solid black;

}
.video-time-line .time-line-draggable {
    width: 0px;
    height: 120px;
    user-select: none;
    position: relative;
    z-index: 1000;
}
.time-line-draggable .time-line-dragger {
    width: 52.6%;
    height: 100%;
    user-select: none;
    background: red;
    cursor: col-resize;
}
.video-time-line .time-progress{
    width: 0%;
    padding-left: 2px;
    top: -120px;
    height: 100%;
    user-select: none;
    position: relative;
    background-color: #065fd4;
}
</style>