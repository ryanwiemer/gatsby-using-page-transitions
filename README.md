# gatsby-using-page-transitions

Gatsby example site using page transitions

- This example uses [`Framer Motion`](https://www.framer.com/motion/) for a default page transition as well as more complex individual animations that can be triggered when the page is mounted.
- The Layout component is manually wrapped around pages via `wrapPageElement` in `gatsby-browser.js`. Alternatively [gatsby-plugin-layout](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-layout) could be used to achieve a similar result.
- The scroll position is manually set in `gatsby-browser.js` in order to delay scrolling to the top of the page until after the default page transition.
