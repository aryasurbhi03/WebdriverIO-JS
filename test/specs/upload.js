import { expect } from 'chai';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

describe('Upload Tests', () => {
    it('Simple Upload Tests', async() => {
        //open
        await browser.url('https://the-internet.herokuapp.com/upload');

        //store test file path
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const filePath = path.join(__dirname, '../data/success.png');
        console.log('filepath? ',filePath)

        //upload image - to the browser
        const remoteFilePath = await browser.uploadFile(filePath);

        //set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });

    it('Simple Upload Tests', async() => {
        //open
        await browser.url('/cart/');

        //store test file path
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const filePath = path.join(__dirname, '../data/success.png');
        console.log('filepath? ',filePath)

        //upload image - to the browser
        const remoteFilePath = await browser.uploadFile(filePath);

        //remove hidden class 
        await browser.execute()

        //set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });
});