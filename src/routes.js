import Home from './components/Home'
import Hot from './components/Hot'


export const routes = [
	{path:'/home',name:"homeLink",component:Home},
	{path:'/hot',name:"hotLink",component:Hot},
	{path:'*',redirect:'/home'}
]