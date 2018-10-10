# gatsby-using-page-transitions

Gatsby v2 example site using page transitions

- This example uses `react-pose` for a default page transition as well as more complex individual animations on specific pages or components
- The Layout component is manually wrapped around pages via `wrapPageElement` in `gatsby-browser.js`. Alternatively [gatsby-plugin-layout](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-layout) could be used to achieve a similar result.
- The scroll position is manually set in `gatsby-browser.js` in order to delay scrolling to the top of the page until after the default page transition

### Quirks

- Setting a margin-top on the first element seems to make the page jump slightly during the page transition. More investigation is needed to understand why.
