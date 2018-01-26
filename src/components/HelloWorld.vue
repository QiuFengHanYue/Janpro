<template>
  <div>
    <p>123</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created: function () {
  	axios.get("http://114.55.249.153:8028/shopping/listByPage",{params:{ page : 1 , limit : 10 }}).then(function (response) {
  		console.log(response);
  	}).catch(function (error) {
  		console.log(error);
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
