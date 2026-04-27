import * as mdx from 'eslint-plugin-mdx'

export default [
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
      remarkPlugins: [
        ['remark-frontmatter', ['yaml']],
        ['remark-math', true],
      ],
    }),
    rules: {
      ...mdx.flat.rules,
      'mdx/remark': 'warn',
    },
  },
]
