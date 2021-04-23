import mongoose from 'mongoose'
import { isJSDocAugmentsTag } from 'typescript'


export async function startConnection(){

    //Accedim a la BBDD que tenim ( en dev estarà en local )
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/ExempleMinim1',{ 
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Connection with DATABASE (ExempleMinim1) established')
}