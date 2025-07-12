import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateGameDto, GameState } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {

  private readonly logger= new Logger('GamesService');
  constructor(
    @InjectModel(Game)
    private gameModel: typeof Game,
  ) {}

  async create(createGameDto: CreateGameDto) {
    const { name, maxPlayers, playerName, state } = createGameDto;
    try {
      const newGame = await this.gameModel.create({
      name: name,
      maxPlayers: maxPlayers,
      players: [playerName],
      state: state || 'waiting',
      score: null,
    });
      return newGame;
    } catch (error) {
      this.handleDBExceptions(error);
    }

  }

  async findOne(id: number) {
    const game = await this.gameModel.findOne({
      where: {
        id: id,
      }

    })
   
    if(!game){
      throw new BadRequestException(`Game with id ${id} not found`);
    }
    return game;
    
  }

  async joinGame(id: number, updateGameDto: UpdateGameDto) {
    const { playerName } = updateGameDto;
    const game = await this.findOne(id);


    if(game.dataValues.players.includes(playerName!)){
     throw new BadRequestException(`Player ${playerName} already in game`);
    
    }
    
    const newPlayers = [...game.dataValues.players, playerName];

   if(newPlayers.length > game.dataValues.maxPlayers){
    throw new BadRequestException(`Game is full`);
  }
   

    try {
      await game.update({
        players: newPlayers,
      });
      return {
        message: `Player ${playerName} joined game`,
      }
    } catch (error) {
      this.handleDBExceptions(error);
    }

  }
  async startGame(id: number, updateGameDto: UpdateGameDto) {
    const game = await this.findOne(id);
    try {
      await game.update({
        state: GameState.IN_PROGRESS,
      });
      return{
        message: `Game ${game.dataValues.name} started`,
      }
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
  async endGame(id: number, updateGameDto: UpdateGameDto) {
    
    const game = await this.findOne(id);
    try {
      await game.update({
        state: GameState.FINISHED,
        score: updateGameDto.score,
      });
      
      return{
        message: `Game ${game.dataValues.name} ended`,
      }
      
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any){
    if (error.parent?.code === '23505')
    {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Something went very wrong');
  }
}
