import React from "react";

function Update(props){
    console.log(props.editfData)

    return(
       
           <tr>
            <td>{props.editfData.id}</td>
            <td><input type="text" name="name" value={props.editfData.name} onChange={props.updateValue}/></td>
            <td><input type="text" name="email" value={props.editfData.email} onChange={props.updateValue}/></td>
            <td> <button type='button' style={{ width: "100%"}} onClick={()=>props.UpdateData(props.editfData)}> Update</button></td>
           </tr>
    )
}


export default Update;