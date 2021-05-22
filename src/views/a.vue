<template>

  <div class="container">

    <ul>
      <li v-for="ele in elements" :key="ele.id">
        <p>{{ele}}</p>
      </li>
      <!-- <li>hhhh</li> -->
    </ul>



    </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
  },
  data() {
    return {
      elements: [],
    }
  },
  async created() {


    try {
      this.elements= await axios.get("http://localhost:3000/api/insert");
      this.elements = this.elements.data;
    }
    catch (err) {
      console.log(err);
    }

    // this.elements = await axios.get('http://localhost:3000/api/insert')
    // .then(()=> {
    //       console.log(this.elements);

    // });



    // this.elements = await axios.get('http://localhost:3000/api/insert')
    // .then(() => {
    //   console.log(this.elements.data);
    // }).catch((err)=>{
    //     console.log(err);
    // });
        
  },
  
  methods: {

    // getUserName(){ 
    //     axios.get('http://localhost:3000/api/insert')
    //     .then(res => {
    //         console.log(res.data);
    //     });
    // },
         
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

  