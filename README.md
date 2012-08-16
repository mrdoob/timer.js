timer.js
========

#### JavaScript timer replacement for audio ####

### Usage ###

```html
<script src="Timer.js"></script>
<script>

	/*
	var audio = document.createElement( 'audio' );
	audio.src = '40_seconds_long_song.ogg';
	audio.play();
	*/

	var timer = new Timer( 40 );
	timer.play();

	animate();

	function animate() {

		requestAnimationFrame( animate );

		// object.position.x = audio.currentTime;
		object.position.x = timer.currentTime;

	}

</script>
```
