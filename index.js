const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let index = 0; index < 50; index++) {
    await page.goto(`https://chouseisan.com/assets/img/list/parson${index}.png`);
    await page.screenshot({path: `./img/character_${index}.png`});
  }
  await browser.close();
})();