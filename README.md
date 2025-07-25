<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Response Postman
{
	"info": {
		"_postman_id": "2fef88c2-49be-4cc6-a964-a3fb2715b9e7",
		"name": "Post",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "42747872"
	},
	"item": [
		{
			"name": "api-game",
			"item": [
				{
					"name": "http://localhost:3000/api/games/1",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/games/1",
						"description": "### Get Game Details\n\nThis endpoint retrieves the details of a specific game identified by its unique ID.\n\n#### Request\n\n- **Method**: GET\n    \n- **URL**: `http://localhost:3000/api/games/{id}`\n    \n- **Path Parameter**:\n    \n    - `id` (integer): The unique identifier of the game you want to retrieve. In this example, the ID is `1`.\n        \n\n#### Response\n\nUpon a successful request, the server responds with a JSON object containing the following fields:\n\n- `id` (integer): The unique identifier of the game.\n    \n- `name` (string): The name of the game.\n    \n- `maxPlayers` (integer): The maximum number of players allowed in the game.\n    \n- `players` (array of strings): A list of players currently in the game.\n    \n- `state` (string): The current state of the game (e.g., active, completed).\n    \n- `score` (nullable): The score of the game, if applicable.\n    \n- `createdAt` (string): The timestamp when the game was created.\n    \n- `updatedAt` (string): The timestamp when the game was last updated.\n    \n\n#### Example Response\n\n``` json\n{\n  \"id\": 0,\n  \"name\": \"\",\n  \"maxPlayers\": 0,\n  \"players\": [\"\"],\n  \"state\": \"\",\n  \"score\": null,\n  \"createdAt\": \"\",\n  \"updatedAt\": \"\"\n}\n\n ```\n\nThis structure provides a comprehensive overview of the game's current status and metadata."
					},
					"response": [
						{
							"name": "http://localhost:3000/api/games/1",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": "http://localhost:3000/api/games/1"
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "181"
								},
								{
									"key": "ETag",
									"value": "W/\"b5-tAjBktjVA+Kb0DNuItQERDZLVWc\""
								},
								{
									"key": "Date",
									"value": "Fri, 11 Jul 2025 23:53:31 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"id\": 1,\n    \"name\": \"the best\",\n    \"maxPlayers\": 2,\n    \"players\": [\n        \"shinta\",\n        \"turaxy2\"\n    ],\n    \"state\": \"waiting\",\n    \"score\": null,\n    \"createdAt\": \"2025-07-11T22:25:48.982Z\",\n    \"updatedAt\": \"2025-07-11T23:53:26.514Z\"\n}"
						}
					]
				},
				{
					"name": "http://localhost:3000/api/games/1/join",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"playerName\": \"turaxy2\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/games/1/join",
						"description": "## Join Game Endpoint\n\nThis endpoint allows a player to join an existing game by sending a PATCH request to the specified URL. The game is identified by its unique ID in the URL path.\n\n### Request\n\n- **Method**: PATCH\n    \n- **URL**: `http://localhost:3000/api/games/{gameId}/join`\n    \n    - Replace `{gameId}` with the ID of the game you wish to join.\n        \n\n#### Request Headers\n\n- `Content-Type`: Must be set to `application/json`.\n    \n\n#### Request Body\n\nThe request body must be in JSON format and include the following parameter:\n\n- **playerName** (string): The name of the player who is joining the game.\n    \n\n**Example Request Body:**\n\n``` json\n{\n  \"playerName\": \"turaxy2\"\n}\n\n ```\n\n### Response\n\nUpon a successful request, the server will respond with:\n\n- **Status Code**: 200 OK\n    \n- **Content-Type**: application/json\n    \n\n#### Response Body\n\nThe response will contain a JSON object with the following structure:\n\n- **message** (string): A confirmation message indicating the success of the operation. The message may be empty.\n    \n\n**Example Response:**\n\n``` json\n{\n  \"message\": \"\"\n}\n\n ```\n\n### Summary\n\nThis endpoint is essential for players to join ongoing games, facilitating real-time participation in gaming sessions. Ensure that the player name is provided correctly in the request body for successful execution."
					},
					"response": [
						{
							"name": "http://localhost:3000/api/games/1/join",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"playerName\": \"turaxy2\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": "http://localhost:3000/api/games/1/join"
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "40"
								},
								{
									"key": "ETag",
									"value": "W/\"28-MuO0f4fzGgcHVOLuP9bkzeNMF5c\""
								},
								{
									"key": "Date",
									"value": "Fri, 11 Jul 2025 23:53:26 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Player turaxy2 joined game\"\n}"
						}
					]
				},
				{
					"name": "http://localhost:3000/api/games/1/start",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "PATCH",
						"header": [],
						"url": "http://localhost:3000/api/games/1/start",
						"description": "\n# PATCH /api/games/{id}/start\n\nThis endpoint is used to start a specific game identified by its unique ID. The request modifies the current state of the game, transitioning it to an active status.\n\n## Request Parameters\n\n- **Path Parameter:**\n  - `id` (required): The unique identifier of the game you wish to start. In this example, the ID is `1`.\n\n## Response Structure\n\nOn a successful request, the server responds with a status code of `200` and a JSON object containing a message. The response structure is as follows:\n\n```json\n{\n  \"message\": \"\"\n}\n```\n\nThe message field may be used to convey additional information in the future, but currently, it is an empty string.\n\n## Expected Behavior\n\nWhen the request is successful, the game state will be updated to indicate that the game has started. If the game is already active or the ID does not correspond to an existing game, appropriate error handling should be implemented.\n"
					},
					"response": [
						{
							"name": "http://localhost:3000/api/games/1/start",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"url": "http://localhost:3000/api/games/1/start"
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "35"
								},
								{
									"key": "ETag",
									"value": "W/\"23-KGnzVjua5c5X03I5b1OK7anKvEY\""
								},
								{
									"key": "Date",
									"value": "Sat, 12 Jul 2025 01:45:20 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Game the best started\"\n}"
						}
					]
				},
				{
					"name": "http://localhost:3000/api/games/1/end",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"score\":{\r\n        \"shinta\":8,\r\n        \"turaxy2\":5\r\n    }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/games/1/end",
						"description": "\n## PATCH /api/games/{id}/end\n\nThis endpoint is used to update the score of a specific game identified by its unique ID. The request modifies the game's state by submitting the final scores for the players involved.\n\n### Request Body\nThe request requires a JSON payload with the following structure:\n\n```json\n{\n  \"score\": {\n    \"player1\": <integer>,\n    \"player2\": <integer>\n  }\n}\n```\n\n- **score**: An object containing the scores for each player.\n  - **player1**: (integer) The score for the first player.\n  - **player2**: (integer) The score for the second player.\n\n### Response\nUpon a successful request, the API will return a response with the following characteristics:\n\n- **Status**: 200 OK\n- **Content-Type**: application/json\n- **Body**: \n```json\n{\n  \"message\": \"\"\n}\n```\n\nThe response indicates that the operation was successful, though no additional message is provided.\n\n### Notes\n- Ensure that the game ID in the URL is valid and corresponds to an existing game.\n- The scores must be non-negative integers.\n- This endpoint is intended for finalizing the game scores, and subsequent updates may not be allowed.\n"
					},
					"response": [
						{
							"name": "http://localhost:3000/api/games/1/end",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"score\":{\r\n        \"shinta\":8,\r\n        \"turaxy2\":5\r\n    }\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": "http://localhost:3000/api/games/1/end"
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "33"
								},
								{
									"key": "ETag",
									"value": "W/\"21-vrqtC5sQWCBYAiMmbfacysotkW8\""
								},
								{
									"key": "Date",
									"value": "Sat, 12 Jul 2025 01:59:10 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Game the best ended\"\n}"
						}
					]
				}
			],
			"description": "api-game"
		}
	]
}

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
#   g a m e - a p i 
 
 
