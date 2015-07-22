Template.post_domain.helpers({
  postLink: function(){
    return Posts.getLink(this);
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  }
});
