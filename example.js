const puppeteer = require('puppeteer');
(async () => { 
	const browser = await puppeteer.launch();// launch the browser
	const page = await browser.newPage();
	const navigationPromise = page.waitForNavigation({ waitUntil: 'networkidle0' });
	await page.goto('https://experitest.com/');
	await page.setViewport({ width: 1920, height: 563 });
	await page.waitForSelector('.row > .col-xl-2:nth-child(7) > .footer-menu-column > li:nth-child(5) > a');
	await page.click('.row > .col-xl-2:nth-child(7) > .footer-menu-column > li:nth-child(5) > a');
	await navigationPromise;
	await page.pdf({path:'example.pdf',
									format:'A4',
									printBackground:true
								});
	await browser.close();
})();