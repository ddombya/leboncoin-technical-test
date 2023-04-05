const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};
