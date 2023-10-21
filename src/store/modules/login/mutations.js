

export default{
    signUp(state,payload){state.localId=payload.localId,
        state.idToken=payload.idToken,
        state.expiresIn=payload.expiresIn
        
        
    }
   
    
}