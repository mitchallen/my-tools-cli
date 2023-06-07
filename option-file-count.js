
import * as fs from 'fs';

export async function optionFileCount(filename) {

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let count = data.trim().split(/\s+/).length;
        console.log(count)
    });
}