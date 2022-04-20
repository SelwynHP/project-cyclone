import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  //https://coolors.co/87b38d-22031f-b23a48-fbff12-3a5a40
  :root {
    /* CSS HEX */
    --dark-sea-green: #87b38dff;
    --dark-purple: #22031fff;
    --english-red: #b23a48ff;
    --lemon-glacier: #fbff12ff;
    --hunter-green: #3a5a40ff;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    color: var(--lemon-glacier);
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-family: sans-serif;
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  form {
    background-color: var(--dark-sea-green);
    margin: 15px 0;
    border: 2px solid var(--dark-purple);
    border-radius: 5px 15px;
    box-shadow: 10px 10px var(--dark-purple);
    padding: 30px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  button {
    margin: 15px 0;
    border-style: none;
    background-color: var(--hunter-green);
    padding: 10px;
    border-radius: 5px 15px;
    color: var(--lemon-glacier);
    font-weight: bold;

    &:hover {
      cursor: pointer;
      background-color: var(--dark-purple);
    }
  }
`