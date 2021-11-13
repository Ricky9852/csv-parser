import React from "react";

const ShowData=props=>{
    const {users}=props
        const tableHeads=Object.keys(users[0])
    return (
        <div className='col-md-6'>
            <table border="1px" className='table table-striped'>
                <thead>
                    <tr>
                        {
                            Object.keys(users[0]).map((keys,i)=>{
                                return <th key={i}>{keys}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user['Name (Original Name)']}</td>
                            <td>{user['User Email']}</td>
                            <td>{user['Total Duration (Minutes)']}</td>
                            <td>{user['Guest']}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        
        </div>
    )
}
export default ShowData