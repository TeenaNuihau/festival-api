import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BenevoleModule } from 'src/benevole/benevole.module';
import { ZoneModule } from 'src/zone/zone.module';
import { Event,EventSchema } from './event.schema';
import { EventService } from './event.service';
import { EventController } from './event.controller';

@Module({imports:
    [
        MongooseModule.forFeature([{
            name:Event.name,
            schema:EventSchema
        }])
        ,BenevoleModule
        ,ZoneModule
    ], providers: [EventService], controllers: [EventController],
})
export class EventModule {}
