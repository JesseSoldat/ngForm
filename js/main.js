import angular from 'angular';
import 'angular-ui-router';


import config from './config';

import FormController from './controllers/form.controller';

import PARSE from './constants/parse.constant';

import FormService from  './services/form.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)

  .controller('FormController', FormController)

  .service('FormService', FormService)

 ; 