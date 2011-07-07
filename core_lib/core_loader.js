(function() {
  var controller_list, grab_controllers, mule, register_controller;
  var __hasProp = Object.prototype.hasOwnProperty;
  mule = require('../controllers/mule');
  controller_list = [];
  grab_controllers = function() {
    return controller_list.push(mule.controller);
  };
  register_controller = function(controller, app) {
    var key, _results;
    _results = [];
    for (key in controller) {
      if (!__hasProp.call(controller, key)) continue;
      _results.push((function(key) {
        var callback, route, verb;
        console.log("looking at key");
        console.log(key);
        if ((controller[key].method != null) && (controller[key].route != null) && (controller[key].callback != null)) {
          console.log('enabling functionality');
          verb = controller[key].method;
          route = controller[key].route;
          callback = controller[key].callback;
          return app[verb](route, callback);
        } else {
          return console.log('nope, not a nugget');
        }
      })(key));
    }
    return _results;
  };
  module.exports.register_controllers = function(app) {
    var controller, _i, _len, _results;
    grab_controllers();
    console.log('helloo');
    console.log(controller_list);
    _results = [];
    for (_i = 0, _len = controller_list.length; _i < _len; _i++) {
      controller = controller_list[_i];
      _results.push(register_controller(controller, app));
    }
    return _results;
  };
  'module.exports.register = function(app){\n					for (key in module.exports.controller){\n						thing = module.exports.controller[key]\n						console.log(thing)\n						http_way = thing.method\n						route = thing.route\n						if(http_way == \'get\'){\n							console.log(\'cool\') \n							app.get(route , thing.exe)\n						}\n						console.log("attempting to bind"+ route)\n					}\n					}';
}).call(this);
