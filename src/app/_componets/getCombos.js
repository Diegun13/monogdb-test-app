import connectDB from "../lib/connetDB";
import { NextResponse } from "next/server"
import comboModel from "../models/comboModel"
 
export default async function getCombos(){
    try{
    
        await connectDB()
        // const combo = await comboModel.find({})
        const feet = JSON.parse(JSON.stringify(await comboModel.find()))
        return feet
        // return NextResponse.json(combo)

    }catch(error){
       return NextResponse.json({error: error.message})
    }
    
    
}