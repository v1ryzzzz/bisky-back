import { Module } from '@nestjs/common';
import {TitlesService} from "./titles.service";
import {TitlesController} from "./titles.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Title} from "./titles.model";
import {User} from "../users/users.model";
import {UserTitles} from "./user-titles.model";

@Module({
    providers: [TitlesService],
    controllers: [TitlesController],
    imports: [
        SequelizeModule.forFeature([Title, User, UserTitles])
    ],
    exports: [
        TitlesService
    ]
})
export class TitlesModule {}
