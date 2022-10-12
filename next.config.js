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
      {
        source: '/portfolio',
        destination: 'https://docs.google.com/document/d/1Tl0Ly7_f9bOCm0icSl42669aUDiksADPQClUQ-D87dg/edit?usp=sharing',
        permanent: false,
        basePath: false
      },
    ]
  },
}