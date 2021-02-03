
const app = Vue.createApp({
    data() {
        return {
            author:'John doe',
            books:[
                'Lord of the rings',
                'Attack on titan'gi,
                'The promised neverland'
            ],
            query:''
        }
    },
    methods: {
        AddBook(event){
            event.preventDefault();
            this.books.push(this.query)
            this.query = ' ';
        }
    },
})

app.mount('#app')