import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEventDto } from './event.create.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService){}

        @Post()
        Create(@Body()createEventDto:CreateEventDto){
            return this.eventService.create(createEventDto);
        }

        @Get()
        GetAll(){
            return this.eventService.getAll();
        }


        @Get(':id')
        getById(@Param('id') id: string) {
            return this.eventService.getById(id);
        }



    // @Put(':id')
    // update(@Param('id')id:string,@Body() createBenevoleDTO: CreateBenevoleDTO){
    //     return this.eventService.update(id,createBenevoleDTO)
    // }




    
}
