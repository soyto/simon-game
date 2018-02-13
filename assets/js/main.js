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

      _nw.style.top = 0;
      _nw.style.left = 0;
      _nw.style.width = Math.floor(_size / 2) + 'px';
      _nw.style.height = Math.floor(_size / 2) + 'px';

      _ne.style.top = 0;
      _ne.style.left = Math.floor(_size / 2) + 'px';
      _ne.style.width = Math.floor(_size / 2) + 'px';
      _ne.style.height = Math.floor(_size / 2) + 'px';

      _sw.style.top = Math.floor(_size / 2) + 'px';
      _sw.style.left = 0;
      _sw.style.width = Math.floor(_size / 2) + 'px';
      _sw.style.height = Math.floor(_size / 2) + 'px';

      _se.style.top = Math.floor(_size / 2) + 'px';
      _se.style.left = Math.floor(_size / 2) + 'px';
      _se.style.width = Math.floor(_size / 2) + 'px';
      _se.style.height = Math.floor(_size / 2) + 'px';

      _center.style.top = Math.floor(_size / 2) - 75 + 'px';
      _center.style.left = Math.floor(_size / 2) - 75 + 'px';
      _center.style.width = 150 + 'px';
      _center.style.height = 150 + 'px';

    }

  });
})();