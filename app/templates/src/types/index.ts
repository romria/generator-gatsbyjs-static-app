export type SiteMetadata = {
  title: string;
  description: string;
  keywords: string;
  twitterUsername: string;
  image: string;
  siteUrl: string;
}

export type QuerySitemapPluginResult = {
  site: {
    siteMetadata: SiteMetadata
  }
  allSitePage: {
    nodes: {
      path: string
    }
  }
}
