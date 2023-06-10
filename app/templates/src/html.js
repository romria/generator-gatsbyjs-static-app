import * as React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        {/* <meta name="google-site-verification" content="" /> */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object.isRequired,
  headComponents: PropTypes.arrayOf(React.ReactNode).isRequired,
  bodyAttributes: PropTypes.object.isRequired,
  preBodyComponents: PropTypes.arrayOf(React.ReactNode).isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.arrayOf(React.ReactNode).isRequired,
};
