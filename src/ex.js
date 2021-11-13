
            const csvFilePath='participants_85160701068.csv'
            const csv=require('csvtojson')
            console.log(csvFilePath);
            csv()
            .fromFile(csvFilePath)
            .then((jsonObj)=>{
                console.log(jsonObj);
            })