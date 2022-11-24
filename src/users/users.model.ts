import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {Title} from "../titles/titles.model";
import {UserTitles} from "../titles/user-titles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users', createdAt: false, updatedAt: false})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    img: string;

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    background: string;

    @BelongsToMany(() => Title, () => UserTitles)
    titles: Title[];
}