// styleguide.config.js
const { join, resolve } = require("path")
const { parse: propsParser } = require("react-docgen-typescript")
const { version } = require("./package.json")
const { styles, theme } = require("./styleguide/styles.js")
const { sections } = require("./styleguide/sections.js")
const path = require("path")
const fs = require("fs")

module.exports = {
  title: "Operational UI",
  version,
  propsParser,
  styles,
  theme,
  sections,
  pagePerSection: true,
  template: {
    favicon: "./styleguide/favicon.ico",
  },
  moduleAliases: {
    "@operational/components": resolve(__dirname, "src"),
  },
  styleguideComponents: {
    SectionRenderer: join(__dirname, "styleguide/SectionRenderer"),
    Wrapper: join(__dirname, "styleguide/Wrapper"),
    StyleGuideRenderer: join(__dirname, "styleguide/StyleGuideRenderer"),
    TableOfContentsRenderer: join(__dirname, "styleguide/TableOfContentsRenderer"),
    ComponentsListRenderer: join(__dirname, "styleguide/ComponentsListRenderer"),
    ReactComponentRenderer: join(__dirname, "styleguide/ReactComponentRenderer"),
    SectionHeadingRenderer: join(__dirname, "styleguide/SectionHeadingRenderer"),
    HeadingRenderer: join(__dirname, "styleguide/HeadingRenderer"),
    TabButtonRenderer: join(__dirname, "styleguide/TabButtonRenderer"),
  },
  context: {
    styled: "@emotion/styled",
  },

  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    const { dir, base, ext, name: fileName } = path.parse(componentPath)
    const folderName = path.basename(dir)

    if (fileName === "index" || fileName === folderName) return path.join(dir, "README.md")
    const maybeMD = path.join(dir, fileName + ".md")

    try {
      if (fs.existsSync(maybeMD)) {
        return maybeMD
      }
    } catch (err) {
      return null
    }
  },
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      path: join(__dirname, "dist"),
    }
    return webpackConfig
  },
  webpackConfig: {
    resolve: {
      extensions: [".js", ".tsx", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)/,
          use: {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                declaration: false,
              },
            },
          },
        },
      ],
    },
  },
}
