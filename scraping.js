const puppeteer = require('puppeteer');

(async () => {
	const url = 'https://experitest.com/mobile-application-testing-news/';
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url, { waitUntil:'networkidle2'});
	const data = await page.evaluate(() => {
		const title = document.querySelector('#content2 > div > ul > li.news-link > h3').innerText;
		return { 
			title
		}
	});
	console.log(data);
	await browser.close();
})();	