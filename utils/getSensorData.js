//Libraries
//Local Dev Only
import dotenv from 'dotenv'
dotenv.config();


//fetch smartrek sensor data and extract relevant information  - return that data as an array with two objects in it for vacuum and tank sensors data
export async function getSensorData() {
    try {
        let sensorResponse = await fetch(process.env.SMARTREK_SENSORS_JSON_URL);
        let sensorJSON = await sensorResponse.json();
        let extractedSensorData =
            [
                {
                    section1: {
                        section_name: 'Section 1',
                        vacuum_reading: sensorJSON.database.table.row[1].data_EXT.PRESSURE,
                        reading_time: sensorJSON.database.table.row[1].timeTag_EXT.realtime
                    },
                    section2: {
                        section_name: 'Section 2',
                        vacuum_reading: sensorJSON.database.table.row[1].data_EXT.PRESSURE2,
                        reading_time: sensorJSON.database.table.row[1].timeTag_EXT.realtime
                    },
                    section3: {
                        section_name: 'Section 3',
                        vacuum_reading: sensorJSON.database.table.row[2].data_EXT.PRESSURE2,
                        reading_time: sensorJSON.database.table.row[2].timeTag_EXT.realtime
                    },
                    section4: {
                        section_name: 'Section 4',
                        vacuum_reading: sensorJSON.database.table.row[3].data_EXT.PRESSURE,
                        reading_time: sensorJSON.database.table.row[3].timeTag_EXT.realtime
                    },
                    section5: {
                        section_name: 'Section 5',
                        vacuum_reading: sensorJSON.database.table.row[3].data_EXT.PRESSURE2,
                        reading_time: sensorJSON.database.table.row[3].timeTag_EXT.realtime
                    },
                },
                {
                    tank1: {
                        tank_name: 'Tank 1',
                        tank_level: sensorJSON.database.table.row[4].data_1,
                        reading_time: sensorJSON.database.table.row[4].timeTag_EXT.realtime
                    },
                    tank2: {
                        tank_name: 'Tank 2',
                        tank_level: sensorJSON.database.table.row[5].data_1,
                        reading_time: sensorJSON.database.table.row[5].timeTag_EXT.realtime
                    },
                    tank3: {
                        tank_name: 'Tank 3',
                        tank_level: sensorJSON.database.table.row[6].data_1,
                        reading_time: sensorJSON.database.table.row[6].timeTag_EXT.realtime
                    },
                    tank4: {
                        tank_name: 'Tank 4',
                        tank_level: sensorJSON.database.table.row[7].data_1,
                        reading_time: sensorJSON.database.table.row[7].timeTag_EXT.realtime
                    },
                    tank5: {
                        tank_name: 'Tank 5',
                        tank_level: sensorJSON.database.table.row[8].data_1,
                        reading_time: sensorJSON.database.table.row[8].timeTag_EXT.realtime
                    }
                }
            ];
            return extractedSensorData;
    } catch (error) {
        console.error(`There was an error fetching the requested data: ${error}`)
        return null;
    }
}

