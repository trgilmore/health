import puppeteer from 'puppeteer';

async function main() {
	const browser = await puppeteer.launch({
		headless: true
	});
	const page = await browser.newPage();
	await page.goto("https://myclu.callutheran.edu/health-check/?_=1");
	await page.type('#frmLogin_UserName', 'USERNAME_HERE');
	await page.type('#frmLogin_Password', 'PASSWORD_HERE');
	await page.click('#btnLogin');
	await page.waitForTimeout(10000);
	await page.type('#mobile', 'PHONE_NUMBER_HERE');
	await page.click('.space-y-4 > div:nth-child(2) > button:nth-child(1)')
	await page.click('div.shadow:nth-child(4) > div:nth-child(2) > fieldset:nth-child(1) > div:nth-child(2) > button:nth-child(1)')
	await page.click('div.shadow:nth-child(4) > div:nth-child(2) > fieldset:nth-child(2) > div:nth-child(2) > button:nth-child(3)')
	await page.click('div.shadow:nth-child(4) > div:nth-child(2) > fieldset:nth-child(3) > div:nth-child(2) > button:nth-child(3)')
	await page.click('div.shadow:nth-child(4) > div:nth-child(2) > fieldset:nth-child(4) > div:nth-child(2) > button:nth-child(3)')
	await page.click('#confirm_mask');
	await page.click('#confirm');
	await page.type('#signature_first_name', 'FIRST_NAME_HERE');
	await page.type('#signature_last_name', 'LAST_NAME_HERE');
	await page.click('.border-transparent')
	await page.waitForTimeout(5000);
	await browser.close();
}
main();