const con=require("../connection");

const showData=(async (req,res)=>{
    con.query("select *from user", (err, result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })
        }
        else
        {
            if(result.length!=0)
            {
                res.json({
                    Status:true,
                    Message:"Data paresent in user table are as:--",
                    Data:result
                })
            }

            else
            {
                res.json({
                    Status:false,
                    Message:"Data not paresent in user table",
                    Data:result
                })
            }
        }
    })
});

const showId=(async (req,res)=>{
    con.query("select *from user where id=?",req.params.id,(err, result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })
        }

        else
        {
            res.json({
                Status:true,
                Message:"Data found by id",
                Data:result
            })
        }
    })
});


const showqu=(async (req,res)=>{
    con.query("select *from user where id=?",req.query.id,(err, result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })
        }

        else
        {
            res.json({
                Status:true,
                Message:"Data found by id",
                Data:result
            })
        }
    })
});


const insert=(async (req,res)=>{
    // const data=req.body;
    const data={name:"amite", email:"amit@gmail.com"}
    // console.log(data)
    con.query("insert into user set ?",data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })
        }

        else
        {
            res.json({
                Status:true,
                Message:"insert successfully",
                Data:result
            })
        }
    })
});

const insertD=(async (req,res)=>{
    const data=[req.body.name , req.body.email]
    con.query("insert into user set name=? , email=?",data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })
        }

        else
        {
            res.json({
                Status:true,
                Message:"insert successfully",
                Data:result
            })
        }
    })
});


const update=(async (req, res)=>{
    const data=["ranjit", "ranjit#gmail.com",2]
    con.query("update  user set name=? , email=?  where id=?",data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })   
        }
        else
        {
            res.json({
                Status:true,
                Message:"Update successfully",
                Data:result
            })
        }
    })
});


const updateD=(async (req, res)=>{
    const data=[req.body.name , req.body.email,req.body.id]
    con.query("update  user set name=? , email=?  where id=?",data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })   
        }
        else
        {
            res.json({
                Status:true,
                Message:"Update successfully",
                Data:result
            })
        }
    })
});

const updatem=(async (req, res)=>{
    const data=[req.body.name , req.body.email,req.params.id , req.params.id]
    con.query("update  user set name=? , email=?  where id=? or where id=?",data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })   
        }
        else
        {
            res.json({
                Status:true,
                Message:"Update successfully",
                Data:result
            })
        }
    })
});


const updatep=(async (req, res)=>{
    const data=[req.body.name , req.body.email,req.query.id]
    con.query("update  user set name=? , email=?  where id=?",data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })   
        }
        else
        {
            res.json({
                Status:true,
                Message:"Update successfully",
                Data:result
            })
        }
    })
});


const deletes=(async (req, res)=>{
    const data=[1]
    con.query("delete from user where id=?",data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })   
        }
        else
        {
            res.json({
                Status:true,
                Message:"Dealet successfully",
                Data:result
            })
        }
    })
});

const deleted=(async (req, res)=>{
    const data=[req.params.id]
    con.query("delete from user where id="+data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })   
        }
        else
        {
            res.json({
                Status:true,
                Message:"Dealet successfully",
                Data:result
            })
        }
    })
});


const deletem=(async (req, res)=>{
    const data=[req.params.id]
    con.query("delete from user where id="+data,(err,result)=>{
        if(err)
        {
            res.json({
                Status:false,
                Message:err.message,
                Data:[]
            })   
        }
        else
        {
            res.json({
                Status:true,
                Message:"Dealet successfully",
                Data:result
            })
        }
    })
});
module.exports={showData , showId , showqu , insert , insertD , update , updateD , updatem, updatep, deletes , deleted , deletem};