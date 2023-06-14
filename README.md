## Gatsby app generator with a static server-side rendering

This is a [Gatsby](https://www.gatsbyjs.com/) app generator which is based on React.js and uses server side rendering without any dynamic data (static app). 

[Autodeploy script](https://github.com/romria/generator-gatsbyjs-static-app/blob/master/app/templates/.github/workflows/deploy.yml) is created for [Github Actions](https://github.com/features/actions) and expects the app to be deployed to [AWS S3](https://aws.amazon.com/s3/) served through [AWS Cloudfront](https://aws.amazon.com/cloudfront/).

You can find more information here:
* [Github Actions Documentation](https://docs.github.com/en/actions)
* [Deploying Gatsby to AWS S3/CloudFront](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-s3-cloudfront/)
* [Hosting a static website using Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
* _to be added..._

### Requirements
* [Node.js](https://nodejs.org/) v18.16.0 or higher
* [Yeoman](https://yeoman.io) v5.x

### Installation
Install the generator globally from this public repository:

```bash
npm install -g https://github.com/romria/generator-gatsbyjs-static-app
```

### Update
If you already installed this generator before, you might want to update it

```bash
npm update -g https://github.com/romria/generator-gatsbyjs-static-app
```

### Usage
Navigate to a fresh project directory and run generate command:

```bash
yo gatsbyjs-static-app
```

### Links
* [Rendering options](https://www.gatsbyjs.com/docs/conceptual/rendering-options/)
* [Using Server-side Rendering (SSR)](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-server-side-rendering/)
* 
