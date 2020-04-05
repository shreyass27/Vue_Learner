import Home from './views/Home';
import Stocks from './views/Stocks';
import Portfolio from './views/Portfolio';

const routes = [
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '/', component: Home },
];

export default routes;