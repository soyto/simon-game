(function() {
  document.addEventListener('DOMContentLoaded', function() {

    var _nw = document.getElementById('nw');
    var _ne = document.getElementById('ne');
    var _sw = document.getElementById('sw');
    var _se = document.getElementById('se');
    var _center = document.getElementById('center');

    _setElementSize();


    //On window resize
    window.addEventListener('resize', _setElementSize);

    function _setElementSize() {
      var _size = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;

      var _quarterSize = Math.floor(_size / 2);
      var _aspectRatio = window.innerHeight / window.innerWidth;

      _nw.style.top = (_aspectRatio < 1 ? 0 : (window.innerHeight / 2) - _quarterSize) + 'px';
      _nw.style.left = (_aspectRatio < 1 ? (window.innerWidth / 2) - _quarterSize : 0) + 'px';
      _nw.style.width = _quarterSize + 'px';
      _nw.style.height = _quarterSize + 'px';

      _ne.style.top = (_aspectRatio < 1 ? 0 : (window.innerHeight / 2) - _quarterSize) + 'px';
      _ne.style.left = (_aspectRatio < 1 ? window.innerWidth / 2 : _quarterSize) + 'px';
      _ne.style.width = _quarterSize + 'px';
      _ne.style.height = _quarterSize + 'px';

      _sw.style.top = (_aspectRatio < 1 ? _quarterSize : (window.innerHeight / 2)) + 'px';
      _sw.style.left = (_aspectRatio < 1 ? (window.innerWidth / 2) - _quarterSize : 0) + 'px';
      _sw.style.width = _quarterSize + 'px';
      _sw.style.height = _quarterSize + 'px';

      _se.style.top = (_aspectRatio < 1 ? _quarterSize : (window.innerHeight / 2)) + 'px';
      _se.style.left = (_aspectRatio < 1 ? window.innerWidth / 2 : _quarterSize) + 'px';
      _se.style.width = _quarterSize + 'px';
      _se.style.height = _quarterSize + 'px';

      _center.style.top = ((window.innerHeight / 2) - 50) + 'px';
      _center.style.left = ((window.innerWidth / 2) - 50) + 'px';
      _center.style.width = 100 + 'px';
      _center.style.height = 100 + 'px';

    }

  });
})();