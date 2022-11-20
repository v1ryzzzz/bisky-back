import {Column, DataType, Model, Table} from "sequelize-typescript";


interface TitleCreationAttrs {

}

@Table({tableName: 'titles'})
export class User extends Model<User, TitleCreationAttrs> {
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

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    genre: string[];

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    datePublication: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    studio: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    ageLimit: string;

    @Column({type:DataType.STRING, unique: true, allowNull: false})
    episodeDuration: string;

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    linked: string[];

    @Column({type: DataType.DECIMAL, defaultValue: 0.0})
    rating: number;

    @Column({type: DataType.INTEGER, defaultValue: 0})
    ratingCount: number;

}