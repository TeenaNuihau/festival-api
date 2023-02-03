import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JeuxModule } from 'src/jeux/jeux.module';
import { Zone,ZoneSchema } from './zone.schema';

@Module({imports:
    [
        MongooseModule.forFeature([{
            name:Zone.name,
            schema:ZoneSchema
        }])
        ,JeuxModule
    ],
})
export class ZoneModule {}
