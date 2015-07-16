Posts.fastRenderRoutes = [
  {
  	path: "/",
  	view: Settings.get('defaultView', 'daily')
  },
  {
  	path: "/daily/:limit?",
  	view: "daily"
  },
  {
  	path: "/best/:limit?",
  	view: "best"
  },
];

Posts.fastRenderSubscribe = function (view, params) {
  var subscriptionTerms = {
  	view: view,
  	limit: params.limit || Settings.get('postsPerPage', 10)
  };
  console.log('/// fastrender ///');
  console.log(subscriptionTerms);
  this.subscribe('postsList', subscriptionTerms);
  this.subscribe('postsListUsers', subscriptionTerms);
  console.log('//////////////////');
};

Meteor.startup(function () {
  Posts.fastRenderRoutes.forEach(function(route) {
  	FastRender.route(route.path, _.partial(Posts.fastRenderSubscribe, route.view));
  });
});