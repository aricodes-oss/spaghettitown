module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  printWidth: 100,
  arrowParens: 'avoid',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
