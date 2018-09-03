require(["gitbook", "jQuery"], function(gitbook, $) {
  gitbook.events.bind("page.change", function() {
    $('div.integrate-slides__container').each(function(slide) {
      var width = $(this).width();
      var height = width / 4 * 2.5;
      $(this).height(height);
    });
  });
});
