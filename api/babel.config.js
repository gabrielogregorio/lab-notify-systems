module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/controllers': './src/controllers',
            '@/handlers': './src/handlers',
            '@/helpers': './src/helpers',
            '@/interfaces': './src/interfaces',
            '@/locales': './src/locales',
            '@/middlewares': './src/middlewares',
            '@/models': './src/models',
            '@/services': './src/services',
            '@/shared': './src/shared',
          },
        },
      ],
    ],
    ignore: ['**/*.spec.ts', '**/*.test.ts'],
  };