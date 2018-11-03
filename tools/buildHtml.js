import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

process.env.NODE_ENV = 'production';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="css/styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('index.html written to / dist...'.green);
  });
});
