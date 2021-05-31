<template>
    <div class="main-time-line">
        <div class="time-line">
            <div class="time-line-progress">
                <p class="time-line-text"></p>
            </div>        
        </div>
        <div class="video-time-line">
            <div class="time-line-draggable">
                <div class="time-line-dragger"></div>
            </div>
            <div class="time-progress"></div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
    },
}

setTimeout(()=> {

    var videoProgressLine = document.getElementsByClassName('time-progress')[0];
    var timeLineProgressDraggable = document.getElementsByClassName('time-line-draggable')[0];
    // var timeLineProgressDragger = document.getElementsByClassName('time-line-dragger')[0];
    var adminVideo = document.getElementsByClassName('admin-video')[0];

    document.addEventListener('mousedown', (e)=> {
        for(var i = 0; e.path[i] !== document.body; i++) {
            if (e.path[i].classList.contains('time-line-dragger')) {
                var videoTimeLine = document.getElementsByClassName('video-time-line')[0];
                window.videoTimeLineWidth = videoTimeLine.offsetWidth;
            }
        }

   
    });
    document.addEventListener('mouseup', (e)=> {
        for(var i = 0; e.path[i] !== document.body; i++) {
            if (e.path[i].classList.contains('time-line-dragger')) {
                var videoTimeLineProgressLeft = timeLineProgressDraggable.style.left.slice(0, -2);
                var videoTimePassed = ((videoTimeLineProgressLeft * 100) / window.videoTimeLineWidth); //time line position
                videoProgressLine.style.width = videoTimePassed+'%'; // time line progress position
                adminVideo.currentTime = ((videoTimePassed * adminVideo.duration) / 100); // video new position
            }
        }
    });

}, 100);


setTimeout(()=> {
    var timeLineProgress = document.getElementsByClassName('time-line-progress')[0];
    var timeLine = document.getElementsByClassName('time-line')[0];

    document.addEventListener('mousedown', (e)=> {
        for(var i = 0; e.path[i] !== document.body; i++) {
            if (e.path[i].classList.contains('time-line-progress')) {
                window.ItemTimeLineWidth = timeLine.offsetWidth;                
            }
        }
    });

    document.addEventListener('mouseup', (e)=> {
        for(var i = 0; e.path[i] !== document.body; i++) {
            if (e.path[i].classList.contains('time-line-progress')) {

                // get start time
                var timeLineProgressLeft = (((timeLineProgress.style.left.slice(0, -2)) * 100)/ window.ItemTimeLineWidth);
                // get end time
                var timeLineProgressWidth = ((timeLineProgress.offsetWidth * 100)/ window.ItemTimeLineWidth);
                var timeLineProgressRight = (timeLineProgressLeft + timeLineProgressWidth);

                var startTime = ((window.videoDuration * timeLineProgressLeft)/100);
                var endTime = ((window.videoDuration * timeLineProgressRight)/100);

                document.getElementsByClassName('start-time')[0].value = (startTime/100).toFixed(3);
                document.getElementsByClassName('end-time')[0].value = (endTime/100).toFixed(3);
            }
        }
    });
    
}, 100);




setTimeout(() => {
    // var timeLineProgress = document.getElementsByClassName('time-line-progress')[0];

    var x, target = null;
    document.addEventListener('mousedown', function(e) {
        var clickedDragger = false;
        for(var i = 0; e.path[i] !== document.body; i++) {
            if (e.path[i].classList.contains('time-line-text')) {
                clickedDragger = true;
            }
            else if (clickedDragger && e.path[i].classList.contains('time-line-progress')) {
                target = e.path[i];
                target.classList.add('dragging');
                x = e.clientX - target.style.left.slice(0, -2);
                return;
            }
            else if (e.path[i].classList.contains('time-line-dragger')) {
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

}, 100);

</script>

<style scoped>
.main-time-line {
    
}
.time-line, .time-line-draggable .time-line-dragger{
    visibility: hidden;
}
.time-line {
    top: 15px;
    width: 100%;
    height: 30px;
    overflow: hidden;
    user-select: none;
    position: relative;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #cccccc;
}

.time-line-progress {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 10%;  /*-----*/
    overflow: auto;
    max-width: 100%;
    user-select: none;
    position: absolute;
    resize: horizontal;
    border-radius: 5px;
    background-color: #065fd4;
}
.time-line-progress p {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    cursor: move;
    color: white;
    overflow: hidden;
}
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
    width: 3px;
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