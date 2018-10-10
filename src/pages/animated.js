/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import posed from "react-pose";
import Helmet from "react-helmet";

const Section = posed.section({
  enter: { staggerChildren: 50 }
});

const H1 = posed.h1({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0, delay: 300 }
});

const P = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0, delay: 300 }
});

export default () => (
  <>
    <Helmet>
      <title>Aniamted</title>
    </Helmet>
    <Section>
      <H1>Animated Content</H1>
      <P>
        Proin facilisis egestas lorem at fringilla. Pellentesque luctus
        fermentum mi, in vulputate ipsum volutpat mollis. Vestibulum vel
        imperdiet ex, id imperdiet dolor. Sed eros leo, auctor a lacinia eget,
        volutpat et ex. Quisque vel volutpat quam, rutrum scelerisque ipsum.
        Duis dignissim faucibus eleifend. Praesent at dolor semper, interdum dui
        id, iaculis purus. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nulla porttitor vestibulum urna. Donec gravida vulputate dui, ac
        ullamcorper mi pretium in. Maecenas sagittis sem ut diam placerat
        venenatis. Etiam placerat semper eleifend. Nullam sed est rhoncus,
        sagittis orci quis, luctus felis.
      </P>
      <P>
        In fermentum urna id mi commodo, sed auctor purus molestie. Cras sit
        amet commodo nibh. Pellentesque posuere consectetur fermentum. Cras
        aliquam condimentum tincidunt. Etiam tristique ut arcu ac semper.
        Pellentesque sit amet nunc urna. Fusce blandit malesuada feugiat.
        Praesent in tincidunt nisi. Ut ac lacus nec risus pretium dapibus.
        Vestibulum nec lectus eros. Fusce id enim auctor, tempus ipsum a,
        maximus lorem.
      </P>
      <P>
        Phasellus nec dapibus tellus, eget tempus enim. Donec viverra neque
        tortor, vel interdum libero bibendum a. Sed vulputate turpis luctus
        tortor euismod consequat. Duis quis leo in risus laoreet suscipit non id
        neque. Duis auctor turpis in elit fringilla, eget pellentesque mi
        sagittis. Praesent facilisis nulla semper scelerisque aliquet. Aenean
        lobortis orci mauris, non vulputate eros ultricies et.
      </P>
      <P>
        Quisque nec tempor purus. Fusce at odio non risus tempus gravida a quis
        nisi. Nunc malesuada tincidunt ornare. Aliquam ut posuere magna, at
        elementum leo. Sed vestibulum dictum urna, eu mollis quam scelerisque
        vel. Vivamus nec justo et nisl blandit facilisis. Integer facilisis
        vulputate enim, vitae viverra dolor mattis at. Duis fermentum id sem
        vitae dapibus. Cras euismod eget erat in consectetur. Curabitur eget
        enim malesuada, euismod massa a, semper ligula.
      </P>
      <P>
        Vestibulum sed euismod purus, hendrerit dictum urna. Aenean consequat,
        ipsum vitae volutpat tempus, dolor tellus placerat nibh, id lobortis
        purus elit non nibh. Ut quis sagittis lorem. Phasellus congue tellus
        placerat, hendrerit lectus nec, sagittis lacus. Vivamus quis molestie
        odio. Donec ut risus dui. Sed sollicitudin ipsum velit, eu fermentum
        risus sollicitudin sit amet. Aenean ultricies, quam non aliquet
        consequat, dui eros faucibus nulla, in pulvinar est dolor nec quam.
        Quisque mauris eros, condimentum eget metus at, lobortis sodales diam.
        In eget urna finibus, mollis ex fringilla, viverra libero. Quisque nec
        massa eleifend, sagittis arcu sed, finibus metus. Nunc tristique leo at
        nunc tristique mattis. Mauris ut tempor mauris.
      </P>
      <P>
        Mauris in rhoncus augue, tempus volutpat metus. Etiam ut urna vitae leo
        finibus imperdiet auctor id odio. Cras ac lacinia neque, nec mollis
        nisl. Nulla suscipit mauris mi, nec iaculis eros porta vel. Vivamus vel
        iaculis eros. Aenean at lacus rhoncus, hendrerit ligula vitae, porttitor
        ante. Curabitur diam neque, luctus vitae turpis ut, feugiat porta elit.
        Aenean nec dolor mauris. Sed ultrices in libero ut euismod. Nullam risus
        sapien, semper vitae magna sed, vestibulum dapibus orci. Aenean cursus
        leo eget dignissim pharetra.
      </P>
      <P>
        Etiam ligula quam, semper sit amet massa in, commodo tincidunt ex. Ut a
        cursus lorem, nec condimentum magna. Sed at feugiat ligula. Quisque quis
        ipsum est. Aliquam sit amet placerat metus. Phasellus semper commodo
        ultricies. Quisque condimentum ipsum nec ligula mattis, non facilisis
        ante semper. Donec tincidunt ultrices sagittis. Nulla neque arcu, luctus
        eleifend lacinia a, ullamcorper ut metus. Curabitur condimentum nibh
        vehicula hendrerit ultricies. Donec placerat eros et ligula auctor, eget
        pellentesque purus sodales.
      </P>
    </Section>
  </>
);
