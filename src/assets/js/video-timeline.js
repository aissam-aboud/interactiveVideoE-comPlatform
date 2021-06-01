setTimeout(()=> {

    var videoProgressLine = document.getElementsByClassName('time-progress')[0];
    var timeLineProgressDraggable = document.getElementsByClassName('time-line-draggable')[0];
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
                var videoTimePassed = ((videoTimeLineProgressLeft * 100) / window.videoTimeLineWidth);
                videoProgressLine.style.width = videoTimePassed+'%';
                adminVideo.currentTime = ((videoTimePassed * adminVideo.duration) / 100);
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

                var startTimeInput = document.getElementsByClassName('start-time')[0];
                var endTimeInput = document.getElementsByClassName('end-time')[0];

                if (startTimeInput && endTimeInput) {
                    startTimeInput.value = (startTime/100).toFixed(3);
                    endTimeInput.value = (endTime/100).toFixed(3);
                }

            }
        }
    });
    
}, 100);




setTimeout(() => {

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