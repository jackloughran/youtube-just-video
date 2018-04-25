var config = { attributes: true, childList: true }

var fixPage = function() {
	related = document.getElementById('related')
	if (related) {
		related.remove()
	}

	comments = document.getElementById('comments')
	if (comments) {
		comments.remove()
	}

	document.getElementsByTagName('ytd-video-secondary-info-renderer')[0].style = 'border-bottom: 0'
	document.getElementsByClassName('more-button')[0].click()

	watchElements = document.getElementsByClassName('ytd-watch')
	for (var element of watchElements) {
		if (element.id === 'player') {
			element.style = 'margin: auto'
		}
	}

	document.getElementById('info').style = 'margin: auto'
	document.getElementById('meta').style = 'margin: auto'
}

var callback = function(mutationsList) {
	for (var mutation of mutationsList) {
		fixPage()
	}
}

var observer = new MutationObserver(callback)

observer.observe(document.body, config)

fixPage()

window.onload = fixPage
