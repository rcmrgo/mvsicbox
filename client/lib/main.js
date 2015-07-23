/*global jQuery:true, playerjs:true */

(function($, document, window){
  players = [],
    count = 0,
    isReady = false;

  start = function(){
    var index = 0;

    var multi = new $Player(players);

    // Set the callout.
    multi.on('active', function(index){
      $('.post-content').removeClass('callout').eq(index).addClass('callout');
    });

    // Go to a track by clicking on it.
    $('.post-content').on('click', function(){
      if (!isReady){
        return false;
      }
      var index = $('.post-content').index(this);
      multi.play(index);
      return false;
    });

    isReady = true;
  };
})(jQuery, document, window);

