const app = new Vue({
    el: '#app',
    data: {
        lists: [], 
    },
    methods: {
        addList() {
            const newList = {
                contenido: [],
                name: '',
                status: 'creating',
                card: "",
                edList: "non"
            }
            this.lists.push(newList) //agrega una nueva lista
        },
        saveList(list) {
            list.status = 'saved'  // 
        },
        removeList(index) {
            this.lists.splice(index, 1)  //splice() cambia el contenido de lists eliminando el elemento indicado en el index
        },
        //Inicia funciones boton triple
        addCards(list) {
            const newCard = {
                name:list.card,
                status: 'ok'
            }
          this.contenido.push(newCard),
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
           // this.list.contenido.splice(index, 1)
            list.contenido.splice(index, 1)
        },
        editNameList(list) {
         //   this.list.status = 'creating'
            list.status = 'creating'
        }


    }
})
