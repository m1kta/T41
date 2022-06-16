var _isp_related_version = "2022.04.27am1", _isp_min_on = true, _isp_host_prefix = null, _isp_api_prefix = null;

try	{
	var _isp_min_on_host = localStorage.getItem('_isp_min_on_host');	
	if (_isp_min_on_host != null && _isp_min_on_host=='1')	{	_isp_min_on = false;	}
}	catch (e) {}	

try {
	_isp_host_prefix = localStorage.getItem('_isp_host_prefix');
	if (_isp_host_prefix.match(/^[a-z0-9-]+$/)) {
		_isp_min_on = false;
		_isp_api_prefix = localStorage.getItem('_isp_api_prefix');
		if (_isp_api_prefix && !_isp_api_prefix.match(/^[a-z0-9-]+$/)) {
            _isp_api_prefix = null;
        }
	} else {
		_isp_host_prefix = null;
		_isp_api_prefix = null;
	}
	_isp_force_version = localStorage.getItem('_isp_force_version');
} catch (e) {}

var _isp_js_load, _isp_js_load_https, _isp_api_url;
_isp_js_load 		= "https://cdn1-gae-ssl-default.akamaized.net";
_isp_js_load_https  = "https://cdn1-gae-ssl-default.akamaized.net"; // "https://instantsearchplus.global.ssl.fastly.net"
if (_isp_host_prefix) {
	console.info('%cWARNING: InstantSearch+ host: ' + _isp_host_prefix, 'font-weight: bold; color: #F00');
	_isp_js_load_https = _isp_host_prefix === 'localhost' ? 'https://localhost' :
														  'https://' + _isp_host_prefix + '-dot-acp-magento.appspot.com';
	_isp_js_load = _isp_js_load_https;
	if (!_isp_force_version) {
		_isp_related_version += "." + ((new Date).getTime()/1000).toString();
	}
	if (_isp_api_prefix) {
		console.info('%cWARNING: InstantSearch+ API: ' + _isp_api_prefix, 'font-weight: bold; color: #F00');
		_isp_api_url = _isp_api_prefix == 'localhost' ? 'https://localhost' :
														'https://' + _isp_api_prefix + '-dot-acp-magento.appspot.com';
	} else {
		_isp_api_url = null;
	}
}

var _isp_related_filename = "/js/isp_related.v.2.0.1.";
if (_isp_min_on) { _isp_related_filename += 'min.';	}
_isp_related_filename += "js?v=" + _isp_related_version;
var _isp_related_final_filename = _isp_js_load + _isp_related_filename;
if ("https:" == window.location.protocol) { _isp_related_final_filename = _isp_js_load_https + _isp_related_filename; }
if (typeof InstantClick !== 'undefined') { InstantClick.on('change', function() { __isp_related_products_injected = undefined; }) }

if (typeof __isp_related_products_injected === 'undefined') {
	var __isp_related_products_injected = true;
	var _isp_b = document.createElement("script");
	_isp_b.type = "text/javascript";
	_isp_b.src = _isp_related_final_filename;
	_isp_b.async = !0;	
	if (typeof requirejs === 'function') {
		requirejs(["jquery", "jquery/ui"], function($) {
			$(document).ready(function() {	
				setTimeout(function() {
					var _isp_a = document.getElementsByTagName("script")[0];
					_isp_a.parentNode.insertBefore(_isp_b, _isp_a);
				}, 3333);
			});
		});
	} else {
		var _isp_a = document.getElementsByTagName("script")[0];
		_isp_a.parentNode.insertBefore(_isp_b, _isp_a);
	}
} else if (doesExistEmptyContentWidget() && typeof do_init_related !== 'undefined' && typeof do_init_related2 !== 'undefined') {
	do_init_related();
	do_init_related2();
}

/**
 * Checks if one of recommendations widgets' content is empty.
 * @return {boolean}
 */
function doesExistEmptyContentWidget() {
	for (var i = 1; i <= 4; i++) {
		var widgetElem = document.getElementById('isp-related-widget-' + i);

		if (widgetElem === null) {
			continue;
		}

		var widgetContentLength = widgetElem.querySelectorAll('.isp_related_wrapper').length;

		if (widgetContentLength === 0) {
			return true;
		}
	}

	return false;
}
