export default {
    async requestCoach(context,payload){
        const coach ={
            id:new Date().toISOString(),
            email:payload.email,
            message:payload.message
        }
        const response = await fetch('https://findcoach-824d3-default-rtdb.asia-southeast1.firebasedatabase.app/requests.json',{
            method:'POST',
            body:JSON.stringify({
                coach
            })
        })
        if(!response.ok){
            alert('erorr')
        }
        context.commit('fetchRequest',{...coach})

    },
    async fetchRequest(context){
        const poken =context.rootGetters['login/token']
        const response =await fetch(`https://findcoach-824d3-default-rtdb.asia-southeast1.firebasedatabase.app/requests.json?auth=`+poken)
        const result =await response.json()
        if(!response.ok){
            alert('error')
        }
        console.log('results',result)
        
        const request=[]
        for(const key in result ){
            const requestdata ={
                id:result[key].coach.id,
                email:result[key].coach.email,
                message:result[key].coach.message
            }
            request.push(requestdata)
            console.log(requestdata)
        }
        context.commit('fetchRequest',request)


    }
}