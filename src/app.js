import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      toDos: [
        {description: "clean the sky", done: false, priority: "high"},
        {description: "buy a nose", done: false, priority: "low"},
        {description: "eat a pinecone", done: true, priority: "high"}
        ],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function() {
        this.toDos.push({
        description: this.newToDo,
        done: false,
        // priority: this.priority,
      });
      this.newToDo = "";
    },
      markAsDone: function(index) {
        this.toDos[index].done = true;
      }
    }
  });
});
