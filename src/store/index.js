import { createStore } from "vuex";
import CoachModule from './modules/coaches/index.js'
import RequestModule from './modules/requests/index.js'
import LoginModule from './modules/login/index.js'


const store =createStore({
    modules:{
        coaches:CoachModule,
        requests:RequestModule,
        login:LoginModule
    }
    
})

export default store