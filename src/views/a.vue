<template>

  <div class="container">

    <component
                    id="myComponent" 
                    v-if="element.currentProps.start <= `${currentTime}` 
                    && element.currentProps.end >= `${currentTime}`" 
                    :is="element.currentComponent" v-bind="element.currentProps" 
    /> 

  </div>
</template>

<script>
import SiSelect from './../components/SiSelect';

export default {
  components: {
    SiSelect,
  },
  data() {
    return {
      // elements: [],
      elements: [
                {
                    id: 0,
                    currentComponent: 'SiSelect',
                    currentProps: {
                        select_title: 'Choose what do you want to know about this phone',
                        items: [
                            { name: 'display', moveTo: 17.810878 }, 
                            { name: 'plateform', moveTo: 26.751889 }, 
                            { name: 'storage', moveTo: 38.131214 }, 
                            { name: 'processor', moveTo: 48.607019 }, 
                            { name: 'back camera', moveTo: 62.933575 }, 
                            { name: 'touch ID', moveTo: 66.586525 },
                            { name: 'wireless charging', moveTo: 73.697076 },
                            { name: 'front camera', moveTo: 88.855526 },
                            { name: 'colors', moveTo: 93.489768 },
                            { name: 'design', moveTo: 103.686094 },
                        ],
                        style: 'visibility: visible; top: 5%; left: 3%;',
                        start: 0.019, end: 0.019,
                        theme: 'light',
                        skippable: false,
                    },
                },
      ]
    }
  },
  methods: {

         
  },
}
</script>

<style scoped>

</style>

  