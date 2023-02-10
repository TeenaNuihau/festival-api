import { Body, Controller, Get, Post } from '@nestjs/common';
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
    
}
