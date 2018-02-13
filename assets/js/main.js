(function() {
  document.addEventListener('DOMContentLoaded', function() {

    var ELEMENTS = ['nw', 'ne', 'sw', 'se'];

    var _isIATurn = true;

    var _nw = document.getElementById(ELEMENTS[0]);
    var _ne = document.getElementById(ELEMENTS[1]);
    var _sw = document.getElementById(ELEMENTS[2]);
    var _se = document.getElementById(ELEMENTS[3]);
    var _center = document.getElementById('center');

    _init();


    function _init() {

      //Set up listeners

      //On window resize
      window.addEventListener('resize', _setElementSize);

      _nw.addEventListener('mousedown', _handleMouseDown);
      _ne.addEventListener('mousedown', _handleMouseDown);
      _sw.addEventListener('mousedown', _handleMouseDown);
      _se.addEventListener('mousedown', _handleMouseDown);

      _nw.addEventListener('touchstart', _handleMouseDown);
      _ne.addEventListener('touchstart', _handleMouseDown);
      _sw.addEventListener('touchstart', _handleMouseDown);
      _se.addEventListener('touchstart', _handleMouseDown);

      _nw.addEventListener('mouseup', _handleMouseUp);
      _ne.addEventListener('mouseup', _handleMouseUp);
      _sw.addEventListener('mouseup', _handleMouseUp);
      _se.addEventListener('mouseup', _handleMouseUp);

      _nw.addEventListener('touchend', _handleMouseUp);
      _ne.addEventListener('touchend', _handleMouseUp);
      _sw.addEventListener('touchend', _handleMouseUp);
      _se.addEventListener('touchend', _handleMouseUp);

      //Set element size
      _setElementSize();

      //Start game
      _clockWiseLoops(5, 100).then(function() {
        _isIATurn = false;
      });
    }

    function _handleMouseDown(event) {
      if(_isIATurn) { return; }
      this.classList.add('active');
    }

    function _handleMouseUp(event) {
      if(_isIATurn) { return; }
      this.classList.remove('active');
    }


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


      if(_center != null) {
        _center.style.top = ((window.innerHeight / 2) - 50) + 'px';
        _center.style.left = ((window.innerWidth / 2) - 50) + 'px';
        _center.style.width = 100 + 'px';
        _center.style.height = 100 + 'px';
      }
    }

    function _clockWiseLoops(loops, time) {

      if(loops == null) { loops = 1;}

      var $q = Promise.resolve();

      for(var i = 0; i < loops; i++) {
        $q = $q.then(function() { return _displayElements(['nw', 'ne', 'se', 'sw'], time); });
      }

      return $q;
    }

    function _displayElements(elements, time) {
      var $$q = Promise.resolve();

      elements.forEach(function(x) {
        $$q = $$q.then(function() { return _displayElement(x, time); });
      });

      return $$q;
    }

    function _displayElement(elementName, time) {
      _elementByName(elementName).classList.add('active');

      if(!time) { time = 500;}

      return new Promise(function(resolve, reject) {
        setTimeout(function(){
          _elementByName(elementName).classList.remove('active');
          resolve();
        }, time);
      });
    }

    function _elementByName(elementName) {
      switch(elementName) {
        case 'nw': return _nw;
        case 'ne': return _ne;
        case 'sw': return _sw;
        case 'se': return _se;
      }
    }
  });
})();