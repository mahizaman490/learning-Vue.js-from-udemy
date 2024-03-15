const app = Vue.createApp({
    data(){
        return{
            Name: " Mahi",
            Age:"21",
            imgLink: "https//...",
            entered: ""
        }
    },
    methods:{
        Favorite(){
            const number = Math.random();
              
        },
        calculatedAge(){
            return this.age + 5;
        }

    }
})

app.mount("#assignment")