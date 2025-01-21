import NavigationComponent from './components/navigationComponent'
class BlogPage {

open() {
    return browser.url('/blog');
}

get blogPageTitle() {
    return ('.zak-page-title');
}

get recentLinksList() {
   return $$('#recent-posts-3 ul li');
}

}

export default new BlogPage();