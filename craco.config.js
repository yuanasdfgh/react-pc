const { dir } = require("console");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir); //获取当前路径
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
