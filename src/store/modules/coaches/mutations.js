

export default{
    registerCoach(state,payload){
       state.coaches.push(payload)

    },
    fetchCoach(state,payload){
        state.coaches=payload}
       
    }
    
