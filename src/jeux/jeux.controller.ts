import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { addZoneDto } from './addzone.jeux.dto';
import { CreateJeuxDto } from './create.jeux.dto';
import { JeuxService } from './jeux.service';

@Controller('jeux')
export class JeuxController {
    constructor(private readonly jeuxService:JeuxService){}
    

    @Post()
    Create(@Body() createJeuxDto:CreateJeuxDto) {
        return this.jeuxService.createJeux(createJeuxDto);
    }

    @Get()
    getAll(){
        return this.jeuxService.getAll();
    }

    @Put(':id')
    update(@Param('id')id:string,@Body() createJeuxDto:CreateJeuxDto){
        return this.jeuxService.update(id,createJeuxDto)
    }
    @Delete(':id')
    delete(@Param('id') id:string){
        return this.jeuxService.delete(id)
    }

    @Get(':id')
    getById(@Param('id')id:string){
        return this.jeuxService.getById(id)
    }

    @Post('/zone/:id')
    addToZone(@Param('id')id:string,@Body()addZoneDto:addZoneDto){
       return this.jeuxService.addToZone(id,addZoneDto)
    }
}
