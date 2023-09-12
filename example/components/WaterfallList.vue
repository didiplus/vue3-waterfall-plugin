<template>
  <div>
    <el-affix :offset="0">
      <header>
        <div class="search">
        <input type="text" v-model="keywork"  @keyup.enter.native="search"  placeholder="你想要搜索什么图片" />
        <button type="button" @click="search" >搜索</button>
    </div>
    </header>
    </el-affix>
    <Waterfall :list="list" :row-key="options.rowKey" :gutter="options.gutter"
      :has-around-gutter="options.hasAroundGutter" :width="options.width" :breakpoints="options.breakpoints"
      :img-selector="options.imgSelector" :background-color="options.backgroundColor"
      :animation-effect="options.animationEffect" :animation-duration="options.animationDuration"
      :animation-delay="options.animationDelay" :lazyload="options.lazyload" :load-props="options.loadProps"
      :cross-origin="options.crossOrigin">
      <template #item="{ item, url }">
        <div
          class="bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-linear hover:shadow-lg hover:shadow-gray-600 group"
          @click="handleClick(item)">
          <div class="overflow-hidden">
            <LazyImg :url="url" class="cursor-pointer transition-all duration-300 ease-linear group-hover:scale-105" />
          </div>
        </div>
      </template>
    </Waterfall>

    <div class="flex justify-center py-10 bg-gray-900">
      <button @click="handleLoadMore"
        class="px-5 py-2 rounded-full bg-gray-700 text-md text-white cursor-pointer hover:bg-gray-800 transition-all duration-300">
        加载更多
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'
import { LazyImg, Waterfall } from '../../lib/index'
import type { ViewCard } from '../../lib/types/waterfall'
import { toutiao_search_pic } from '../api'


const props = defineProps({
  list: {
    type: Array,
  },
  options: {
    type: Object as PropType<any>,
  },
  pageSize: {
    type: Number,
    default: 30,
  },
})

const keywork = ref("风景")
const emits = defineEmits({
  cardClick: null,
})

// 列表
const list = ref<ViewCard[]>([])
const page = ref(0)
const size = ref(30)

onMounted(() => {
  handleLoadMore()
})

//搜索
function search() {
  page.value = 0
  toutiao_search_pic({
    page: page.value,
    size: size.value,
    term: keywork.value
  }).then((res)=>{
    if (list.value.length > 0 ) {
      list.value =[]
    }
    list.value.push(...res)
  })
}

// 加载更多
function handleLoadMore() {

  toutiao_search_pic({
    page: page.value,
    size: size.value,
    term: keywork.value
  }).then((res) => {
    list.value.push(...res)
    page.value += props.pageSize
  })
}


function handleClick(item: ViewCard) {
  emits('cardClick', item)
}


</script>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 15px 20px ;
    
}

.search {
    display: flex;
    justify-content: center;
}
.search input {
    padding: 10px;
    border: none;
    width: 40%;
    font-size: 15px;
    outline: none;
    border-radius: 10px 0 0 10px;
    color: #333;
}

.search button {
    padding: 10px 20px;
    background-color: #ff5722;
    border: none;
    width: 10%;
    cursor: pointer;
    font-size: 15px;
    color: #fff;
    font-weight: 600;
    border-radius: 0 10px 10px 0;
    transition: all 0.3s ease;
}

.search button:hover {
    background-color: #e64a19;
}
</style>
