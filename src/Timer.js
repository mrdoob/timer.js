/*
 * @author mr.doob / http://mrdoob.com/
 */

var Timer = function ( duration ) {

	var _this = this, _time, _prevtime, _interval;

	this.currentDelta = 0;
	this.currentTime = 0;
	this.duration = duration || Infinity;
	this.paused = true;
	this.defaultPlaybackRate = 1;
	this.playbackRate = 1;
	this.loop = false;
	this.ended = false;

	var _update = function () {

		if ( _this.currentTime >= _this.duration ) {

			if ( _this.loop ) {

				_this.currentDelta = - _this.duration;
				_this.currentTime += _this.currentDelta;

			} else {

				_this.currentDelta = 0;
				_this.ended = true;
				return;

			}

		}

		_this.ended = false;

		_time = Date.now();
		_this.currentDelta = ( ( _time - _prevtime ) * _this.playbackRate ) / 1000;
		_this.currentTime += _this.currentDelta;
		_prevtime = _time;

	};

	this.play = function () {

		_prevtime = Date.now();
		_interval = setInterval( _update, 1000 / 60 );
		_this.paused = false;

	};

	this.pause = function () {

		_this.currentDelta = 0;
		_this.paused = true;
		clearInterval( _interval );

	};

};
