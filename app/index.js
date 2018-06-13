/**
 * Main JS file for project.
 */

// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';
// Using own version of jQuery
const $ = require('jquery');

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Setup utils function
//utilsFn({});

// Main app
let $app = $('.strib.strib-styles.strib-styles-specifically');

//slide function
$(document).ready(function() {
  $app.find('.cand').click(function() {
    var parent = $(this)
    
    if (!parent.hasClass("open")){
      parent.addClass("open");
      parent.find('.expand').slideDown(500, function() {
      parent.find('.more').hide();
      parent.find('.less').show();
    });
  } else {
      parent.find('.expand').slideUp(500, function() {
      parent.find('.less').hide();
      parent.find('.more').show();
      parent.removeClass("open");
  });
}

});
});
