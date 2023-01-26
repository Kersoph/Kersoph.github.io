const testFolder = '../docs/images/thumbs/screenshots';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    let html = '';

    files.forEach((file) => {
        const pngFile = file.substring(0, file.length - 4) + '.png';

        html += `
            <div class="gallery__item">
                <a href="images/screenshots/${pngFile}">
                    <img src="images/thumbs/screenshots/${file}" alt="${file}" />
                </a>
            </div>
        `;
    });

    console.log(html);
});
