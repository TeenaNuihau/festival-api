import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JeuxModule } from 'src/jeux/jeux.module';
import { Zone,ZoneSchema } from './zone.schema';
import { ZoneController } from './zone.controller';
import { ZoneService } from './zone.service';

@Module({imports:
    [
        MongooseModule.forFeature([{
            name:Zone.name,
            schema:ZoneSchema
        }])
        ,JeuxModule
    ], controllers: [ZoneController], providers: [ZoneService],
})
export class ZoneModule {}
