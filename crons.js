//Librarires
//development only
import cron from 'node-cron';
// Functions
import { insertData } from './utils/sendDataToDB.js';


//Schedule cron job (local)
cron.schedule("30 * * * * *", async () => {
    try {
        let data = await insertData();
    } catch (error) {
        console.error(`There was an error inserting the data into the database: ${error}`);
    }
})

//For Heroku
// async function logDataToDB(){
//     try {
//         let data = await insertData();
//         console.log(data)
//     } catch (error) {
//         console.error(`There was an error inserting the data into the database: ${error}`);
//     }
// }
// logDataToDB()
