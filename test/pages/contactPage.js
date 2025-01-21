import NavigationComponent from './components/navigationComponent'
class ContactPage {

open() {
    return browser.url('/contact/');
}

get contactNameInput() {
    return $('.contact-name input');
}

get contactEmailInput() {
    return $('.contact-email input');
}

get contactPhoneInput() {
    return $('.contact-phone input');
}

get contactMessageText() {
    return $('.contact-message textArea');
}

get submitButton() {
    return $('//button[@type="submit"]');
}

get successAlert() {
    return $("[role='alert']");
}

async submitForm(name, email, phone, message) {
    await this.contactNameInput.setValue(name);        // not clear the field first
    await this.contactEmailInput.setValue(email); //clear the field first
    await this.contactPhoneInput.setValue(phone);
    await this.contactMessageText.setValue(message);
    await this.submitButton.click();
}
}

export default new ContactPage();