const os = require('os');

function upTime() {
	const uptime = os.uptime(),
		date = new Date(uptime * 1000);
	const hour = date.getUTCHours() ? date.getUTCHours() + 'godz. ' : '',
		minutes = date.getUTCMinutes() ? date.getUTCMinutes() + 'min. ' : '',
		seconds = date.getUTCSeconds() + 'sec.';
	return hour + minutes + seconds;
}

exports.print = upTime;