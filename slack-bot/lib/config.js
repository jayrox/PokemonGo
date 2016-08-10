var fs = require('fs-extra');
var _  = require('lodash');

var configFile         = __dirname + '/../config.json';
var configFileTemplate = configFile + '.template';

var config;

try {
  config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
} catch (err) {
  if (err.name === 'SyntaxError') {
    throw new Error('Invalid config file, please make sure the file is in JSON format.');
  }

  // config file not found
  if (err.code === 'ENOENT') {
    fs.copySync(configFileTemplate, configFile);
    config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  }
}

config.app.port        = process.env.PSB_APP_PORT        || config.app.port        || 8081;
config.slack.channel   = process.env.PSB_SLACK_CHANNEL   || config.slack.channel   || '#pokemon';
config.slack.webhook   = process.env.PSB_SLACK_WEBHOOK   || config.slack.webhook   || '';

module.exports = config;
