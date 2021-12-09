var app = new Vue({
    el: '#app',
    data: {
        name: 'Vue',
        mioArray: ['leando','luigi','mario'],        
        car: {
          colore: 'red',
          ruote:'quattro',
          autoradio:'si'
        },        
        linkImg : 'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256',
        linkImg2 : 'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256',
        myhtml: '<b>Bomberone</b>'        
    },
    methods: {
        cambioImg(){
            this.linkImg2='https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
        }        
    }
})

var ciclo = new Vue({
    el:'#ciclo',
    data: {
        dogs:[
            {race:'barboncino'},
            {race:'volpino'},
            {race:'pastore tedesco'}
        ],
        cats:['persiano','bengala','siamese']
    }
})

var conto = new Vue({
    el:'#conto',
    data:{
        counter: 0
    }
})