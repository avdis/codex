(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
url = require('url');
},{"url":2}],2:[function(require,module,exports){


/**
 * urlBase must be defined
 */
var Url = function () {
  if (typeof urlBase === 'undefined') {
    return console.warn('variable urlBase must be defined');
  };
	this.urlBase = urlBase;
};


Url.prototype.getUrlBase = function(append) {
  var append = typeof append === 'undefined' ? '' : append;
	return this.urlBase + append;
};


/**
 * jump to a specified url
 * @param  {string} path combine base and relative
 * @return {null}              
 */
Url.prototype.redirect = function(path) {
	window.location.href = this.getUrlBase(path);
};


/**
 * jump to a specified url
 * @param  {string} path combine base and relative
 * @return {null}              
 */
Url.prototype.redirectAbsolute = function(path) {
	window.location.href = path;
};


module.exports = new Url;

},{}]},{},[1]);
