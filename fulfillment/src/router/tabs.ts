const routesMap = [
  'supplier-registration',
  'inventory-audit',
  'product-registration',
  'shipment-registration',
  'location-registration'
]

export function getTabIndexFromRoute(route: any) {
  return routesMap.indexOf(route.name)
}

export function getRouteNameFromTabIndex(index : any) {
  return routesMap[index] || null
}