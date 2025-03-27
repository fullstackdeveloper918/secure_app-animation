function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return nextConfig; // Ensure it returns nextConfig even if userConfig is undefined
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }

  return nextConfig; // Ensure final merged config is returned
}

export default mergeConfig(nextConfig, userConfig);
