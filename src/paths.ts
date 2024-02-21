export const paths = {
  home: '/',
  about: '/about',
  bookings: '/bookings',
  blog: {
    index: '/blog',
    list: (page: number = 1) => `/blog/list/${page}`,
    post: (slug: string) => `/blog/${slug}`,
    404: (slug: string) => `/blog/${slug}/404`,
  }
}