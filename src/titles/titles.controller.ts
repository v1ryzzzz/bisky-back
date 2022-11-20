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

    @Get('/:id')
    getById(@Param('id') id: number){
        return this.titlesService.getTitleById(id);
    }

}
