const app = new Vue({
    el: '#app',
    data: {
        lists: [], 
        conte: [],
        edList: "non"
    },
    methods: {
        addList() {
            const newList = {
                contenido: [],
                name: '',
                status: 'creating',
                card:""
            }
            this.lists.push(newList)
        },
        saveList(list) {
            list.status = 'saved'
        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        //Inicia funciones boton triple
        addCards(list) {
            const newCard = {
                name:list.card,
                status: 'creating'
            }
          list.contenido.push(newCard)
          list.card = ""
        },
        
        update(list, index) {
            if (list.contenido[index].status == "cero") {
                list.contenido[index].status = "uno"
            }
            else if (list.contenido[index].status == "uno") {
                list.contenido[index].status = "cero"
            }
        },
        deleteList(list, index) {
            this.list.contenido.splice(index, 1)
        },
        editNameList(list) {
            this.list.status = 'creating'
        }


    }
})
