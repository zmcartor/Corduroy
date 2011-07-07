corduroy = require("./core_lib/core_controller")

module.exports.controller = class Mule extends corduroy.core_controller

	@whoa = 
		method: "get"
		route: "/whoa/:id"
		callback: (req, res) ->
			res.render 'index', title: 'yoyos!'
