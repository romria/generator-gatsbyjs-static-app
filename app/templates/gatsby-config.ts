// @ts-check

import type {GatsbyConfig} from 'gatsby';
import dotenv from 'dotenv';
import {QuerySitemapPluginResult} from './src/types';

dotenv.config({path: `.env.${process.env.NODE_ENV}`});

const WEBSITE_URL = process.env.GATSBY_WEBSITE_BASE_URL;
const lastmod = new Date().toISOString();

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false,
  },
  pathPrefix: '/',

  siteMetadata: {
    title: 'My Gatsby Project',
    description: 'Project',
    keywords: '',
    twitterUsername: '',
    image: 'src/images/gatsby-icon.png',
    url: WEBSITE_URL,
    siteUrl: WEBSITE_URL,
  },

  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-css-modules',
      options: {
        filetypes: {'.scss': {syntax: 'postcss-scss'}},
        // Exclude global styles from the plugin using a RegExp:
        // exclude: 'global',
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // Override the file regex for SASS
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'none',
          backgroundColor: 'transparent',
          quality: 80,
          // breakpoints: [200, 400, 600, 900, 1200],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'My Gatsby Project',
        icon: 'src/images/icon.png',
        short_name: 'My Gatsby Project',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: WEBSITE_URL,
        sitemap: `${WEBSITE_URL}/sitemap/sitemap-index.xml`,
        policy: [{
          userAgent: '*',
          allow: '/',
          // disallow: ['/excluded'],
        }],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
        // excludes: ['/excluded'],
        query: `query Sitemap {
          site {
            siteMetadata {
              url
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: ({site}: QuerySitemapPluginResult) => site.siteMetadata.siteUrl,
        serialize: ({path}: {path: string}) => ({
          url: path,
          lastmod,
          changefreq: 'daily',
          priority: 0.7,
        }),
      },
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'React', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};

export default config;
