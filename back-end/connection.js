const mysql=require("mysql")
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'task'
})

con.connect((err)=>{
    if(err)
    {
        console.log("Database is not Connected");
    }

    else
    {
        console.log("Database is connected");
    }
})

// con.query('select *from user',(err,result)=>{
//     if(err) err;
//     console.log(result);
// })
module.exports=con;