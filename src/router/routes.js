function loadPage (component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */
`@/pages/${component}.vue`)}
export default [
    { path: '/', component: loadPage('Home') },
    { path: '/flashlight', component: loadPage('Flashlight') },
    { path: '/map', component: loadPage('Map') },
    { path: '/key', component: loadPage('Key')},
    { path: '/medkit', component: loadPage('Medkit')},
    { path: '/toolbox', component: loadPage('Toolbox')}

]