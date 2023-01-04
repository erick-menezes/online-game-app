import express, { json } from 'express';
import { route } from './routes';
import cors from 'cors';

import { PrismaService } from '@infra/database/prisma/service';

const server = express();

server.use(json);
server.use(cors);
server.use(route);

export const prisma = new PrismaService();

prisma.$connect().then(() => {
	server.listen(process.env.SERVER_PORT, () => {
		console.log(`Server running on port ${process.env.SERVER_PORT}!`);
	});
}).catch(error => console.log('Error on running server:', error));

process.on('beforeExit', () => {
	console.log('Disconnecting from database...');

	prisma.$disconnect();

	console.log('Disconnected from database.');

	process.exit();
})
