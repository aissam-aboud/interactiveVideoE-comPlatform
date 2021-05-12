<template>
    <div @click="ab()" ref="clickmediv" id="clickmediv" class="containerr">
        <div id="someID"></div>
    </div>
</template>


<script>
export default {

    methods: {
         ab() {
            var h = this.$refs.clickmediv;
            
            h.onclick = function clickEvent(e) {
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            // console.log('x: '+e.clientX+' y:'+e.clientY)

            // var xp = x / h.offsetWidth * 100;
            // var yp = y / h.offsetHeight * 100;
            
            var xp = x / (document.querySelector("#app > #clickmediv").offsetWidth) * 100;
            // var yp = y / (document.querySelector("#app > #clickmediv").offsetHeight) * 100;
            var yp = y / (document.querySelector("#app > #clickmediv").offsetHeight) * 100;
            
            var ele = document.getElementById('someID');
            ele.style.top = yp + "%";
            ele.style.left = xp + "%";
            // ele.style.margin=`${yp}% 0 0 ${xp}%`;
            console.log("x: "+ xp +" ; y: "+ y);

        }
        }
    }

}
       
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
.containerr {
    background-color: red;
    cursor: pointer;
    width: 700px;
    height: 400px;
    position: relative;
    margin: 0;
    padding: 0;
}
#someID {
    position:absolute;
    /* left: 0px; */
    /* top: 0px; */
    height: 50px;
    width: 50px;
    /* display: inline-block; */
    /* vertical-align: top; */
    background-color: blue;
    margin: 0;
    padding: 0;
}

</style>