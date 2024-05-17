module.exports = {
  resolve: {
    extensions: ['js', 'ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
}