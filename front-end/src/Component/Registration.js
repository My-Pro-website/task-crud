import React, { useState } from 'react';
import './Registration.css';
import { Allapi } from './db/allApi';
import { useEffect } from 'react';
import ShowData from './ShowData';
function Registration() {
    const [data, setData] = useState({
        name: "",
        email: "",
    })

    // const [flag, setFlag] = useState(false)
    const [tableData, settableData] = useState([]);
    const [showtable , setShowTable]=useState(false)
    const [edit, setEdit]=useState(false)
    const [editfData, setEditfData]=useState({
        id:"",
        name:"",
        email:""
    })



    const updateValue=(e)=>{
        setEditfData({...editfData,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        // console.log("Registered");
        datashow()
    },[data])
useEffect (()=>{
    datashow()
},[])
    function handleData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }

    function dataSubmit(e) {
        e.preventDefault();
        if (!data.name || !data.email) {
            // alert(" all fields are mandatory");
        }
        else
        {
        Allapi.insert(data)
        }
        setData({
            name:"",
            email:""
        })
        
        // else {
        //     setFlag(true);
        // }

        // {
        //     settableData([...tableData,
        //     {
        //         name: data.name,
        //         email: data.email,
        //         address: data.address
        //     }
        //     ])
        // }
    }
 function datashow(){
    Allapi.fetchData().then((response)=>{

        console.log(response.Data)
        settableData(response.Data)
    })
    setShowTable(true)
    setEdit(false)
 }

 function datadel(id)
 {
    Allapi.delete(id)
    // console.log(id)
    datashow()
 }

 function editData(item)
 {
    const display={
        id:item.id,
        name:item.name,
        email:item.email        
    };
    // console.log(display);

    setEdit (true)

    setEditfData(display)
 }

 function UpdateData(data)
 {  console.log("hiii")
    Allapi.update(data)
    // setEdit(false)
   
    datashow()
    
    
 }

    return (
        <>

            {/* <pre>{{flag}?<h2 className='ui-define'>Hello {data.name},you have Registered Successfully</h2>:""}</pre> */}
            <form className='container' onSubmit={dataSubmit}>
                <div className='header'>
                    <h1>User Registration</h1>
                </div>

                <div>
                    <input type='text' placeholder='enter your name' name="name" value={data.name} onChange={handleData} />
                </div>

                <div>
                    <input type='text' placeholder='enter your email' name="email" value={data.email} onChange={handleData} />
                </div>

                <div>
                    <button type='submit'>Submit</button>
                    <button type='button' onClick={datashow}>Show Data</button>
                </div>

            </form>
            {showtable===true?<ShowData tableData={tableData} datadel={datadel} edit={edit} editData={editData} editfData={editfData} updateValue={updateValue}  UpdateData={UpdateData}/>:""}
        </>
    )
};

export default Registration;