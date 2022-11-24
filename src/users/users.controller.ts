import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {AddTitleDto} from "./dto/add-title.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Get('/login/:login')
    getUserByLogin(@Param('login') login: string ){
        return this.usersService.getUserByLogin(login);
    }

    @Get('/email/:email')
    getUserByEmail(@Param('email') email: string ){
        return this.usersService.getUserByEmail(email);
    }

    @Get('/data/:login')
    getUserData(@Param('login') login: string){
        return this.usersService.getUserData(login)
    }

    @Post('/addTitle')
    addTitle(@Body() dto: AddTitleDto){
        return this.usersService.addTitle(dto);
    }
}
