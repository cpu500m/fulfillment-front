import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import SupplierRegistration from "@/pages/supplier-registration.vue";
import StockInspection from "@/pages/stock-inspection.vue";
import SalesRegistration from "@/pages/sales-registration.vue";
import ReleaseRegistration from "@/pages/release-registration.vue";
import LocationRegistration from "@/pages/location-registration.vue";
import Main from "@/pages/main.vue";

const routes = [
  { path: '/', name: '', component: Main },
  { path: '/supplier-registration', name: '공급사 등록', component: SupplierRegistration },
  { path: '/location-registration', name: '로케이션 등록', component: LocationRegistration },
  { path: '/stock-inspection', name: '재고 실사', component: StockInspection },
  { path: '/sales-registration', name: '판매상품 등록', component: SalesRegistration },
  { path: '/release-registration', name: '출고상품 등록', component: ReleaseRegistration },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router