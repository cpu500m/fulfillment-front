<script setup lang="ts">

import {ref} from "vue";
import {ExternalData} from "@/types/type";
import axios from "axios";

const headers = [
  { title: "번호", align: 'start', sortable : true , key: 'uid' },
  { title: "제목", align: 'end', sortable : true , key: 'title' },
  { title: "작성자", align: 'end', sortable : true , key: 'author' },
  { title: "작성날짜", align: 'end', sortable : true , key: 'date' },
  { title: "조회수", align: 'end', sortable : true , key: 'seeCount' },
  { title: "추천", align: 'end', sortable : true , key: 'upCount' },
] as const

const items = ref<ExternalData[]>([
  {uid : 1,
    title : "더미더미1",
    author : "paul",
    date : '12/21',
    seeCount : 31,
    upCount : 21
  },
  {uid : 2,
    title : "더미더미2",
    author : "jeje",
    date : '9/24',
    seeCount : 0,
    upCount : 11
  },
  {uid : 3,
    title : "더미더미3",
    author : "hoho",
    date : '2/5',
    seeCount : 1,
    upCount : 45
  },
  {uid : 4,
    title : "더미더미4",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미5",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미6",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미7",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미8",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미9",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미10",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미11",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미12",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미13",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미14",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미15",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미16",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미17",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미18",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },
  {uid : 4,
    title : "더미더미19",
    author : "han",
    date : '7/3',
    seeCount : 106,
    upCount : 64
  },

] as ExternalData[])

const callServer = async () =>{
  let response = await axios.get(`/test`)
  .then(response =>{
    console.log(response.data)
  })
}

</script>

<template>
  <VRow>
    <VCol>
    <VBtn color="green">데이터 가져오기</VBtn>
    </VCol>
    <VCol>
      <VBtn @click="callServer">
        통신 하겠니?
      </VBtn>
    </VCol>
  <VTable
      height="600"
      >
    <thead>
    <tr>
      <th>번호</th>
      <th>제목</th>
      <th>작성자</th>
      <th>작성날짜</th>
      <th>조회수</th>
      <th>추천</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in items">
      <td>
        {{item.uid}}
      </td>
      <td>
        {{item.title}}
      </td>
      <td>
        {{item.author}}
      </td>
      <td>
        {{item.date}}
      </td>
      <td>
        {{item.seeCount}}
      </td>
      <td>
        {{item.upCount}}
      </td>
    </tr>
    </tbody>
  </VTable>
  </VRow>
</template>