import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Title} from "./titles.model";


@Table({tableName: 'user-titles', createdAt: false, updatedAt: false})
export class UserTitles extends Model<UserTitles> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Title)
    @Column({type: DataType.INTEGER})
    titleId: number;

    @Column({type: DataType.STRING})
    status: string;
}