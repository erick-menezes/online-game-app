import { prismaGamesRepository } from "@infra/database/prisma/repositories/prisma-games-repository";
import { Game } from "../entities/game";
import { GamesRepository } from "../repositories/games-repository";

export class GetAllGames {
	private gamesRepository: GamesRepository;

    constructor(_gamesRepository?: GamesRepository) {
		this.gamesRepository = _gamesRepository ?? prismaGamesRepository;
	};

    async execute(): Promise<Game[]> {
        const games = await this.gamesRepository.findAll();

        return games;
    }
}
