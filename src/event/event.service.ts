import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, Schema, SchemaType } from 'mongoose';
import { CreateEventDto } from './event.create.dto';
import { Event ,EventDocument} from './event.schema';
@Injectable()
export class EventService {
    

    
    constructor(
        @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>
        ) 
        {}
        
    private checkid(id:string){
        if (!isValidObjectId(id)){
            throw new NotFoundException(`No Jeux with this id: ${id}`);
        }
    }


    async create(createEventDto: CreateEventDto) {
        const createdEvent = new this.eventModel(createEventDto);
        try{
            await createdEvent.save();
            return createdEvent;
        }
        catch(error){
            throw new InternalServerErrorException()
        }
    }


    async getAll() {
        let event= 
        this.eventModel.find().populate('benevoles').populate({ 
            path: 'zone',
            populate: {
              path: 'jeux',
              model: 'Jeux'
            } 
         });
        
        return event;
    }

    async getById(id:string){
        this.checkid(id)
        const event = await this.eventModel.findById(id)
        if(!event){
            throw new NotFoundException(`No event with this id: ${id}`);
        }
        return event;
    }
    
}
