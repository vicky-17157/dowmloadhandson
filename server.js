//const express = require('express');
const fs = require('fs');
const download = require('download');

const url="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg";
(async () => {
    await download(url, 'dest');
 
    fs.writeFileSync('dest/pixabay-photo-815297.jpg', await download(url));
 
    download('https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg')
    .pipe(fs.createWriteStream('dest/tome.jpg'));
 
    // download array of images
    await Promise.all([
        'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg',
        'https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769__340.jpg',
        'https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg',
        'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg'
    ].map(url => download(url, 'dest')));
})();
