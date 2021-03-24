<!--  -->
<template>
  <div class='search-container'>
    <header>
      <UserOrAdmin />
    </header>
    <div class="search-container-content">
      <SearchBar @getResult="getResult"/>
      <div class="search-container-content-main">
        <article>
          <div v-if="result.length > 0">
            <div v-for="item in result" :key="item.id" class="search-result-item">
              <a class="search-result-item-a" :href="item.url">{{item.title}}</a>
              <div class="search-result-item-main">
                <img v-if="item.img" :src="item.img" alt="">
                <div class="search-result-item-main-detail">
                  <div class="search-result-item-main-detail-decription">
                    {{item.description}}
                  </div>
                  <div class="search-result-item-main-detail-slurl">
                    {{item.slurl}}
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div v-else>
             暂未搜索 或 搜索结果为空
          </div>
        </article>
        <div class="mask"></div>
        <aside>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>热搜数据</span>
            </div>
            <div v-for="item in hotSearchList" :key="item.id">
              <div style="cursor: pointer" @click="toHotSearch(item.searchKey)">{{item.searchKey}}</div>
            </div>
          </el-card>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SearchBar from '@/components/SearchBar';
import { mapState } from 'vuex';
import UserOrAdmin from '@/components/UserOrAdmin';
import {searchSearch,searchHotSearch} from '@/api'

export default {
  name: '',
  data () {
  //这里存放数据
    return {
      keyWords: '',
      result: [],
      hotSearchList: []
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
    SearchBar,
    UserOrAdmin
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState(['user'])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toHotSearch(searchKey) {
      this.$router.replace(`/search/${searchKey}`)
      this.getResult(searchKey)
    },
    getResult(keyWords) {
      if (keyWords) {
        let loading = this.$loading({
          lock: true,
          text: '搜索中',
          backgroundColor: 'rgba(0,0,0,.7)',
          spinner: 'el-icon-loading'
        })
        searchSearch(this.user.id, keyWords).then(res => {
          loading.close()
          console.log('获取到返回结果', res)
          this.result = res
        })
      } 
    },
    getHotSearch() {
      searchHotSearch(7).then(res => {
        console.log('更新热搜成功', res)
        this.hotSearchList = res
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.keyWords = this.$route.params.keyWords || ''
    this.getResult(this.keyWords)
    this.getHotSearch()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  
  },
  //生命周期 - 创建之前
  beforeCreate () {}, 
  //生命周期 - 挂载之前
  beforeMount () {}, 
  //生命周期 - 更新之前
  beforeUpdate () {}, 
  //生命周期 - 更新之后
  updated () {}, 
  //生命周期 - 销毁之前
  beforeDestroy () {}, 
  //生命周期 - 销毁完成
  destroyed () {}, 
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated () {}, 
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.search-container {
  header {
    display:flex;
    flex-direction: row-reverse;
    padding-right: 50px;
    padding-top: 10px;
    height: 50px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: white;
    .search-container-header-item {
      font-weight: bolder;
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
  }
  .search-container-content {
    padding: 25px 50px; 
  }
  .search-container-content-main {
    margin-top: 25px;
    display: flex;
    article {
      width: 700px;
      .search-result-item{
        margin-bottom: 25px;
        .search-result-item-main {
          display: flex;
          .search-result-item-main-detail-decription {

          }
          .search-result-item-main-detail-slurl {
            font-size: 0.9em;
            color: rgb(155, 155, 155);
          }  
        }
      }
    }
    .mask {
      flex: 1;
    }
    aside {
      width: 350px;
      padding: 25px;
      // background-color: yellow;
      .box-card {
        position: sticky;
        top: 60px;
      }
    } 
  }
}
</style>