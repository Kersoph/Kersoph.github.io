const testFolder = '../docs/images/assets';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    let html = '';

    files.forEach((file) => {
        const pngFile = file.substring(0, file.length - 4) + '.png';

        html += `
            <div>
                <a href="images/assets/${pngFile}">
                    <img src="images/thumb/assets/${file}" alt="${file}" class="logo"/>
                </a>
            </div>
        `;
    });

    console.log(html);
});
