module.exports = {
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/services',
        permanent: false,
      },
    ]
  },
}