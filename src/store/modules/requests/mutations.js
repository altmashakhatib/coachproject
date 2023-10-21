export default{
    requestCoach(state,payload){
        state.requests.push(payload)
    },
    fetchRequest(state,payload){
        state.requests=payload

    }
}