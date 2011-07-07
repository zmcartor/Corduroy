#
#Provides Functions for loading Controllers and Models
#other core helper stuff
#load model into a controller

mule = require('../controllers/mule')

#build a list of controllers to load.
#export function that will load all controllers

controller_list = []

grab_controllers = ->
	#read various configuration variables here
	controller_list.push mule.controller	

register_controller = (controller, app) ->
	for own key of controller
		do (key) ->	
			console.log("looking at key")
			console.log key
			#add logic for Express middleware
			if controller[key].method? and controller[key].route? and controller[key].callback?
			#put some logic here for multiple http verbs
				console.log 'enabling functionality'
				verb = controller[key].method
				route = controller[key].route
				callback = controller[key].callback
				app[verb] route , callback 
			else
				console.log 'nope, not a nugget'

module.exports.register_controllers = (app) ->
	grab_controllers()
	console.log 'helloo'
	console.log controller_list
	register_controller controller , app for controller in controller_list


'''
module.exports.register = function(app){
					for (key in module.exports.controller){
						thing = module.exports.controller[key]
						console.log(thing)
						http_way = thing.method
						route = thing.route
						if(http_way == 'get'){
							console.log('cool') 
							app.get(route , thing.exe)
						}
						console.log("attempting to bind"+ route)
					}
					}
'''


