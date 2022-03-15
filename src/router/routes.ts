import HomeView from '../views/HomeView.vue'
const routes:any = [
	{
		path: "/", component: HomeView
	},
	{
		path: "/about", component: () => import('../views/AboutView.vue')
	}
];

export default routes;