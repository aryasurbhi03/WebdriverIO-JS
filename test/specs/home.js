//url https://practice.sdetunicorns.com/
import HomePage from "../pages/homePage";
describe('Home', () => {
/*
    before(async() => {
        console.log('THIS COULD BE USED FOR TEST SETUP');
        await HomePage.open();
    })
*/
    beforeEach(async() => {
        console.log('THIS RUNS BEFORE EACH TEST');
        await HomePage.open();
    })

    it('Open URL and assert title', async() => {
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');  
    })

    it('Open url and assert url', async() => {
        await browser.url('https://practice.sdetunicorns.com/about');
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');  
    })

    it('Click get started button and assert url contains "get-started" text"', async() => {
        await $('#get-started').click();
        await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
    })

    it('Click logo button and assert url DOES-NOT contain "get-started" text"', async() => {
        await HomePage.getStartedButton.click();
        await HomePage.imgLogo.click();
        await expect(browser).not.toHaveUrl(expect.stringContaining('get-started'));
    })

    it('Find heading element and assert the text"', async() => {
        await HomePage.getStartedButton.click();
        const headingElement = await HomePage.textHeading;
        await expect(headingElement).toHaveText('Think different. Make different.');
    })
}) 