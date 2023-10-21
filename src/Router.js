import { createWebHistory, createRouter } from "vue-router";

import CoachDetails from "./components/Coaches/CoachDetails.vue";
import CoachList from "./components/Coaches/CoachList.vue";
import RegisterCoach from "./components/Coaches/RegisterCoach.vue";
import Contact from "./components/Request/ContactDetails.vue";
import RecivedRequest from "./components/Request/RecivedRequest.vue";
import LoginPage from './components/LoginSignUp/LoginPage.vue'
import SignUpPage from './components/LoginSignUp/SignUpPage.vue'
import NotFound from "./components/Request/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/coaches",
    component: CoachList,
    
  },
  {
    path: "/coaches/:id",
    component: CoachDetails,
    props:true,
    children:[{ path: "/contact/:id", component: Contact }]
    
  },
  
  {
    path: "/register",
    component: RegisterCoach,
  },
  {
    path: "/request",
    component: RecivedRequest,
  },
  {
    path:'/login',
    component:LoginPage

  },
  {
    path:'/login/signup',
    component:SignUpPage
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
