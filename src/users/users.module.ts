import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Title} from "../titles/titles.model";
import {UserTitles} from "../titles/user-titles.model";
import {TitlesModule} from "../titles/titles.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Title, UserTitles]),
      TitlesModule
  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
