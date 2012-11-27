Introduction
============

This is the source code of my personal webpage.

Technical details
=================

This webpage is built using:

* Backbone.js
* Require.js
* jQuery

Development server
==================

Due to limitations with AXAX calls and same origin policy, it's necessary to test

$ cd /root/to/RMunozNew
$ python -m SimpleHTTPServer 8000

Now open the webpage: http://localhost:8000

Limitations
===========

The original webpage is hosted in Amazon S3, so that's the reason why the majority of code is not reused. If I could have used a script language, there should not be such repetition of code.

Portfolio crops
===============

At 100% size, take a crop of 422x422 px.
