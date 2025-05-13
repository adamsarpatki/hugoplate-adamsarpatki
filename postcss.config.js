const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [
      purgecss({
        content: ["./hugo_stats.json"],
        defaultExtractor: (content) => {
          const elements = JSON.parse(content).htmlElements;
          return [
            ...(elements.tags || []),
            ...(elements.classes || []),
            ...(elements.ids || []),
          ];
        },
        safelist: [
          /^swiper-/,
          /^lb-/,
          /^gl/,
          /^go/,
          /^gc/,
          /^gs/,
          /^gi/,
          /^gz/,
          /^gprev/,
          /^gnext/,
          /^desc/,
          /^zoom/,
          /^search/,
          /^:is/,
          /dark/,
          /show/,
          /dragging/,
          /fullscreen/,
          /loaded/,
          /visible/,
          /current/,
          /active/,
          /mark/,
          'prose',
          'prose-p',
          'prose-img',
          'prose-h1',
          'prose-h2',
          'prose-h3',
          'prose-h4',
          'prose-h5',
          'prose-h6',
          'prose-blockquote',
          'prose-pre',
          'prose-code',
          'prose-strong',
          'prose-a',
          'prose-li',
          'prose-hr',
          // Optional responsive variants
          'md:prose-h1',
          'md:prose-h2',
          'md:prose-h3',
        ],
      })
    ] : []),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [require('autoprefixer')] : []),
  ]
};
