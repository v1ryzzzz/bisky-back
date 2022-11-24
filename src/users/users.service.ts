import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {AddTitleDto} from "./dto/add-title.dto";
import {TitlesService} from "../titles/titles.service";
import {UserTitles} from "../titles/user-titles.model";
import {changeProfileDataDto} from "./dto/changeProfileData.dto";

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

    async getUserData(login: string) {
        const user = await this.userRepository.findOne({where: {login}, include: {all: true}});
        const userShortTitles = [];
        const userTitlesStatus = [];

        for (const el of user.titles) {
            userShortTitles.push({id: el.id, name: el.name, img: el.img})
            const data = await this.getTitleStatusAndRating(user.id, el.id)
            userTitlesStatus.push(data)
        }

        return {id: user.id, login: user.login, email: user.email,
            avatar: user.img, background: user.background,
            userShortTitlesLength: userShortTitles.length, userShortTitles: userShortTitles,
            userTitlesStatus: userTitlesStatus};
    }

    async getCountOfStatus(id: number){
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}});
        const countOfStatus = {Completed: 0, Dropped: 0, PlannedToWatch: 0, Watching: 0}

        for (const el of user.titles) {
            const data = await this.getTitleStatusAndRating(user.id, el.id);
            switch (data.status){
                case ("Completed"): {
                    countOfStatus.Completed++;
                    break;
                }
                case ("Dropped"): {
                    countOfStatus.Dropped++;
                    break;
                }
                case ("Planned to watch"): {
                    countOfStatus.PlannedToWatch++;
                    break;
                }
                case ("Watching"): {
                    countOfStatus.Watching++;
                    break;
                }
                default: {
                    throw "Error! I don't know this status"
                    break
                }
            }
        }
        return countOfStatus;

    }

    async getTitleStatusAndRating(userId: number, titleId: number) {
        const userTitle = await this.userTitlesRepository.findOne({where: {userId: userId, titleId: titleId}})
        const Info = {status: userTitle.status, rating: userTitle.userRating};
        return Info;
    }

    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOne({where: {login}, include: {all: true}})
        return user;
    }

    async changeProfileData(dto: changeProfileDataDto){
        const user = await this.userRepository.findByPk(dto.id)
        if(dto.newLogin != '') {
            await user.update({login: dto.newLogin})
        }
        if(dto.newImg != '') {
            await user.update({img: dto.newImg})
        }
        if(dto.newBackground != '') {
            await user.update({background: dto.newBackground})
        }
        return "Profile data changed"
    }

    async addTitle(dto: AddTitleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const title = await this.titlesService.getTitleById(dto.titleId);
        if (title && user) {
            await user.$add('title', title.id);
            const userTitle = await this.userTitlesRepository.findOne({where: {titleId: dto.titleId, userId: dto.userId}})
            if(dto.status == "Remove"){
                await userTitle.destroy()
            } else {
                await userTitle.update({status: dto.status})
                await userTitle.update({userRating: dto.userRating})
            }
            return dto;
        }
    }

}
