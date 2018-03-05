const os = require('os'),
	upTime = require('./upTime'),
	colors = require('colors');

function getOSinfo() {
	let type = os.type();
	const release = os.release(),
		cpu = os.cpus()[0].model,
		userInfo = os.userInfo();
	type = type === 'Darwin' ? 'OSX' : type === 'Windows-NT' ? 'Windows' : type;
	console.log('System: '.grey, type);
	console.log('Release: '.red, release);
	console.log('CPU model: '.blue, cpu);
	console.log(`Uptime: ~`.green, upTime.print());
	console.log('User name: '.yellow, userInfo.username);
	console.log('Home dir: '.gray, userInfo.homedir);
}

exports.print = getOSinfo;


