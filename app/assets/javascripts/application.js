// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require popper
//= require bootstrap
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



 $(document).ready(function(){
	  if (window.pluso)if (typeof window.pluso.start == "function") return;
	  if (window.ifpluso==undefined) { window.ifpluso = 1;
	    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
	    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
	    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
	    var h=d[g]('body')[0];
	    h.appendChild(s);}
  });