define(function() {
  return {
    deviceOrientation: function(callback) {
      var _orientation;
      if (window.innerHeight > window.innerWidth) {
        _orientation = 'portrait';
      } else {
        _orientation = 'landscape';
      }

      // Check device orientation
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
          if ((window.innerHeight > window.innerWidth) &&
            _orientation === 'landscape') {
            _orientation = 'portrait';
            callback();
            return;
          }

          if ((window.innerHeight < window.innerWidth) &&
            _orientation === 'portrait') {
            _orientation = 'landscape';
            callback();
            return;
          }
        }, true);
      }
    }
  };
});
