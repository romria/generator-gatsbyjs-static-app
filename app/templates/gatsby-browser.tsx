// import * as React from 'react';
// import type {GatsbyBrowser} from 'gatsby';
// import './src/constants/global.scss'; // ToDo: postcss-scss

import wrapWithProvider from './src/state/redux-wrapper';

// export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
//   element,
//   props,
// }) => {
//   return <>{element}</>;
// }

export const wrapRootElement = wrapWithProvider;
