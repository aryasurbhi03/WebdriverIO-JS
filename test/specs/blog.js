import BlogPage from "../pages/blogPage.js";

describe('Blog', ()=> {
    it('should open Blog page', async () => {
        await BlogPage.open();
        expect(BlogPage.blogPageTitle).toHaveText('Blog')
    });

    it('should validate number of recent links', async () => {
        await BlogPage.open();
        const recentLinks = await BlogPage.recentLinksList;
       
        //Validating text length
        for (const links of recentLinks)
        {
            const linkName = await links.getText();
            console.log(linkName.length);
            await expect(linkName.length).toBeGreaterThan(10);
        }

        //await expect(recentLinks).toHaveLength(4);
});
});