import connetDB from "../lib/connetDB.js"
import CormonM from "../models/CormonM.ts"
import { NextResponse } from "next/server"



export default async function getCorMons(){
    try{

        await connetDB()
        const jusice = JSON.parse(JSON.stringify(await CormonM.find()))
        return jusice
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}