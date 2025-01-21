import ContactPage from "../pages/contactPage.js";
import { faker } from '@faker-js/faker';

describe('Contact menu', ()=> {
    it('Should display success alert', async () => {
        await ContactPage.open();
        await ContactPage.submitForm(faker.person.firstName(),faker.internet.email(),faker.phone.number(),faker.lorem.paragraph(1));
        const successAlert = ContactPage.successAlert;
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});
