export const API_ROUTES = {
  home: '/pages/home',
  portfolio: '/pages/portfolio',
  blogPosts: ({ slug, page, limit }: { slug?: string, page?: number, limit?: number }) => {
    const params = new URLSearchParams({
      ...(slug && { slug }),
      ...(page && { page: page.toString() }),
      ...(limit && { limit: limit.toString() }),
    })
    return `/blogPosts?${params}`
  },
}