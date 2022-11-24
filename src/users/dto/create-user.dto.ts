import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @IsString({message: 'Должно быть строкой'})
    readonly email: string;

    @IsString({message: 'Должно быть строкой'})
    readonly password: string;

    @IsString({message: 'Должно быть строкой'})
    readonly login: string;
}
