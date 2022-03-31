<template>
  <div>
    <ul>
      <li>
        <button @click="get">get</button>
      </li>
      <li>
        <button @click="post">post</button>
      </li>
      <li>
        <button @click="put">put</button>
      </li>
      <li>
        <button @click="del">delete</button>
      </li>
      <li>
        <form
          id="uploadForm"
          enctype="multipart/form-data"
          action="/api/upload"
          method="post"
          @submit.prevent="upload"
        >
          <input type="text" name="name" value="text-value" />
          <br />
          <input type="file" name="userFile" multiple />
          <input type="submit" value="Upload File" name="submit" />
        </form>
      </li>
    </ul>
    <code id="result"></code>
  </div>
</template>

<script>
import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// function async put() {
//   const result = await axios.put("http://localhost:4000/api/user", {id: 1,name: "world",});
//   this.showResult(result.data);
// }

// function async del() {
//       try {
//         const result = await axios.delete("http://localhost:4000/api/user");
//         this.showResult(result.data);
//       } catch (error) {
//         this.showResult(error);
//       }
//     }

// function async upload() {
//       try {
//         const form = document.getElementById('uploadForm');
//         const formData = new FormData(form);
//         const result = await axios.post("http://localhost:4000/api/upload", formData,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           });
//         this.showResult(result.data);
//       } catch (error) {
//         this.showResult(error);
//       }
//     }
export default{
  setup(){
    function showResult(json) {
      console.log(json);
      document.getElementById("result").innerHTML = JSON.stringify(json);
    }
    function get(){
      fetch("http://localhost:4000/api/user/" + 1, { method: "GET", headers,})
        .then(function (response) {
          return response.json();
        }).then((json) => {
          showResult(json);
        });
    }

    function post() {
      axios
        .post("http://localhost:4000/api/user", {
          id: 20,
          name: "hello",
        })
        .then((response) => {
          showResult(response.data);
        });
    }

    // function put() {
    //   axios.put("http://localhost:4000/api/user", {id: 1,name: "world",})
    //     .then((response)=>{
    //       showResult(response.data);
    //     });
    // }
    async function put() {
      const result = await axios.put("http://localhost:4000/api/user", {id: 1,name: "world",});
      showResult(result.data);
    }
    // function del() {
    //     axios.delete("http://localhost:4000/api/user")
    //       .then((response)=>{
    //         showResult(response.data);
    //     });
    // }
    async function del() {
      try {
        const result = await axios.delete("http://localhost:4000/api/user");
        showResult(result.data);
      } catch (error) {
        showResult(error);
      }
    }
    // function upload() {
    //   try {
    //     const form = document.getElementById('uploadForm');
    //     const formData = new FormData(form);
    //     axios.post("http://localhost:4000/api/upload", formData,{ headers: {'Content-Type': 'multipart/form-data'}})
    //       .then((response)=>{
    //         showResult(response.data);
    //     });
    //   } catch (error) {
    //     this.showResult(error);
    //   }
    // }
  async function upload() {
      try {
        const form = document.getElementById('uploadForm');
        const formData = new FormData(form);
        const result = await axios.post("http://localhost:4000/api/upload", formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        showResult(result.data);
      } catch (error) {
        showResult(error);
      }
    }


  return {get,post, put,del,upload}
  }
}
</script>
<style scoped>
body {
  padding: 50px;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #00B7FF;
}

button {
  font-size: calc(10px + 2vmin);
  width: 80px;
  margin: 2px;
}

</style>
