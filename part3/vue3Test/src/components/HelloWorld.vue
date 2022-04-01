<script >
import { ref } from 'vue'

import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export default {
  setup(){
    let nameList = ref([]);
    function get(){
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments" , { method: "GET", headers,})
    .then(function (response) {
      return response.json();
    }).then((json) => {
      // let result = json.name;
      //let removedItems = json.forEach()
      let result = [];
      json.forEach(element => result.push(element.name));
      // console.log(result);
      nameList.value = result;
      console.log(nameList.value);

      showResult(result);
    });

}

  return { get , nameList}
  }
};


    function showResult(json) {
      // console.log(json);
      document.getElementById("result").innerHTML = JSON.stringify(json);
    }
const count = ref(0);
</script>

<template>
  <h1>CI/CD test input</h1>
  <ul>
  <li v-for="(item,index) in nameList" :key="index" >
    {{ item }}
  </li>
  </ul>

  <button type="button" @click="count++">count is: {{ count }}</button>
    <ul>
      <li>
        <button @click="get">get</button>
      </li>
    </ul>
    <code id="result"></code>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
