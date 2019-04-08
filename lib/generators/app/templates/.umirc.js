// ref: https://umijs.org/config/

import { resolve } from 'path';

export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: <% if (reactFeatures.includes('antd')) { %>true<% } else { %>false<% } %>,
      dva: <% if (reactFeatures.includes('dva')) { %>true<% } else { %>false<% } %>,
      dynamicImport: <% if (reactFeatures.includes('dynamicImport')) { %>{ webpackChunkName: true }<% } else { %>false<% } %>,
      title: '<%= name %>',
      dll: <% if (reactFeatures.includes('dll')) { %>true<% } else { %>false<% } %>,
      <% if (reactFeatures.includes('locale')) { %>locale: {
        enable: true,
        default: 'en-US',
      },<% } %>
      routes: {
        exclude: [<% if (reactFeatures.includes('dva')) { %>
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,<% } %>
          /components\//,
        ],
      },
    }],
  ],
  // Theme for antd
  // https://ant.design/docs/react/customize-theme
  theme: './config/theme.config.js',
  alias: {
    api: resolve(__dirname, './src/services/'),
    components: resolve(__dirname, './src/components'),
    config: resolve(__dirname, './src/utils/config'),
    models: resolve(__dirname, './src/models'),
    services: resolve(__dirname, './src/services'),
    themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
  },
}
