<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import {ref, onMounted, computed} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute(); // 현재 라우트 정보를 가져옵니다.

const sidebarWidth = ref<number>(0); // 초기 사이드바 너비를 0으로 설정

// 사이드바 너비를 동적으로 업데이트하는 함수
const getSidebarWidth = () => {
  const $sidebar = document.querySelector('.v-navigation-drawer__content'); // 사이드바 클래스 선택
  if ($sidebar) {
    sidebarWidth.value = $sidebar.clientWidth; // 사이드바의 너비를 계산하여 ref에 저장
  }
};

const mainContentWidth = computed(() =>{
  return window.innerWidth - sidebarWidth.value
})

onMounted(() => {
  getSidebarWidth(); // 컴포넌트가 마운트될 때 초기 너비 설정
  window.addEventListener('resize', getSidebarWidth); // 윈도우 크기 변경 시 사이드바 너비 업데이트
});
</script>


<template>
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
    <VMain
        :width=mainContentWidth>
      <vContainer>
        <RouterView />
      </vContainer>
    </VMain>
  </VApp>
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