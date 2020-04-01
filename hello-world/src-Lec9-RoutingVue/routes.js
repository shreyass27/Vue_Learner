import Home from './components/Home';

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    })
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    })
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    })
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    })
};

const routes = [
    { path: '', component: Home },
    {
        path: '/user', component: User, children: [
            { path: '', component: UserStart },
            {
                path: ':id', component: UserDetail, beforeEach: (to, from, next) => {
                    console.log('Router beforeEach for Each path', { to, from, next });
                    // To allow the route 
                    next();
                    // To not allow the route 
                    // next(false);
                    // To redirect with path or path config object
                    // next('/path') or next({ path: 'pa  thname'  })
                }
            },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
    { path: '*', redirect: '/' }
];


export default routes;