const http = require('http');

http
	.createServer((request, res) => {
		console.log(request);

		//201 sirve para cuando se ha creado un registro

		//Retornar un archivo de texto
		// res.writeHead(200, { 'Content-Type': 'text/plain' });

		// res.writeHead(200, { 'Content-Type': 'application/json' });

		// Este es el valor de la cabecera 'Content-Disposition'. Aquí estamos indicando que la respuesta debe tratarse como un archivo adjunto descargable, y estamos proporcionando un nombre de archivo sugerido, que en este caso es 'lista.csv'. El navegador utilizará este nombre de archivo sugerido cuando el usuario descargue el archivo.
		res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
		res.writeHead(200, { 'Content-Type': 'application/csv' });

		res.write('id, nombre\n');
		res.write('1, Leonardo\n');
		res.write('2, Mario\n');
		res.write('3, Ana\n');
		res.write('4, Pedro\n');

		// const persona = {
		// 	id: 1,
		// 	nombre: 'Leonardo',
		// };

		// res.write(JSON.stringify(persona));

		// res.write('404 | Page not found');
		res.end();
	})
	.listen(8082);

console.log('Escuchando el puerto', 8082);
