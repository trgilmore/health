# CLU Health Check Automation
*Disclaimer: This was created as an educational exercise to learn how to automate a process via a headless browser. It is not intended to be used. Also, if you do use this, please be sure to do so responsibly and cancel the cronjob if this script would submit false data.*

This project was inspired by @ScarletKnight310's [CLU Health Check Automation](https://github.com/ScarletKnight310/AutoHealthCheck) project. Made with help from a tutorial at https://www.scrapingbee.com/blog/submit-form-puppeteer/

## Get Started

```
git clone https://github.com/trgilmore/health.git
```

```
cd health
```
* Be sure to change the rellative personal info in `index.js` to your own. NOTED in ALL CAPS.



## Requirements:

* [Node.js](https://nodejs.org/en/)
* Puppeteer

Puppeteer is a node module that allows you to automate a browser. It can be installed via npm while in the `/health` directory.

```
npm install puppeteer
```

## Automation

ScarletKnight310 used a Windows automation tool to automate the process, but if you have a Mac or Linux, you can use cronjobs to accomplish the same thing.

```
crontab -e
```

```
0 10 * 4,5 1 cd /health && node index.js
```