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
* Be sure to change the relative personal info in `index.js` to your own. NOTED in ALL CAPS.



## Requirements:

* [Node.js](https://nodejs.org/en/)
* Puppeteer

Puppeteer is a node module that allows you to automate a browser. It can be installed via npm while in the `/health` directory.

```
npm install puppeteer
```

## Automation

#### Option 1
ScarletKnight310 used a Windows automation tool to automate the process, but if you have a Mac or Linux, you can use cronjobs to accomplish the same thing. Use the script below, just determine the full PATH for node. (This is set for every Monday at 10am through May, I recommend using https://crontab.guru/ to determine the correct cron syntax)

```
crontab -e
```

```
0 10 * 4,5 1 cd /health && {PATH}/node index.js
```

#### Option 2?
Also I haven't tested it yet but could potentially be set up to run with github actions so you would not be not relient on your own machine. The only problem is that Github suspends Actions on repos that are not active for 60 days. Example of the action `yml` file [here](https://github.com/briangershon/github-actions-cron/blob/204b34209793d31273c106be322c956bbe5d1d20/.github/workflows/run-on-schedule.yml)

