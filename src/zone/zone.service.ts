import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Zone, ZoneDocument } from './zone.schema';

@Injectable()
export class ZoneService {



    constructor(
        @InjectModel(Zone.name) private readonly zoneModel: Model<ZoneDocument>
        ) 
        {}


    async getAll(){

        return this.zoneModel.find().populate('jeux');
    }
}
