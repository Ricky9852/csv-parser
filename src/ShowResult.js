import React from "react";
import ShowData from "./ShowData";
import ShowChart from "./ShowChart";

const ShowResult=props=>{
    const {users}=props
    const host=users.find((user)=>{
        return user['Guest']==='No'
    })
    console.log(host)
    const hostname=host['Name (Original Name)']
    const duration=host['Total Duration (Minutes)']
    const durhr=Math.floor(duration/60)
    const durmin=duration%60
    console.log(hostname);
    return (
        <div>
            <h1>Report</h1>
            {/* <div className='row'> */}
                <div className="col-md-4 card bg-light mb-3">
                    <div className="card-header"><h3>Host - {hostname}</h3></div>
                    <div className="card-body">
                        <p className='card-text'>Total Participants - {users.length}</p>
                        <p className='card-text'>Total Duration - {`${duration} minutes (${durhr} hour ${durmin} minutes)`}</p>
                    </div>
                </div>
            {/* </div> */}
            <h2>Participants</h2>
            <div className='row'>
                <ShowData users={users}/>
                <ShowChart users={users}/>
            </div>
            
        </div>
    )
}
export default ShowResult;