class NavigationComponent {

get navLinksMenu() {
   return $$('#zak-primary-nav li[id*=menu]');
}

get firstNavMenuList() {
    return $('#zak-primary-nav li');
}
}

export default new NavigationComponent();