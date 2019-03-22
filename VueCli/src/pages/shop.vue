<template>
    <div>

        <button @click="goto('/home')">Shop</button>


      <div class="content"></div>

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
  button{
    width: 200px;
    height: 40px;
    background-color: red;
    border: none;
    font-size:20px;
    cursor: pointer;
    margin-bottom: 50px;
  }
  .content{
    width: 500px;
    height: 500px;
    background-color: red;
    border-radius:50% ;
  }
</style>
