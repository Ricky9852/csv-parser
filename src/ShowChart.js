import React from "react";
// import Chart from "react-google-charts";
import { Chart } from "react-google-charts";

const ShowChart=props=>{
    const {users}=props
    const arr=users.map((ele)=>{
        return [ele['Name (Original Name)'],ele['Total Duration (Minutes)']]
    })
    return (
        <div className='col-md-6'>
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="Bar"
                loader={<div>Loading Chart(turn on data)</div>}
                data={[['Name', 'Total Minutes Attended']].concat(arr)}
                options={{
                    // Material design options
                    chart: {
                    title: 'Zoom Report',
                    subtitle: 'Total Minutes, Attended',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}
export default ShowChart