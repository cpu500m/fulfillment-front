<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import {ref, onMounted, computed} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute();


/*

/!* 사이드바 너비 계산 *!/
const sidebarWidth = computed(() => {
  const $sidebar = document.querySelector('.v-navigation-drawer__content');
  if ($sidebar) {
    return $sidebar.clientWidth;
  }
  return 0
})

/!* 타이틀 영역 높이 계산 *!/
const titleAreaHeight = computed(() => {
  const $titleArea = document.querySelector('.v-toolbar__content');
  if ($titleArea) {
    return $titleArea.clientHeight;
  }
  return 0
})

const mainContentWidth = computed(()=>{
  return window.innerWidth - sidebarWidth.value
})
*/

onMounted(() => {
  let $appObject = document.getElementById('app');

  if ($appObject) {
    $appObject.style.padding = '0';
    $appObject.style.margin = '0';
  }
});

//next -- main content의 padding을 적당히 줘서 sideBar바로 옆 영역부터 메인영역이 차지하도록 하기.
</script>


<template>
  <VResponsive>
  <VApp>
    <vAppBar
        class="app-bar"
        density="comfortable"
        color="#daf5cc"
        floating
        elevation="0">
      <template #title>
        <VRow>
          <VCol class="appbar-title">
            풀필먼트 재고관리
          </VCol>
          <VCol class="appbar-breadcrumb text-right mr-10">
            {{ route.name }}
          </VCol>
        </VRow>
      </template>
      <template #prepend>
        <VIcon
            class="appbar-icon ml-2"
            icon="mdi-thumb-up"
        />
      </template>

    </vAppBar>
    <SideBar/>
    <VMain>
      <vContainer>
        <RouterView/>
      </vContainer>
    </VMain>
  </VApp>
  </VResponsive>
</template>

<style scoped>
.app-bar {
  border-bottom: 1px solid #197423;
}

.appbar-title {
  color: #197423;
  font-weight: bold;
}

.appbar-breadcrumb {
  color: #197423;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
}

.appbar-icon {
  color: #197423;
}
</style>