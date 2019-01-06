import VueRouter from 'vue-router';
import Home from './src/components/Home';
import Work from './src/components/Work';
import About from './src/components/About';

export default new VueRouter ({
  routes : [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '*', redirect: '/' }
  ]
});