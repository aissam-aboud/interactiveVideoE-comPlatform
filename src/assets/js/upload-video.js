setTimeout(()=> {
    var inputFile = document.getElementsByClassName("upload-video-btn")[0];
    if (inputFile) {
        inputFile.addEventListener('change', (event)=> {
            let file = event.target.files[0];
            let blobURL = URL.createObjectURL(file);
            document.getElementsByClassName("admin-video")[0].src = blobURL;
            console.log(blobURL);
            document.getElementsByClassName("btn-play")[0].style.visibility='visible';
            document.getElementsByClassName("main-menu")[0].style.pointerEvents='auto';
            document.getElementsByClassName("open-sidebar")[0].style.pointerEvents='auto';
            document.getElementsByClassName("admin-video-container")[0].style.border = "none";
            document.getElementsByClassName("admin-video-container")[0].style.borderRadius = "0";
            document.getElementsByClassName("admin-video-container")[0].style.backgroundColor = "transparent";
        });
    }
}, 100);