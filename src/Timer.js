/*
 * @author mr.doob / http://mrdoob.com/
 */

var Timer = function ( duration ) {

	var _this = this, _interval,
	_time, _prevtime,
	_delta, _deltatime = 0;

	this.fps = 60;
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

				_this.currentTime -= _this.duration;

			} else {

				_this.ended = true;
				return;

			}

		}

		_this.ended = false;

		_time = Date.now();
		_this.currentTime += ( ( _time - _prevtime ) * _this.playbackRate ) / 1000;
		_prevtime = _time;

	};

	this.getDelta = function () {

		_delta = _time - _deltatime;
		_deltatime = _time;
		return _delta;

	};

	this.play = function () {

		if ( _this.paused ) {

			_prevtime = Date.now();
			_interval = setInterval( _update, 1000 / _this.fps );
			_this.paused = false;

		}

	};

	this.pause = function () {

		_this.paused = true;
		clearInterval( _interval );

	};

};
