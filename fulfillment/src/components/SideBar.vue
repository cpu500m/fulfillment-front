<script setup lang="ts">
</script>

<template>
  <VNavigationDrawer
      class="main-color"
      permanent
      app
  >
    <VList density="compact" nav>
      <VListItem prepend-icon="mdi-home" title="홈" to="/"></VListItem>
      <VListItem prepend-icon="mdi-domain" title="공급사 등록" to="/supplier-registration"></VListItem>
      <VListItem prepend-icon="mdi-map-marker" title="로케이션 등록" to="/location-registration"></VListItem>
      <VListItem prepend-icon="mdi-package-variant-closed" title="판매상품 등록" to="/sales-registration"></VListItem>
      <VListItem prepend-icon="mdi-package-variant-closed" title="출고상품 등록" to="/release-registration"></VListItem>
      <VListItem prepend-icon="mdi-note-check-outline" title="재고 실사" to="/stock-inspection"></VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped>
.main-color {
  background-color: #daf5cc; /* 원하는 색상으로 조정 */
  color: #197423; /* 텍스트 색상 */
}
</style>
