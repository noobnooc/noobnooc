module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Homepage of Nooc`,
        short_name: `Nooc`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `static/images/circle-avatar.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
