import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el:'#app',
    data: {
      toDos: [
        {description: "clean the sky", done: false},
        {description: "buy a nose", done: false},
        {description: "get a slap", done: true}
      ],
      newToDo: ""
    },
    methods: {
      // saveNewToDo: function() {
        // this.toDos.push(this.newToDo);
      
    }

  });
});
