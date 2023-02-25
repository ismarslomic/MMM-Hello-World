// Doc: https://docs.magicmirror.builders/development/node-helper.html#available-module-instance-properties

const NodeHelper = require('node_helper')
const Log = require('logger')

// MM function: this method is called when all node helpers are loaded and the system is ready to boot up
const start = function () {
	Log.debug(`${this.name} is started!`)
}

// MM function: this method is called when the MagicMirror server receives a SIGINT command and is shutting down
const stop = function () {
	Log.debug(`Shutting down ${this.name}!`)
}

// MM function: with this method, your node helper can receive notifications from your modules
const socketNotificationReceived = function (notification, config) {
	if (notification === 'GREETINGS_TEXT_REQUEST') {
		Log.debug(`${this.name} received a socket notification: '${notification}' with config: ${JSON.stringify(config)}`)
		const payload = {
			text: `${this.name} says: ${config.text}`,
			lastUpdated: Date.now(),
		}
		this.sendSocketNotification('GREETINGS_TEXT_RESPONSE', payload)
	} else {
		Log.error(`${this.name} received unknown socket notification: '${notification}'`)
	}
}

module.exports = NodeHelper.create({
	start,
	stop,
	socketNotificationReceived,
})
