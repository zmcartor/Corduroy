#Controller parent class
#

module.exports.core_controller = class CorduroyController
	
	@name = "Core Corduroy Controller"

	#gathers up all the defined callback functions that have
	#properties exe, route, and callback
	query: ->
		meths = []
		for own key of this
			do (key) ->
				if this.method? and this.route? and this.callback?
					meths.push key
		return meths
