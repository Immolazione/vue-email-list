console.log('VUE OK', Vue);
console.log('AXIOS OK', axios);

Vue.config.devtools = true;

/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Evitare i doppioni nella lista delle mail
*/

const root = new Vue({
    el: '#root',
    data: {
        emails: [],
        itemsNumber: 10,
    },
    methods: {

        getEmail(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res =>{
                let result = (res.data.response);
                // console.log(res.data);
                console.log(res.data.response);
                if(!this.emails.includes(result)) this.emails.push(result);
                    
            });
        },

        getEmails(number) {
            for (let i = 0; i < number; i++){
                this.getEmail();
            }
        },
    },

    created() {

        // while (this.emails.length < this.itemsNumber){
        //     this.getEmail();
        //     console.log(this.emails.length)
        // };

        this.getEmails(this.itemsNumber);

        console.table(this.emails);
    }
});




























            // while (this.emails.length != this.itemsNumber) { <------ CICLO INFINITOOOOOOOOO!!!!!!
            //     for (let i = 0; i < this.itemsNumber; i++) {

            //         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
            //             result = (res.data.response);
            //             if(!this.emails.includes(result)) this.emails.push(result);
            //         });
            //     };
            // };


            // for (let i = 0; i < this.itemsNumber; i++) {
            //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
            //         result = (res.data.response);
            //         if(!this.emails.includes(result)) this.emails.push(result);
            //     });
            // };
            // console.log(this.emails);