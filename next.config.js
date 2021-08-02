module.exports = {
  images: {
    domains: ["fakestoreapi.com"],
     future: { webpack5: true }
     
  },
    webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
