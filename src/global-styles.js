import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif, Helvetica, Arial;
}

html,
body {
  width: 100%;
  background-color: #f7f7f7;
}

#app {
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

`;
