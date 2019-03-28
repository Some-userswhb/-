<template>
    <div id="home">

      <button @click="goto('/shop')">Home</button>

      <div class="content">



      </div>
      <Footer/>
    </div>
</template>

<script>
  import Footer from '../components/footer.vue'
    export default {

      data () {
          return {}
      },
      methods:{
        goto(path){
            this.$router.replace(path)
        }
      },

      components:{
        Footer
      }
    }
</script>


<style scoped>
#home{

}
  button{
    width: 200px;
    height: 40px;
    background-color: gold;
    border: none;
    font-size:20px;
    cursor: pointer;
    margin-bottom: 50px;

  }
  .content{
    width: 600px;
    height: 500px;
    background-color: gold;
    border-radius:50%;

  }
</style>
