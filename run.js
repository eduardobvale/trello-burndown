/*
 * Trello burndown chart generator
 *
 * Author: Norbert Eder <wpfnerd+nodejs@gmail.com>
 */

var fs = require('fs');
var path = require('path');

global.settings = require('./settings');
settings.root   = __dirname.replace(/\/+$/, "");
settings.exportPath = path.join(settings.root, 'export');
settings.configPath = path.join(settings.root, 'config');
settings.templatePath = path.join(settings.root, 'templates');
settings.sprintTemplatePath = path.join(settings.root, 'templates' + path.sep + settings.template);
settings.homeTemplatePath = path.join(settings.root, 'templates' + path.sep + settings.home_template);

if (process.env.PORT) settings.port = process.env.PORT;

// if export path does not exist, create it
if (!fs.existsSync(settings.exportPath)) {
	fs.mkdirSync(settings.exportPath);
}

// if config path does not exist, create it
if (!fs.existsSync(settings.configPath)) {
	fs.mkdirSync(settings.configPath);
}

console.log('\n\x1b[33m%s\x1b[0m', 'Starting server...\nAvailable on:')
console.log('  http://localhost:\x1b[32m8008');
console.log('\x1b[31mHit CTRL-C to stop the server');

var server = require('./lib/server');
require('http').createServer(server).listen(settings.port);
