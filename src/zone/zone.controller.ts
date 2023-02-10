import { Controller, Get } from '@nestjs/common';
import { ZoneService } from './zone.service';

@Controller('zone')
export class ZoneController {
    constructor(private readonly zoneService:ZoneService){}

    @Get()
    getAll(){
        return this.zoneService.getAll();
    }
}

