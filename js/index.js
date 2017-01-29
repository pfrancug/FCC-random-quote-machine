var quotes = [{
	quote: "One good thing about music, when it hits you, you feel no pain.",
	author: "Bob Marley",
}, {
	quote: "Think As You Like But Behave Like Others.",
	author: "Robert Greene",
}, {
	quote: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
	author: "Winston Churchill",
}, {
	quote: "Don't believe everything you read on the Internet.",
	author: "Abraham Lincoln",
}, {
	quote: "The Internet is so big, so powerful and pointless that for some people it is a complete substitute for life.",
	author: "Andrew Brown",
}];
var lastNum = -1;

function roll() {
	randomNum = Math.floor(Math.random() * (quotes.length - 0)) + 0;
	if (randomNum == lastNum) {
		roll();
	} else {
		$('.quote').text(quotes[randomNum].quote);
		$('.author').text('~ ' + quotes[randomNum].author);
		$('.tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + quotes[randomNum].quote + ' - ' + quotes[randomNum].author);
		lastNum = randomNum;
		red = (Math.floor(Math.random() * 150) + 50);
		green = (Math.floor(Math.random() * 150) + 50);
		blue = (Math.floor(Math.random() * 150) + 50);
		rgb = "rgb(" + red + "," + green + "," + blue + ")";
		$("body, .button").css({
			"background": rgb
		});
		$(".quote-box, .author").css({
			"color": rgb
		});
	}
};
$(document).ready(function() {
	roll();
})
$('.btn-roll').click(function() {
	roll();
})