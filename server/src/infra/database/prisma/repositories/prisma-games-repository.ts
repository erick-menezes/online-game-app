import { prisma } from "src";
import { Game } from "@app/entities/game";
import { GamesRepository } from "@app/repositories/games-repository";
import { PrismaService } from "../service";

export class PrismaGamesRepository implements GamesRepository {
	constructor(private prisma: PrismaService) {};

	async findAll(): Promise<Game[]> {
		const games = await this.prisma.game.findMany();

		return games;
	}

	async findById(gameId: string): Promise<Game | null> {
		const game = await this.prisma.game.findUnique({
			where: {
				id: gameId,
			}
		});

		if (!game) {
			return null;
		}

		return game;
	}
}

export const prismaGamesRepository = new PrismaGamesRepository(prisma);
