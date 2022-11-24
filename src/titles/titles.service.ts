import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Title} from "./titles.model";
import {CreateTitleDto} from "./dto/create-title.dto";
import {Op} from "sequelize";

@Injectable()
export class TitlesService {

    constructor(@InjectModel(Title) private titleRepository: typeof Title) {
    }

    async creationTitle(dto: CreateTitleDto){
        const title = await this.titleRepository.create(dto);
        return title;
    }

    async getTitleById(id: number){
        const title = await this.titleRepository.findOne({where: { id }});
        return title;
    }

    async getTitleByName(name){
        const title = await this.titleRepository.findOne({where: { name }});
        return title;
    }

    async getAllTitle(){
        const titles = await this.titleRepository.findAll();
        return titles;
    }

    async getAllShortTitle(){
        const titles = await this.titleRepository.findAll();
        const shortTitles = [];

        titles.forEach((el) => {
            shortTitles.push({id: el.id, name: el.name, img: el.img})
        })

        return shortTitles;
    }

}
