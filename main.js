import { BButtonGroup } from 'bootstrap-vue'
Vue.component('b-button-group', BButtonGroup)

import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

const app = new Vue({
    el: '#app',
    data: {
        lists: [],
        contenido: [],
        conte:[]
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating'
            }
            this.lists.push(newList)
        },
        saveList(list) {
            list.status = 'saved'
        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        addCards() {
            const newCard = {
                texto: '',
                status2: 'creating'
            }
            this.contenido.push(newCard)
        },
        saveCards(conte){
            conte.status2 = 'saved'
        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        saveCard(list){
            const card1={
                name: list.card,
                status: "ok",
            }
            list.cards.push(card1)
            list.card = ""
        },
        editcards(list, index){
           //list.cards[index].status = "no"
          if(list.cards[index].status == "no"){
            list.cards[index].status = "ok"
          }
          else if(list.cards[index].status == "ok"){
            list.cards[index].status = "no"
          }
            },
            delateCards(list, index){
                list.cards.splice(index, 1)
            },
            editNameList(list){
                list.status = 'creating'
                
            }


    }
})
