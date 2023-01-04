import { Router } from "express";

import { GetAllGames } from "@app/use-cases/get-games";

import { GamesController } from "@infra/http/controllers/games.controller";

export const route = Router();

const gameProviders: [GetAllGames] = [
	new GetAllGames()
];

const gamesController = new GamesController(...gameProviders);

route.get('/games', gamesController.getAll);
