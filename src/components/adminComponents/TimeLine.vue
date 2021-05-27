<template>
    <div class="time-line">
        <div @mousemove="changeVideoFromTimeline" class="time-line-progress">
            <p class="time-line-text"></p>
        </div>        
    </div>
</template>

<script>

setTimeout(()=> {
    // we need this to get pos of right side of time line progress
    var timeLineProgress = document.getElementsByClassName('time-line-progress')[0];
    var timeLine = document.getElementsByClassName('time-line')[0].offsetWidth;
    timeLineProgress.addEventListener('mousedown', ()=> {
        timeLineProgress.addEventListener('mousemove', ()=> {
            window.timeLineProgressWidth = timeLineProgress.offsetWidth;
            // var videoDuration = window.video.duration;
            console.log(timeLine);
        });
    });
}, 100);

export default {
    methods: {
        changeVideoFromTimeline() {
            this.$emit("changeVideoFromTimeline");
        }
    },
}

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
.time-line {
    top: 10px;
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
    width: 0%;
    height: 100%;
    overflow: auto;
    /* margin-left: 0%; */
    max-width: 100%;
    user-select: none;
    position: absolute;
    resize: horizontal;
    border-radius: 5px;
    background-color: #065fd4;
    padding: 0;
    margin: 0;
    
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
</style>