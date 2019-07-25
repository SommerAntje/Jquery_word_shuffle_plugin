/***
version:  1.0
date:15.08.2013
author: Antje Sommer
title: word_shuffle_plugin
***/
(function($){
	"use strict"
	$.fn.wordShuffle = function(options){
		var settings = {
			init: 0,
		};
		var option = $.extend(settings, options);
		return this.each(function(){
			// create li items
			$('<li>JavaScript</li><li>Jquery</li><li>HTML</li><li>CSS</li>').appendTo('#shuffle');
			
			var $main = $(this),
			// define single li item
				$child = $main.find('li'),
			// length of li items
				$childLength = $child.length,
			// index to choose the word you want to start with
			    currentWord = option.init;

			    $child.not(currentWord).hide();
			 	$child.eq(currentWord).show();
 
			// create the loop
			var wordInterval = function(){
				currentWord++;
				if(currentWord == $childLength ){
				  currentWord = 0;
				} 
				$child.not(currentWord).fadeOut(900);
				$child.eq(currentWord).fadeIn(1000);
			};
			// set the interval the loop should run with
			var wordShuffleInterval = setInterval(function(){
				wordInterval();   
				
			},4000);
			// stop the interval
			//clearInterval(wordShuffleInterval);
		});
	};
})(jQuery);