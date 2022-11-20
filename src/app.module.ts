import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { TitlesModule } from './titles/titles.module';
import {ConfigModule} from "@nestjs/config";
import {Title} from "./titles/titles.model";
import {User} from "./users/users.model";
import {UserTitles} from "./titles/user-titles.model";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Title, User, UserTitles],
            autoLoadModels: true,
        }),
        UsersModule,
        TitlesModule,
        AuthModule,
    ]
})
export class AppModule {}