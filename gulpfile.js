'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
      const jsRules = generatedConfiguration.module.rules.find(r => r.test && r.test.toString().indexOf('.js$') > 0);
      // Ignore errors from adaptivecards includes lib https://github.com/Microsoft/AdaptiveCards/issues/1492
      jsRules.exclude = /adaptivecards\\lib/
      return generatedConfiguration;
    }
  });

build.initialize(gulp);
