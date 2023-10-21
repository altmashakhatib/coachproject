export default{
     login(context,payload){
        return context.dispatch('auth',{
            ...payload,
            mode:'login'
        })
        // const response =await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPIFqGt3eYt4NDUHgmY-cB1cL4C39nY28',{
        //     method:'POST',
        //     body:JSON.stringify({
        //         email:payload.email,
        //         password:payload.password,
        //         returnSecureToken:true
        //     })
        // })
        // const responseData=await response.json()
        // if(!response.ok){
        //     //error
        // }
        
        //     console.log('login',responseData)
        //     const data={
        //         localId: responseData.localId,
        //         idToken:responseData.idToken,
        //         expiresIn:responseData.expiresIn
        //     }
        //     console.log('data',data)
        //     context.commit('signUp',data)
        
        
    },
    signUp(context,payload){
        return context.dispatch('auth',{
            ...payload,
            mode:'signup'})},
    // async signUp(context,payload){
    //     const response =await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPIFqGt3eYt4NDUHgmY-cB1cL4C39nY28',{
    //         method:'POST',
    //         body:JSON.stringify({
    //             email:payload.email,
    //             password:payload.password,
    //             returnSecureToken:true
    //         })
    //     })
    //     const responseData=await response.json()
    //     if(!response.ok){
    //         //error
    //     }
        
    //         console.log(responseData)
    //         context.commit('signUp',{
    //             localId:responseData.localId,
    //             idToken:responseData.idToken,
    //             expiresIn:responseData.expiresIn
    //         })
    // },
    
   async auth(context,payload){
        const mode=payload.mode
        // let url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPIFqGt3eYt4NDUHgmY-cB1cL4C39nY28'
        let url=''
        if(mode === 'signup'){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPIFqGt3eYt4NDUHgmY-cB1cL4C39nY28'
        }else{url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPIFqGt3eYt4NDUHgmY-cB1cL4C39nY28'

        }
console.log('payload',payload)

        const response =await fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        })
        const responseData= await response.json()
        if(!response.ok){
            //error
        }
        
            console.log(responseData)
            context.commit('signUp',{
                localId:responseData.localId,
                idToken:responseData.idToken,
                expiresIn:responseData.expiresIn
            })
            localStorage.setItem('token',responseData.idToken)
            localStorage.setItem('userid',  responseData.localId)

            
        
    },
    tryLogin(context){
        const token =localStorage.getItem('token')
        const userid =localStorage.getItem('userid')

        if(token && userid){
            context.commit('signUp',{
                localId: userid,
                idToken:token,
                expiresIn:null
                
            })

        }

    },

    
    logout(context) {
        localStorage.removeItem('token')
        localStorage.removeItem('userid')
        const local={ localId:null,
            idToken:null,
            expiresIn:null
           }
            console.log(local)
        context.commit('signUp',local)
        
    }}
