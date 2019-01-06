import VueRouter from 'vue-router';
import Home from './src/components/Home';
import Work from './src/components/Work';
import About from './src/components/About';
import Contact from './src/components/Contact';

export default new VueRouter ({
  routes : [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/contact', component: Contact },
    { path: '*', redirect: '/' }
  ]
});