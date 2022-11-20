import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'C1v1L1z0T10n',
            database: 'dbBisky',
            models: [],
            autoLoadModels: true,
        }),
        UsersModule,
    ]
})
export class AppModule {}