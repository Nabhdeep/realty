import { instaceAxios } from ".";

export const postContact = async(payload)=>{
    try{
        const res = await instaceAxios.post('/contact' , payload)
        return res.data
    }catch(err){
        console.log('error while sending')
    }
}