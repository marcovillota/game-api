import { allow } from "joi";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/entities/user.entity";
import { GamePlayer } from "./game-player.entity";

@Table
export class Game extends Model {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    maxPlayers: number;

  

    @Column({
        type: DataType.ENUM('waiting', 'in_progress', 'finished'),
        defaultValue: 'waiting',
    })
    state: string;

    @Column({
        type: DataType.JSONB,
        allowNull: true,
    })
    score: Record<string, number>

    @BelongsToMany(() => User, () => GamePlayer)
    players: User[];

}
