import {BelongsTo, BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserTitles} from "./user-titles.model";

interface TitleCreationAttrs {

}

@Table({tableName: 'titles'})
export class Title extends Model<Title, TitleCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    description: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    img: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    type: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    status: string;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    episodeCount: number;

    @Column({type: DataType.ARRAY(DataType.STRING), unique: true, allowNull: false})
    genre: Array<string>;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    datePublication: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    studio: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    ageLimit: string;

    @Column({type:DataType.STRING, unique: true, allowNull: false})
    episodeDuration: string;

    @Column({type: DataType.ARRAY(DataType.STRING), unique: true, allowNull: true})
    linked: Array<string>;

    @Column({type: DataType.DECIMAL, defaultValue: 0.0})
    rating: number;

    @Column({type: DataType.INTEGER, defaultValue: 0})
    ratingCount: number;

    @BelongsToMany(() => User, () => UserTitles)
    users: User[];

}