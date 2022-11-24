import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {AddTitleDto} from "./dto/add-title.dto";
import {TitlesService} from "../titles/titles.service";
import {UserTitles} from "../titles/user-titles.model";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private titlesService: TitlesService,
                @InjectModel(UserTitles) private  userTitlesRepository: typeof UserTitles) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return user;
    }

    async getUserData(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        const userShortTitles = [];

        user.titles.forEach((el) => {
            userShortTitles.push({id: el.id, name: el.name, img: el.img})
        })

        return [user.id, user.login, user.email, user.img, user.background, userShortTitles.length, userShortTitles];
    }

    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOne({where: {login}, include: {all: true}})
        return user;
    }

    async addImg(email: string) {

    }

    async addBackground(email: string) {

    }

    async addTitle(dto: AddTitleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const title = await this.titlesService.getTitleById(dto.titleId);
        //const userTitle = await this.userTitlesRepository.findByPk(dto.titleId)
        if (title && user) {
            await user.$add('title', title.id);
           // await userTitle.$set('status', dto.status)
            return dto;
        }
    }
}
