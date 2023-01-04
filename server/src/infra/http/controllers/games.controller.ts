import { GetAllGames } from "@app/use-cases/get-games";

export class GamesController {
    constructor(
        private getAllGames: GetAllGames
    ) {};

    public async getAll() {
        const games = await this.getAllGames.execute();

        return { games };
    };
}
