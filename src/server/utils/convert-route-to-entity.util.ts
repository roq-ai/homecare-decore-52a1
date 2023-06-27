const mapping: Record<string, string> = {
  organizations: 'organization',
  products: 'product',
  'related-items': 'related_item',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
