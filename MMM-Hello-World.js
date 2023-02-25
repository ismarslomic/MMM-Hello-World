// Doc: https://docs.magicmirror.builders/development/core-module-file.html

Module.register('MMM-Hello-World', {
	// Default module config
	defaults: {
		text: 'Hello World!',
	},

	// MM function: this method is called when all modules are loaded and the system is ready to boot up.
	start () {
		Log.debug(`${this.name} is starting`)
		this.loadData()
		this.scheduleUpdate()
		this.updateDom()
	},

	// MM function: loads template
	getTemplate () {
		return 'templates/MMM-Hello-World.njk'
	},

	// MM function: returns template data
	getTemplateData () {
		return {
			text: this.state?.text,
			lastUpdated: new Date(this.state?.lastUpdated).toLocaleString(),
		}
	},

	// MM function: receives socket notifications from node helper
	socketNotificationReceived (notificationIdentifier, payload) {
		if (notificationIdentifier === 'GREETINGS_TEXT_RESPONSE') {
			Log.debug(`${this.name} received a socket notification: '${notificationIdentifier}' with payload: ${JSON.stringify(payload)}`)
			this.state = payload
			this.updateDom()
		} else {
			Log.error(`${this.name} received unknown socket notification: '${notificationIdentifier}'`)
		}
	},

	// Custom function: load data every 10 seconds
	scheduleUpdate () {
		setInterval(() => {
			this.loadData()
		}, 10000) // 10 seconds
	},

	// Custom function: send socker notification to node helper with config from user
	loadData () {
		Log.debug(`${this.name} is loading data`)
		this.sendSocketNotification('GREETINGS_TEXT_REQUEST', this.config)
	},
})
