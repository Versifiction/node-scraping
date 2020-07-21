const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("psg.csv");

writeStream.write(`Nom de l'équipe: `);

request("http://psg.fr", (error, response, html) => {
  console.log("Scraping...");
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const title = $(".nav-list__title").html();

    writeStream.write(`${title}`);

    console.log("Scraping done !");
  }
});
