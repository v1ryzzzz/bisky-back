import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16,
        {message: 'Длинна папроя должны быть не меньше 4 и не больше 16'})
    readonly password: string;
}
