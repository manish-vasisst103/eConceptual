export const URLS = {
  // Auth URLs
  login: '/login',

  //App URLs
  profile: '/profile',
  product: (page: number) => `/product?page=${page}`,
};
