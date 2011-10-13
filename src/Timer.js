/*
 * @author mr.doob / http://mrdoob.com/
 */

var Timer = function ( duration ) {

	var that = this, time, prevtime, interval;

	this.currentTime = 0;
	this.duration = duration || NaN;
	this.paused = true;
	this.defaultPlaybackRate = 1;
	this.playbackRate = 1;
	this.loop = false;
	this.ended = false;

	var update = function () {

		if ( that.currentTime >= that.duration ) {

			if ( that.loop ) {

				that.currentTime -= that.duration;

			} else {

				that.ended = true;
				return;

			}

		}

		this.ended = false;

		time = new Date().getTime();
		that.currentTime += ( ( time - prevtime ) * that.playbackRate ) / 1000;
		prevtime = time;

	};

	this.play = function () {

		prevtime = new Date().getTime();
		interval = setInterval( update, 1000 / 60 );
		that.paused = false;

	};

	this.pause = function () {

		clearInterval( interval );
		that.paused = true;

	};

};
