# gatsby-using-page-transitions

Gatsby example site using page transitions

- This example uses `react-pose` for a default page transition as well as more complex individual animations on specific pages or components
- The Layout component is manually wrapped around pages via the replaceComponentRenderer in `gatsby-browser.js`
- The scroll position is manually set in `gatsby-browser.js` in order to delay scrolling to the top of the page until after the default page transition

### Quirks

- Setting a margin-top on the first element seems to make the page jump slightly during the page transition. More investigation is needed to understand why.
