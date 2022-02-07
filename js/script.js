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
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                console.log(res.data);
                if(!this.emails.includes(res.data.response)) this.emails.push(res.data.response);   
            });
            console.table(this.emails);
        },

        getEmails() {

            for (let i = this.emails.length; i < this.itemsNumber; i++){
                this.getEmail();
                console.table(this.emails.length);
            };
        },

        deleteEmails() {
            this.emails = [];
        }

    },
});