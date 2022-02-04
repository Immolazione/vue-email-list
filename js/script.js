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
            let result = '';


            do {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                    result = (res.data.response);
                    if(!this.emails.includes(result)) this.emails.push(result);
                });
            } while(this.emails.length < this.itemsNumber);

























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
        },
    },
    created() {
        this.getEmail();
    }
});