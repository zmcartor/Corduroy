(function() {
  var Mule, corduroy;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  corduroy = require("../core_lib/core_controller");
  module.exports.controller = Mule = (function() {
    __extends(Mule, corduroy.core_controller);
    function Mule() {
      Mule.__super__.constructor.apply(this, arguments);
    }
    Mule.whoa = {
      method: "get",
      route: "/whoa/:id",
      callback: function(req, res) {
        return res.render('index', {
          title: 'yoyos!'
        });
      }
    };
    return Mule;
  })();
}).call(this);
