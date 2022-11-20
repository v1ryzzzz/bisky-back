import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {AddTitleDto} from "./dto/add-title.dto";
import {TitlesService} from "../titles/titles.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private titlesService: TitlesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user;
    }

    async addTitle(dto: AddTitleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const title = await this.titlesService.getTitleById(dto.titleId);
        if (title && user) {
            await user.$add('title', title.id);
            return dto;
        }
    }
}
