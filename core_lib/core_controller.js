(function() {
  var CorduroyController;
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports.core_controller = CorduroyController = (function() {
    function CorduroyController() {}
    CorduroyController.name = "Core Corduroy Controller";
    CorduroyController.prototype.query = function() {
      var key, meths, _fn;
      meths = [];
      _fn = function(key) {
        if ((this.method != null) && (this.route != null) && (this.callback != null)) {
          return meths.push(key);
        }
      };
      for (key in this) {
        if (!__hasProp.call(this, key)) continue;
        _fn(key);
      }
      return meths;
    };
    return CorduroyController;
  })();
}).call(this);
