const OSinfo = require('./OSinfo'),
	EventEmitter = require('events').EventEmitter;
	
const emmiter = new EventEmitter();
emmiter.on('beforeCommand', function(instruction) {
	console.log(`You wrote: ${instructions} trying to run command.`);
});
emmiter.on('afterCommand', function() {
	console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
	const input = process.stdin.read();
	if (input !== null) {
		const instruction = input.toString().trim();
		emmiter.emit('beforeCommand', instruction);
		switch(instruction) {
		 	case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
		 		break;
		 	case '/info' :
			 	console.log(`Language: ${process.env.LANGUAGE}`);
			 	console.log(`Node version: ${process.versions.node}`);
			 	break;
			case '/getOSinfo' :
				OSinfo.print();
				break;
		 	default:
				process.stderr.write('Wrong instruction\n');
		}
		emmiter.emit('afterCommand');
	}
});