import { Game } from "../entities/game";

export abstract class GamesRepository {
    abstract findAll(): Promise<Game[]>;
    abstract findById(gameId: string): Promise<Game | null>;
}
