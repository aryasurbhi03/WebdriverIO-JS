//url https://practice.sdetunicorns.com/
describe('iFrame', () => {
    it('Open URL and assert iframe logo', async() => {
        //open URL
        await browser.url('/iframe-sample');

        //access iframe first
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);

        //assert
        await expect($('#site-logo')).toExist();
    });
});