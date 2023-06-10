// import * as React from 'react';
// import type {GatsbySSR} from 'gatsby';
import wrapWithProvider from './src/state/redux-wrapper';

// export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
//   element,
//   props,
// }) => {
//   return <>{element}</>;
// };

export const wrapRootElement = wrapWithProvider;

// export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
//   pathname,
//   getHeadComponents,
//   replaceHeadComponents,
//   getPreBodyComponents,
//   replacePreBodyComponents,
//   getPostBodyComponents,
//   replacePostBodyComponents,
// }) => {
//   const headComponents = getHeadComponents();
//   const postBodyComponents = getPostBodyComponents();
//
//   postBodyComponents.unshift(
//     <script src="" />,
//   );
//   replacePostBodyComponents(postBodyComponents);
//
//   if (process.env.NODE_ENV === 'production') {
//     headComponents.unshift(
//       <script
//         dangerouslySetInnerHTML={{
//           __html: '',
//         }}
//       />,
//     );
//
//     replaceHeadComponents(headComponents);
//   }
// };
