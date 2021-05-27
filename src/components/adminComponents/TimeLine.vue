<template>
    <div class="time-line">
        <div @mousemove="changeVideoFromTimeline" class="time-line-progress">
            <p class="time-line-text"></p>
        </div>        
    </div>
</template>

<script>
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
    width: 100%;
    height: 30px;
    overflow: hidden;
    margin-top: 10px;
    user-select: none;
    position: relative;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #cccccc;
}

.time-line-progress {
    width: 0.5%;
    height: 100%;
    overflow: auto;
    margin-left: 0%;
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
}
</style>