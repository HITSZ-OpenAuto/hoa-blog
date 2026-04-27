/**
 * @type {import('remark').Root}
 */
const config = {
  plugins: [
    'remark-frontmatter',
    ['remark-mdx', { math: true }],
    'remark-math',
    ['remark-preset-lint-consistent', true],
    // Disable rules that conflict with MDX
    ['remark-lint-no-undefined-references', false],
    // Allow HTML in markdown (needed for inline HTML in blog posts)
    ['remark-lint-no-html', false],
  ],
};

export default config;
