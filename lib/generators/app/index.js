const debug = require('debug')('create-ld-umi:generator');
const BasicGenerator = require('../../BasicGenerator');

class Generator extends BasicGenerator {
  prompting() {
    const prompts = [
      {
        name: 'reactFeatures',
        message: 'What functionality do you want to enable?',
        type: 'checkbox',
        choices: [
          { name: 'antd', value: 'antd' },
          { name: 'dva', value: 'dva' },
          { name: 'code splitting', value: 'dynamicImport' },
          { name: 'dll', value: 'dll' },
          { name: 'internationalization', value: 'locale' },
        ],
      },
    ];
    return this.prompt(prompts).then(props => {
      this.prompts = props;
    });
  }

  writing() {
    this.writeFiles({
      context: {
        name: this.name,
        ...this.prompts,
      },
      filterFiles: f => {
        const { reactFeatures } = this.prompts;
        if (this.isTsFile(f)) return false;
        if (!reactFeatures.includes('dva')) {
          if (f.startsWith('src/models') || f === 'src/app.js') return false;
        }
        if (!reactFeatures.includes('locale')) {
          if (f.startsWith('src/locales') || f.includes('umi-plugin-locale')) return false;
        }
        return true;
      },
    });
  }
}

module.exports = Generator;
