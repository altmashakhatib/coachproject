<template>

    <base-card>
    <span>
        <input type="checkbox" name="frontend" id="frontend" checked  @change="setFilter">
        <label for="frontend">Frontend</label>
    </span>
    <span>
        <input type="checkbox" name="backend" id="backend" checked @change="setFilter">
        <label for="backend">Backend</label>
    </span>
    <span>
        <input type="checkbox" name="career" id="career" checked @change="setFilter">
        <label for="career">career</label>
    </span>
    
    
    
    </base-card>
</template>

<script>
export default{
    emits:['change-filter'],
    data(){
        return{filter:{
            frontend:true,
            backend:true,
            career:true}
        }
    },
    methods:{
        setFilter(event){
            const inputId=event.target.id
            const isActive=event.target.checked
            const updateFilter={
                
                ...this.filter,
                [inputId]:isActive}
                this.filter=updateFilter
                this.$emit('change-filter',updateFilter)
        }
    }
}



</script>