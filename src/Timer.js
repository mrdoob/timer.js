/*
 * @author mr.doob / http://mrdoob.com/
 */

var Timer = function ( duration ) {

	var _this = this, _time, _prevtime, _interval;

	this.currentTime = 0;
	this.duration = duration || NaN;
	this.paused = true;
	this.defaultPlaybackRate = 1;
	this.playbackRate = 1;
	this.loop = false;
	this.ended = false;

	var _update = function () {

		if ( _this.currentTime >= _this.duration ) {

			if ( _this.loop ) {

				_this.currentTime -= _this.duration;

			} else {

				_this.ended = true;
				return;

			}

		}

		_this.ended = false;

		_time = new Date().getTime();
		_this.currentTime += ( ( _time - _prevtime ) * _this.playbackRate ) / 1000;
		_prevtime = _time;

	};

	this.play = function () {

		_prevtime = new Date().getTime();
		_interval = setInterval( _update, 1000 / 60 );
		_this.paused = false;

	};

	this.pause = function () {

		clearInterval( _interval );
		_this.paused = true;

	};

};
