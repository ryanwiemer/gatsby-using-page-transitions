const transitionDelay = 300;

exports.shouldUpdateScroll = ({ pathname }) => {
  // // We use a temporary hack here, see #7758
  if (window.__navigatingToLink) {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = JSON.parse(
      window.sessionStorage.getItem(`@@scroll|${pathname}`)
    );
    window.setTimeout(() => window.scrollTo(...savedPosition), transitionDelay);
  }
  return false;
};
