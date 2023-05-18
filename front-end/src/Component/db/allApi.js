import { baseUrl } from "./baseUrl";

export const Allapi={
    insert:async(jsonbody)=>{
        try{
            const response=await fetch(baseUrl+"insert",{
                method:"POST",
                body:JSON.stringify(jsonbody),
                headers:{
                    "content-type":"application/json"
                }
            })
            const result=await response.json()
           console.log(result);
            return (result);
        }
        catch(err){
            return err;
        }
    },


    fetchData:async()=>{
        try{
            const response=await fetch(baseUrl+"show",{
                method:"GET",
             
            })
            const result=await response.json()
        //    console.log(result);
            return (result);
        }
        catch(err){
            return err;
        }
    },

    delete:async(id)=>{
        try{
            const response=await fetch(baseUrl+"delete/"+id,{
                method:"DELETE",
           
            })
            const result=await response.json()
        //    console.log(result);
            // return (result);
        }
        catch(err){
            return err;
        }
    },


    update:async(jsonbody)=>{
        try{
            const response=await fetch(baseUrl+"updateD/"+jsonbody.id,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(jsonbody)
            })
            const result=await response.json()
        //    console.log(result);
            return (result);
        }
        catch(err){
            return err;
        }
    },


}