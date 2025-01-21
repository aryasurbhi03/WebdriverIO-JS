import HomePage from "../pages/homePage";

describe('Navigation menu', ()=> {
    it('Open URl, get text for all naviation menu and assert them', async () => {
        await HomePage.open();
        const expectedLinks = [ 
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        //const navLinks = await $('#zak-primary-nav').$$('li[id*=menu]');
        const navLinks = HomePage.NavigationComponent.navLinksMenu;

        const actualLinks=[];

        for (const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);
    });
});