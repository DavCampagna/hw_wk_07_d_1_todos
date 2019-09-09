import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      toDos: [
        {description: "clean the sky", done: false},
        {description: "buy a nose", done: false},
        {description: "eat a pinecone", done: true}
        ],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function() {
        this.toDos.push({
        description: this.newToDo,
        done: false
      });
      this.newToDo = "";
    },
      markAsDone: function(index) {
        this.toDos[index].done = true;
      }
    }
  });
});
