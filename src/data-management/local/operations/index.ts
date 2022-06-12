import fs from 'fs';
import { LOCAL_DB_FILE_PATH } from '../../../ui/common/constants';
import _ from 'lodash'

export const read = async (path: string): Promise<any> => {
    const readData = await fs.readFile(LOCAL_DB_FILE_PATH, 'utf8', (err, jsonString) => {
        if (err) {
            return err;
        }
        try {
            const data = JSON.parse(jsonString);
            const pathArray = path.split('/');
            let currentData = data;
            const doc = _.get(currentData, pathArray[pathArray.length - 1], null);
            return doc;
        } catch(err) {
            return err;
        }
    });
    return readData;
}
export const readFromFile = async (filePath: string, path: string): Promise<any> => {
    const readData = await fs.readFile(filePath, 'utf8', (err, jsonString) => {
        if (err) {
            return err;
        }
        try {
            const data = JSON.parse(jsonString);
            return data;
        } catch(err) {
            return err;
        }
    });
    return readData;
}

export const write = (path: string, data: Object): Promise<void> => {
    fs.writeFile(LOCAL_DB_FILE_PATH, JSON.stringify(data), (err) => {
        if (err) console.log('Error writing file:', err);
    })
    return;
}
export const writeToFile = (filePath: string, path: string, data: Object): Promise<void> => {
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) console.log('Error writing file:', err);
    })
    return;
}
