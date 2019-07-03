const puppeteer = require('puppeteer');
const fs = require("fs");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.amazon.co.jp/s?rh=n%3A4217521051&brr=1`);
  // let html = await page.$eval('.s-result-item ', item => {
  //   const list = Array.from(document.querySelectorAll(selector));
  //   return item.innerHTML;
  // });
  // fs.writeFile('out.txt', html, (err, data) => {
  //   if(err) console.log(err);
  //   else console.log('write end');
  // });
  await browser.close();
})();