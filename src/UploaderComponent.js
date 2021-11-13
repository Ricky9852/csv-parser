import React,{useState,useEffect} from "react";
import Papa from "papaparse";
import ShowResult from "./ShowResult";

const UploaderComponent=props=>{
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [users,setUsers] = useState([])
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    }
    useEffect(()=>{
        if(isSelected){
            Papa.parse(selectedFile, {
                header:true,
                dynamicTyping:true,
                complete: function(results) {
                    const datus=results.data
                    datus.pop()
                    setUsers(datus)
                }
            });
        }
    },[isSelected])
    return(
        <div>
            <h1>Select the file</h1>
            <input type='file' name='select' accept='.csv' onChange={changeHandler} />
            {users.length!==0 && <ShowResult users={users}/>}
        </div>
    )
}

export default UploaderComponent;