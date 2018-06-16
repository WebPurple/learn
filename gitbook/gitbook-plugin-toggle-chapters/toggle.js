require(["gitbook", "jQuery"], function(gitbook, $) {

  function expand(chapter) {
    chapter.show();
    if (chapter.parent().attr('class') != 'summary'
        && chapter.parent().attr('class') != 'book-summary'
      && chapter.length != 0
       ) {
         chapter.children('a').first().addClass('chapter-top--open');
         expand(chapter.parent());
       }
  }

  gitbook.events.bind("page.change", function() {
    $('li.chapter').children('ul.articles').hide();
    $('li.chapter').has('ul.articles').each(function(item) {
      $(this).children('a').first().addClass('chapter-top');
    })

    $chapter = $('li.chapter.active');
    $children = $chapter.children('ul.articles');
    $parent = $chapter.parent();
    $siblings = $chapter.siblings().children('ul.articles');

    expand($chapter);

    if ($children.length > 0) {
      $children.show();
    }
  });

});
