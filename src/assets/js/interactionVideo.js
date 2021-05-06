// var interaction = {

//     currentTime: 0,
//     isVideoEnd: false,
//     elements: [
//         {
//             currentComponent: 'SiButton', shows_at: 0.26,
//             currentProps: {
//                 text: 'See more about camera', 
//                 style: 'visibility: visible; margin: 200px 0px 0px 450px;',
//                 duration: 1400,
//                 moveTo: 60.337806,
//             },
//             currentMethodes: {clickButtonEvent: this.clickButtonEvent},
//         },
//         {
//             currentComponent: 'SiBubble', shows_at: 0.12,
//             currentProps: {
//                 text: 'Arrière : 12 MP f/1.8 + 12 MP f/2.4 <br> Avant : 7 MP f/2.2', 
//                 style: 'visibility: visible; margin: 40px 0px 0px 450px;',
//                 duration: 3000,
//             },
//             currentMethodes: {},
//         },
//         {
//             currentComponent: 'SiLink', shows_at: 1.12,
//             currentProps: {
//                 text: 'Visit our web site and buy it now!',
//                 style: 'visibility: visible;margin: 30px 0px 0px 310px;', 
//                 url: 'https://www.apple.com/ma/iphone/',
//                 duration: 7000,
//             },
//             currentMethodes: {},
//         },
//         {
//             currentComponent: 'SiForm', shows_at: 1.4,     
//             currentProps: {
//                 style: 'visibility: visible; margin: 130px 0px 0px 310px;',
//                 duration: 11000,
//             },
//             currentMethodes: {},
//         },
//         {
//             currentComponent: 'SiLink', shows_at: 0.26,
//             currentProps: {
//                 text: 'Youtube.com',
//                 style: 'visibility: visible;margin: 30px 0px 0px 310px;', 
//                 url: 'https://www.youtube.com',
//                 duration: 1400,
//             },
//             currentMethodes: {},
//         },
//     ],

//     onEnd() {
//         this.isVideoEnd = true;
//     },
//     getCurrentTime() {        
//         // console.log(((this.$refs.siVideo.currentTime)/100).toFixed(3));
//         this.currentTime = (((this.$refs.siVideo.currentTime).toFixed(0))/100);
//     },      
//     clickButtonEvent(moveTo) {
//         this.$refs.siVideo.currentTime = moveTo;
//     },
//     replayVideo() {
//         this.isVideoEnd = false;
//         this.$refs.siVideo.currentTime = 0;
//         this.$refs.siVideo.play();
//     },

// }

// export default interaction;