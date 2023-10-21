export default {
   async registerCoach(context, data) {
    const coachData = {
      id: new Date().toISOString(),

      firstName: data.first,
      lastName: data.last,
      
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const poken=context.rootGetters['login/token']
    const response=await fetch('https://findcoach-824d3-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json?auth='+poken,{
      method:'POST',
      body:JSON.stringify({
       coachData
      })
      
      
    })
    if(!response.ok){
      alert('Error')
      
    }
    // const responseData=await response


    context.commit("registerCoach", {...coachData});
  },
   async fetchCoach(context){
    const response =await fetch('https://findcoach-824d3-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json')
    const responseData= await response.json()
    
    if(!response.ok){
      alert('Error')
    }
    
    const coach=[]
   console.log('response data',responseData)
   
    for(const key in responseData){
      const coaches ={
       id:responseData[key].coachData.id,
       firstName:responseData[key].coachData.firstName.val,
        lastName:responseData[key].coachData.lastName.val ,
        
        description: responseData[key].coachData.description.val,
        hourlyRate: responseData[key].coachData.hourlyRate.val,
        areas: responseData[key].coachData.areas.val
      }
      coach.push(coaches)}
    
    
    console.log(coach)



    
    
    
    
    context.commit('fetchCoach',coach)


  }
};
