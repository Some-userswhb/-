<template>
    <div>

        <button @click="goto('/home')" >毛泽东思想</button>
        <button @click="goto('/china')" >中国特色社会主义理论体系</button>




      <div class="content">

        <ul>
          <li>
            毛泽东思想形成的实践基础是中国共产党领导的 <span>(革命和建设实践)</span>
          </li>
          <li>新民主主义革命理论是 <span>(是毛泽东思想的重要组成部分)</span></li>
          <li>毛泽东思想是 <span>(中国共产党集体智慧的结晶)</span></li>
          <li>实事求是,群众路线和独立自主是 <span>(毛泽东思想活的灵魂)</span></li>
          <li>近代中国社会的性质和主要矛盾决定了中国革命的 <span>性质</span>是 <span>(资产阶级民主革命)</span> </li>
          <li>近代中国社会的性质和主要矛盾决定了中国革命的<span>实质</span>是 <span>(无产阶级领导的农民革命)</span> </li>
          <li>中国半殖民地半封建社会的主要矛盾是 <span>(帝国主义和中华民族的矛盾)</span> </li>
          <li>现在中国的性质是 <span>(半殖民地半封建社会)</span> </li>
          <li>新民主主义最基本的动力是 <span>(工人阶级)</span> </li>
          <li>新民主主义的经济纲领规定 没收封建地主阶级的土地 <span>(归农民所有)</span> </li>
          <h3>三座大山</h3>
          <li>新民主主义革命的对象是 <span>(帝国主义，封建主义和官僚资本主义)</span> </li>
          <li>新民主主义革命总路线的核心是 <span>(无产阶级领导)</span> </li>
          <li>中国革命的主力军是 <span>(农民阶级)</span> </li>
          <li>中国革命最凶恶的敌人是 <span>(帝国主义)</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
          <li> <span>()</span> </li>
        </ul>



        <div>
          <p></p>
        </div>








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
  button{
    width: 200px;
    height: 40px;
    color: red;
    border: none;
    font-size:20px;
    cursor: pointer;
    margin-bottom: 50px;
    font-weight: bold;
  }
  .content{
    padding-left: 30px;
    color: #000;
    font-weight: bold;
    letter-spacing: 3px;
  }
  ul li span{
    color: red;
  }

</style>
