import React from "react";
import Update from "./Update";

function ShowTable(props) {
    // console.log(props.tableData)
    return (
        <>
           {props.edit===false?<table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                

                <tbody>

                    {props.tableData.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><button style={{ width: "100%" }} onClick={()=>props.editData(item)}>edit</button> </td>
                                <td><button style={{ width: "100%" }} onClick={() => props.datadel(item.id)}>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>:
            
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                

                <tbody>
                    <Update editfData={props.editfData} updateValue={props.updateValue}  UpdateData={props.UpdateData}/>
                    
                </tbody>
            </table>}
        </>
    )

}

export default ShowTable;