import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TitlesService} from "./titles.service";
import {CreateTitleDto} from "./dto/create-title.dto";

@Controller('titles')
export class TitlesController {
    constructor(private titlesService: TitlesService) {}

    @Post()
    create(@Body() dto: CreateTitleDto){
        return this.titlesService.creationTitle(dto);
    }

    @Get('/byID/:id')
    getById(@Param('id') id: number){
        return this.titlesService.getTitleById(id);
    }

    @Get('/byName/:id')
    getByName(@Param('id') name){
        return this.titlesService.getTitleByName(name);
    }

    @Get('/all')
    getAllTitle(){
        return this.titlesService.getAllTitle();
    }

    @Get('/allShort')
    getAllShortTitle(){
        return this.titlesService.getAllShortTitle();
    }
}
