const menuLinks = [
  {
    label: "about",
    url: "/about",
  },
  {
    label: "portfolio",
    url: "/portfolio",
  },

  {
    label: "contacts",
    url: "/contacts",
  },
]

const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamad-bitar-5139307b/",
    icon: "icons/linkedin.png",
  },
  {
    label: "Stackoverflow",
    url: "https://stackoverflow.com/users/7370601/mohammad-bitar",
    icon: "icons/stack-overflow.png",
  },
  {
    label: "Github",
    url: "https://github.com/mhdbitar",
    icon: "icons/github.png",
  },
]

const siteMetadata = {
  title: `Software & iOS Engineer`,
  description: `Software & iOS engineer with 5+ years of experience creating successful iOS apps.`,
  author: `@engMhdBitar`,
  siteUrl: "https://mohamad-bitar.me/",
  phone: "+905313611777",
  email: "eng.mhd.bitar@gmail.com",
  name: "Mohamad Bitar",
  siteTitle: "Mhd-Bitar",
  menuLinks,
  socialLinks,
}

const plugins = [
  `gatsby-plugin-sass`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            linkImagesToOriginal: false,
            withWebp: true,
            maxWidth: 960,
            quality: 100,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `files`,
      path: `${__dirname}/src/assets/files`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Front-end Developer`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#4b6cc1`,
      theme_color: `#4b6cc1`,
      display: `minimal-ui`,
      icon: `src/assets/images/icon.jpg`,
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`Josefin Sans\:200,400,700`],
      display: "swap",
    },
  },
  /* {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.inline\.svg$/,
        options: {
          name: "Icon",
          props: {
            className: "svg-icon",
          },
        },
      },
    },
  }, */
  `gatsby-plugin-gatsby-cloud`,
  `gatsby-plugin-offline`,
]

module.exports = {
  siteMetadata,
  plugins,
}
