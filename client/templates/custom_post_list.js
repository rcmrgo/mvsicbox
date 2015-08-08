/* Template.posts_list.onRendered(function () {
  var onReady = function(){
    count++;
    if (count === 3){
      start();
    }
  };
  // grab the iframes and create players from them.
  $('.post iframe').each(function(i, e){
    var player = new playerjs.Player(e);
    players.push(player);
    player.on('ready', function(){
      player.unmute();
      onReady();
    });
  });
});

Template.posts_list.helpers({
  postsCursor : function () {
    if (this.postsCursor) { // not sure why this should ever be undefined, but it can apparently
      var posts = this.postsCursor.map(function (post, index) {
        post.rank = index;
        return post;
      });
      return posts;
    } else {
      console.log('postsCursor not defined');
    }
  }
}); */

Template.posts_list.onRendered(function () {
  //this.findAll('.post iframe');
  $('.post iframe').each(function(i, e){
      var player = new playerjs.Player(e);
      players.push(player);
      player.on('ready', function(){
        player.unmute();
        //onReady();
      });
    });
  start();
  console.log('list rendered');
});