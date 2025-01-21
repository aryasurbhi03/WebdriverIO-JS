import NavigationComponent from './components/navigationComponent'
class HomePage {

open() {
    return browser.url('/');
}

get getStartedButton() {
    return $('#get-started');
}

get imgLogo() {
    return $('//img[@alt="Practice E-Commerce Site"]');
}

get textHeading() {
    return $(".elementor-widget-container h1");
}

get NavigationComponent() {
    return NavigationComponent;
}
}

export default new HomePage();