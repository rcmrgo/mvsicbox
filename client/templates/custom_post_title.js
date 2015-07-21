Template.post_title.helpers({
  postPageLink: function(){
    return Posts.getPageUrl(this);
  }
});
