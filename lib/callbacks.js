function postToSlack (post) {
	text_to_post = post.title + ":\n   " + post.url + "\n posted by "+post.author;
	slack.send({
		channel: '#songs',
		icon_emoji: ":squirrel:",
		text: text_to_post,
		username: 'MvsicBox-Bot'
	});
  return post;
}

Telescope.callbacks.add("postSubmitAsync", postToSlack);