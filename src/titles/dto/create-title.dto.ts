import {IsEmail, IsNumber, IsString, Length} from "class-validator";

export class CreateTitleDto {

    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

    @IsString({message: 'Должно быть строкой'})
    readonly description: string;

    @IsString({message: 'Должно быть строкой'})
    readonly img: string;

    @IsString({message: 'Должно быть строкой'})
    readonly type: string;

    @IsString({message: 'Должно быть строкой'})
    readonly status: string;

    @IsNumber({}, {message: 'Должно быть числом'})
    readonly episodeCount: number;

    readonly genre: Array<string>;

    @IsString({message: 'Должно быть строкой'})
    readonly datePublication: string;

    @IsString({message: 'Должно быть строкой'})
    readonly studio: string;

    @IsString({message: 'Должно быть строкой'})
    readonly ageLimit: string;

    @IsString({message: 'Должно быть строкой'})
    readonly episodeDuration: string;

    readonly linked: Array<string>;

    @IsNumber({}, {message: 'Должно быть числом'})
    readonly rating: number;

    @IsNumber({}, {message: 'Должно быть числом'})
    readonly ratingCount: number;
}
