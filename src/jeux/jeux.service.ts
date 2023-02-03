import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Zone,ZoneDocument } from 'src/zone/zone.schema';
import { addZoneDto } from './addzone.jeux.dto';
import { CreateJeuxDto } from './create.jeux.dto';
import { Jeux, JeuxDocument } from './jeux.schema';

@Injectable()
export class JeuxService {
    constructor(@InjectModel(Jeux.name) private readonly jeuxModel:Model<JeuxDocument>,
    @InjectModel(Zone.name) private readonly zoneModel:Model<ZoneDocument>
    ){}
    
    private checkid(id:string){
        if (!isValidObjectId(id)){
            throw new NotFoundException(`No Jeux with this id: ${id}`);
        }
    }
    async createJeux(createJeuxDto: CreateJeuxDto) {
        try{
            const {name,type} = createJeuxDto;
            const benevole = new this.jeuxModel({
            name,
            type});

            await benevole.save();
            return benevole;
            } catch (error) {
            throw new InternalServerErrorException();
            }
    }

    async getAll(){
        try{
            const allJeux = await this.jeuxModel.find({});
            return allJeux;
        }
        catch(error){
            throw new InternalServerErrorException();
        }
    }
    async update(id:string,createJeuxDto:CreateJeuxDto){
        this.checkid(id)
        const body ={...createJeuxDto}
        const update=await this.jeuxModel.updateOne({_id:id},body)
        if(update.matchedCount==1){
            if(update.modifiedCount==1){
                return {message:"Success"};
            }
            return {message:"Already updated"};
        }
        throw new InternalServerErrorException();
    }

    async delete(id:string){
        this.checkid(id)
        const deleted=await this.jeuxModel.deleteOne({_id:id});
        if(deleted.deletedCount==1){
            return {message:"Success"};
        }
        throw new NotFoundException(`No Jeux with this id: ${id}`);
    }

    async getById(id:string){
        this.checkid(id)
        const jeux=await this.jeuxModel.findById(id)
        if(!jeux){
            throw new NotFoundException(`No jeux with this id: ${id}`);
        }
        return jeux;
    }

    async addToZone(idZone:string,addZoneDto:addZoneDto){
        this.checkid(addZoneDto._id)
        if(!isValidObjectId(idZone)){
            throw new NotFoundException(`No zone with this id: ${idZone}`);
        }
        return this.zoneModel.findByIdAndUpdate(
            idZone,
            { $addToSet: { jeux: addZoneDto._id } },
            { new: true },
          );
        

      
        
    }

}
