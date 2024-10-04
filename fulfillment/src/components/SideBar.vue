<script setup lang="ts">
</script>

<template>
  <vNavigationDrawer
      class="main-color"
      permanent
      app
  >
    <vList density="compact" nav>
      <vListItem prepend-icon="mdi-home" title="홈" to="/"></vListItem>
      <vListItem prepend-icon="mdi-domain" title="공급사 등록" to="/supplier-registration"></vListItem>
      <vListItem prepend-icon="mdi-map-marker" title="로케이션 등록" to="/location-registration"></vListItem>
      <vListItem prepend-icon="mdi-package-variant-closed" title="판매상품 등록" to="/sales-registration"></vListItem>
      <vListItem prepend-icon="mdi-package-variant-closed" title="출고상품 등록" to="/release-registration"></vListItem>
      <vListItem prepend-icon="mdi-note-check-outline" title="재고 실사" to="/stock-inspection"></vListItem>
    </vList>
  </vNavigationDrawer>
</template>

<style scoped>
.main-color {
  background-color: #daf5cc; /* 원하는 색상으로 조정 */
  color: #197423; /* 텍스트 색상 */
}
</style>
