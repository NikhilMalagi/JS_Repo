const moment = require('moment');
const simpleGit = require('simple-git');

const FILEPATH = './fundamentals/regex.js';

const DATE = moment().subtract(200,'d').format();


simpleGit().add([FILEPATH]).commit("regex",{'--date':DATE}).push()