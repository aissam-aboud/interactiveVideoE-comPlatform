<template>
    <div class="time-line">
        <div class="time-line-progress">
            <p class="time-line-text"></p>
        </div>        
    </div>
</template>

<script>

export default {
    methods: {
    },
}


// call each event from an other one and verify the 3ala9at
setTimeout(()=> {
    window.timeLineProgress = document.getElementsByClassName('time-line-progress')[0];
    window.timeLine = document.getElementsByClassName('time-line')[0];

    window.timeLineProgress.addEventListener('mousedown', ()=> {
        var timeLineWidth = window.timeLine.offsetWidth;

        document.addEventListener('mouseup', ()=> {
            // get start time
            window.timeLineProgressLeft = (((window.timeLineProgress.style.left.slice(0, -2)) * 100)/timeLineWidth);
            // get end time
            window.timeLineProgressWidth = ((window.timeLineProgress.offsetWidth * 100)/timeLineWidth);
            window.timeLineProgressRight = (window.timeLineProgressLeft + window.timeLineProgressWidth);

            // console.log('rrytrfuyjgyfukhujoilkkk');
            // var duration = (window.adminVideo.duration/100).toFixed(3);
            // window.currentTimeByTimeLine = ((window.timeLineProgressLeft * duration)/100).toFixed(3);
        }); 
    }); 
}, 100);


//daraggable item

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
</style>