/**
 * @file
 * JavaScript for sidebar.
 */

(function ($, Drupal, drupalSettings) {
  "use strict";

  /**
   * Attaches the batch behavior for sidebar.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.SbAdminFront = {
    attach: function (context, settings) {

      // Scroll to anchor section using jQuery easing
      $(document).on('click', 'a.internal', function(e) {
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000);
      });

    }
  };
})(jQuery, Drupal, drupalSettings);
