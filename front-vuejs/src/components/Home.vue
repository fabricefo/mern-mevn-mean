<template>
    <div id="app" class="App">
        <Header></Header>
        <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-12">
                Create Task....
            </div>
          </div>
        </div>
        <div class="row mrgnbtm">
          List Tasks
        </div>
      </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  
  import Header from './Header.vue'

//  import CreateTask from './CreateTask.vue'
// import Tasks from './Tasks.vue'
// import { getAllTasks, createTask, deleteTask, editTask } from '../services/TodoService'
  
console.log('Home')

export default {
name: 'App',
components: {
    Header
},
}
</script>

<style>
@import '../assets/styles/global.css'; 
</style>