import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserTitles} from "./user-titles.model";

interface TitleCreationAttrs {

}

@Table({tableName: 'titles', createdAt: false, updatedAt: false})
export class Title extends Model<Title, TitleCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.ARRAY(DataType.STRING), unique: true, allowNull: false})
    name: Array<string>;

    @Column({type: DataType.TEXT, unique: false, allowNull: true})
    description: string;

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    img: string;

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    type: string;

    @Column({type: DataType.STRING, unique: false, allowNull: false, defaultValue: "Announce"})
    status: string;

    @Column({type: DataType.INTEGER, unique: false, allowNull: true, defaultValue: 0})
    episodeCount: number;

    @Column({type: DataType.ARRAY(DataType.STRING), unique: false, allowNull: true})
    genre: Array<string>;

    @Column({type: DataType.STRING, unique: false, allowNull: false, defaultValue: "22 March 1895"})
    datePublication: string;

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    studio: string;

    @Column({type: DataType.STRING, unique: false, allowNull: false, defaultValue: "G"})
    ageLimit: string;

    @Column({type:DataType.STRING, unique: false, allowNull: true})
    episodeDuration: string;

    @Column({type: DataType.ARRAY(DataType.STRING), unique: false, allowNull: true})
    linked: Array<string>;

    @Column({type: DataType.DECIMAL, unique: false, defaultValue: 0.0})
    rating: number;

    @Column({type: DataType.INTEGER, unique: false, defaultValue: 0})
    ratingCount: number;

    @Column({type: DataType.ARRAY(DataType.STRING), unique: false, allowNull: true})
    screens: Array<string>

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    video: string

    @BelongsToMany(() => User, () => UserTitles)
    users: User[];

}