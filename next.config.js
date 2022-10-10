module.exports = {
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  async redirects() {
    return [
      {
        source: '/book',
        destination: 'https://calendly.com/option-zero/book',
        permanent: false,
        basePath: false
      },
    ]
  },
}