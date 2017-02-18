'use strict';

var validate = (function (paths) {
  return (path) => paths.indexOf(path.replace('resources/', '')) !== -1;
})([
  'angularjs/1.0.1/angular.min.js.dec',
  'angularjs/1.0.2/angular.min.js.dec',
  'angularjs/1.0.3/angular.min.js.dec',
  'angularjs/1.0.4/angular.min.js.dec',
  'angularjs/1.0.5/angular.min.js.dec',
  'angularjs/1.0.6/angular.min.js.dec',
  'angularjs/1.0.8/angular.min.js.dec',
  'angularjs/1.2.0/angular.min.js.dec',
  'angularjs/1.2.1/angular.min.js.dec',
  'angularjs/1.2.10/angular.min.js.dec',
  'angularjs/1.2.15/angular.min.js.dec',
  'angularjs/1.2.16/angular.min.js.dec',
  'angularjs/1.2.20/angular.min.js.dec',
  'angularjs/1.2.23/angular.min.js.dec',
  'angularjs/1.2.26/angular.min.js.dec',
  'angularjs/1.2.28/angular.min.js.dec',
  'angularjs/1.2.29/angular.min.js.dec',
  'angularjs/1.3.0/angular.min.js.dec',
  'angularjs/1.3.9/angular.min.js.dec',
  'angularjs/1.3.10/angular.min.js.dec',
  'angularjs/1.3.11/angular.min.js.dec',
  'angularjs/1.3.13/angular.min.js.dec',
  'angularjs/1.3.14/angular.min.js.dec',
  'angularjs/1.3.15/angular.min.js.dec',
  'angularjs/1.3.3/angular.min.js.dec',
  'angularjs/1.3.8/angular.min.js.dec',
  'angularjs/1.4.0/angular.min.js.dec',
  'angularjs/1.4.2/angular.min.js.dec',
  'angularjs/1.4.8/angular.min.js.dec',
  'backbone.js/0.9.0/backbone-min.js.dec',
  'backbone.js/0.9.1/backbone-min.js.dec',
  'backbone.js/0.9.10/backbone-min.js.dec',
  'backbone.js/0.9.2/backbone-min.js.dec',
  'backbone.js/0.9.9/backbone-min.js.dec',
  'backbone.js/1.0.0/backbone-min.js.dec',
  'backbone.js/1.1.0/backbone-min.js.dec',
  'backbone.js/1.1.1/backbone-min.js.dec',
  'backbone.js/1.1.2/backbone-min.js.dec',
  'backbone.js/1.2.0/backbone-min.js.dec',
  'backbone.js/1.2.1/backbone-min.js.dec',
  'backbone.js/1.2.2/backbone-min.js.dec',
  'backbone.js/1.2.3/backbone-min.js.dec',
  'backbone.js/1.3.2/backbone-min.js.dec',
  'backbone.js/1.3.3/backbone-min.js.dec',
  'dojo/1.10.4/dojo/dojo.js.dec',
  'dojo/1.4.1/dojo/dojo.js.dec',
  'dojo/1.4.5/dojo/dojo.js.dec',
  'dojo/1.5.0/dojo/dojo.js.dec',
  'dojo/1.6.1/dojo/dojo.js.dec',
  'dojo/1.7.5/dojo/dojo.js.dec',
  'dojo/1.8.3/dojo/dojo.js.dec',
  'dojo/1.8.7/dojo/dojo.js.dec',
  'dojo/1.8.9/dojo/dojo.js.dec',
  'dojo/1.9.1/dojo/dojo.js.dec',
  'dojo/1.9.3/dojo/dojo.js.dec',
  'dojo/1.9.7/dojo/dojo.js.dec',
  'ember.js/1.0.1/ember.min.js.dec',
  'ember.js/1.1.3/ember.min.js.dec',
  'ember.js/1.2.2/ember.min.js.dec',
  'ember.js/1.3.2/ember.min.js.dec',
  'ember.js/1.4.0/ember.min.js.dec',
  'ember.js/1.5.1/ember.min.js.dec',
  'ember.js/2.0.0/ember.min.js.dec',
  'ember.js/2.0.2/ember.min.js.dec',
  'ember.js/2.1.0/ember.min.js.dec',
  'ember.js/2.9.1/ember.min.js.dec',
  'ext-core/3.0.0/ext-core.js.dec',
  'ext-core/3.1.0/ext-core.js.dec',
  'jquery/1.10.0/jquery.min.js.dec',
  'jquery/1.10.1/jquery.min.js.dec',
  'jquery/1.10.2/jquery.min.js.dec',
  'jquery/1.11.0/jquery.min.js.dec',
  'jquery/1.11.1/jquery.min.js.dec',
  'jquery/1.11.2/jquery.min.js.dec',
  'jquery/1.11.3/jquery.min.js.dec',
  'jquery/1.12.0/jquery.min.js.dec',
  'jquery/1.12.1/jquery.min.js.dec',
  'jquery/1.12.2/jquery.min.js.dec',
  'jquery/1.12.3/jquery.min.js.dec',
  'jquery/1.12.4/jquery.min.js.dec',
  'jquery/1.2.3/jquery.min.js.dec',
  'jquery/1.2.6/jquery.min.js.dec',
  'jquery/1.3.0/jquery.min.js.dec',
  'jquery/1.3.1/jquery.min.js.dec',
  'jquery/1.3.2/jquery.min.js.dec',
  'jquery/1.4.0/jquery.min.js.dec',
  'jquery/1.4.1/jquery.min.js.dec',
  'jquery/1.4.2/jquery.min.js.dec',
  'jquery/1.4.3/jquery.min.js.dec',
  'jquery/1.4.4/jquery.min.js.dec',
  'jquery/1.5.0/jquery.min.js.dec',
  'jquery/1.5.1/jquery.min.js.dec',
  'jquery/1.5.2/jquery.min.js.dec',
  'jquery/1.6.0/jquery.min.js.dec',
  'jquery/1.6.1/jquery.min.js.dec',
  'jquery/1.6.2/jquery.min.js.dec',
  'jquery/1.6.3/jquery.min.js.dec',
  'jquery/1.6.4/jquery.min.js.dec',
  'jquery/1.7.0/jquery.min.js.dec',
  'jquery/1.7.1/jquery.min.js.dec',
  'jquery/1.7.2/jquery.min.js.dec',
  'jquery/1.8.0/jquery.min.js.dec',
  'jquery/1.8.1/jquery.min.js.dec',
  'jquery/1.8.2/jquery.min.js.dec',
  'jquery/1.8.3/jquery.min.js.dec',
  'jquery/1.9.0/jquery.min.js.dec',
  'jquery/1.9.1/jquery.min.js.dec',
  'jquery/2.0.0/jquery.min.js.dec',
  'jquery/2.0.1/jquery.min.js.dec',
  'jquery/2.0.2/jquery.min.js.dec',
  'jquery/2.0.3/jquery.min.js.dec',
  'jquery/2.1.0/jquery.min.js.dec',
  'jquery/2.1.1/jquery.min.js.dec',
  'jquery/2.1.3/jquery.min.js.dec',
  'jquery/2.1.4/jquery.min.js.dec',
  'jquery/2.2.3/jquery.min.js.dec',
  'jquery/3.1.1/jquery.min.js.dec',
  'jqueryui/1.10.4/jquery-ui.min.js.dec',
  'jqueryui/1.11.0/jquery-ui.min.js.dec',
  'jqueryui/1.11.1/jquery-ui.min.js.dec',
  'jqueryui/1.11.2/jquery-ui.min.js.dec',
  'jqueryui/1.11.3/jquery-ui.min.js.dec',
  'jqueryui/1.11.4/jquery-ui.min.js.dec',
  'jqueryui/1.12.0/jquery-ui.min.js.dec',
  'jqueryui/1.5.3/jquery-ui.min.js.dec',
  'jqueryui/1.8.24/jquery-ui.min.js.dec',
  'jqueryui/1.9.2/jquery-ui.min.js.dec',
  'modernizr/2.6.2/modernizr.min.js.dec',
  'modernizr/2.7.1/modernizr.min.js.dec',
  'modernizr/2.7.2/modernizr.min.js.dec',
  'modernizr/2.8.2/modernizr.min.js.dec',
  'modernizr/2.8.3/modernizr.min.js.dec',
  'mootools/1.1.1/mootools-yui-compressed.js.dec',
  'mootools/1.1.2/mootools-yui-compressed.js.dec',
  'mootools/1.2.1/mootools-yui-compressed.js.dec',
  'mootools/1.2.3/mootools-yui-compressed.js.dec',
  'mootools/1.2.4/mootools-yui-compressed.js.dec',
  'mootools/1.2.5/mootools-yui-compressed.js.dec',
  'mootools/1.3.0/mootools-yui-compressed.js.dec',
  'mootools/1.3.1/mootools-yui-compressed.js.dec',
  'mootools/1.3.2/mootools-yui-compressed.js.dec',
  'mootools/1.4.1/mootools-yui-compressed.js.dec',
  'mootools/1.4.5/mootools-yui-compressed.js.dec',
  'mootools/1.5.0/mootools-yui-compressed.js.dec',
  'mootools/1.5.1/mootools-yui-compressed.js.dec',
  'prototype/1.6.0.2/prototype.js.dec',
  'prototype/1.6.0.3/prototype.js.dec',
  'prototype/1.6.1.0/prototype.js.dec',
  'prototype/1.7.0.0/prototype.js.dec',
  'prototype/1.7.1.0/prototype.js.dec',
  'prototype/1.7.2.0/prototype.js.dec',
  'prototype/1.7.3.0/prototype.js.dec',
  'scriptaculous/1.8.1/scriptaculous.js.dec',
  'scriptaculous/1.8.2/scriptaculous.js.dec',
  'scriptaculous/1.8.3/scriptaculous.js.dec',
  'scriptaculous/1.9.0/scriptaculous.js.dec',
  'swfobject/2.1/swfobject.js.dec',
  'swfobject/2.2/swfobject.js.dec',
  'underscore.js/1.3.0/underscore-min.js.dec',
  'underscore.js/1.3.1/underscore-min.js.dec',
  'underscore.js/1.3.3/underscore-min.js.dec',
  'underscore.js/1.4.0/underscore-min.js.dec',
  'underscore.js/1.4.1/underscore-min.js.dec',
  'underscore.js/1.4.2/underscore-min.js.dec',
  'underscore.js/1.4.3/underscore-min.js.dec',
  'underscore.js/1.4.4/underscore-min.js.dec',
  'underscore.js/1.5.0/underscore-min.js.dec',
  'underscore.js/1.5.1/underscore-min.js.dec',
  'underscore.js/1.5.2/underscore-min.js.dec',
  'underscore.js/1.6.0/underscore-min.js.dec',
  'underscore.js/1.7.0/underscore-min.js.dec',
  'underscore.js/1.8.0/underscore-min.js.dec',
  'underscore.js/1.8.1/underscore-min.js.dec',
  'underscore.js/1.8.2/underscore-min.js.dec',
  'underscore.js/1.8.3/underscore-min.js.dec',
  'webfont/1.0.0/webfont.js.dec',
  'webfont/1.0.1/webfont.js.dec',
  'webfont/1.0.10/webfont.js.dec',
  'webfont/1.0.11/webfont.js.dec',
  'webfont/1.0.12/webfont.js.dec',
  'webfont/1.0.13/webfont.js.dec',
  'webfont/1.0.14/webfont.js.dec',
  'webfont/1.0.15/webfont.js.dec',
  'webfont/1.0.16/webfont.js.dec',
  'webfont/1.0.17/webfont.js.dec',
  'webfont/1.0.18/webfont.js.dec',
  'webfont/1.0.19/webfont.js.dec',
  'webfont/1.0.2/webfont.js.dec',
  'webfont/1.0.21/webfont.js.dec',
  'webfont/1.0.22/webfont.js.dec',
  'webfont/1.0.23/webfont.js.dec',
  'webfont/1.0.24/webfont.js.dec',
  'webfont/1.0.25/webfont.js.dec',
  'webfont/1.0.26/webfont.js.dec',
  'webfont/1.0.27/webfont.js.dec',
  'webfont/1.0.28/webfont.js.dec',
  'webfont/1.0.29/webfont.js.dec',
  'webfont/1.0.3/webfont.js.dec',
  'webfont/1.0.30/webfont.js.dec',
  'webfont/1.0.31/webfont.js.dec',
  'webfont/1.0.4/webfont.js.dec',
  'webfont/1.0.5/webfont.js.dec',
  'webfont/1.0.6/webfont.js.dec',
  'webfont/1.0.9/webfont.js.dec',
  'webfont/1.1.0/webfont.js.dec',
  'webfont/1.1.1/webfont.js.dec',
  'webfont/1.1.2/webfont.js.dec',
  'webfont/1.3.0/webfont.js.dec',
  'webfont/1.4.10/webfont.js.dec',
  'webfont/1.4.2/webfont.js.dec',
  'webfont/1.4.6/webfont.js.dec',
  'webfont/1.4.7/webfont.js.dec',
  'webfont/1.4.8/webfont.js.dec',
  'webfont/1.5.0/webfont.js.dec',
  'webfont/1.5.10/webfont.js.dec',
  'webfont/1.5.18/webfont.js.dec',
  'webfont/1.5.2/webfont.js.dec',
  'webfont/1.5.3/webfont.js.dec',
  'webfont/1.5.6/webfont.js.dec'
]);
