const OSinfo = require('./OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
	const input = process.stdin.read();
	if (input !== null) {
		const instruction = input.toString().trim();
		switch(instruction) {
		 	case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
		 		break;
		 	case '/info' :
				// process.stdout.write(`\nLanguage: ${process.env.LANGUAGE}\nNode version: ${process.versions.node}\n`);
			 	console.log(`Language: ${process.env.LANGUAGE}`);
			 	console.log(`Node version: ${process.versions.node}`);
			 	break;
			case '/getOSinfo' :
				OSinfo.print();
				break;
		 	default:
				process.stderr.write('Wrong instruction\n');
		}
	}
});