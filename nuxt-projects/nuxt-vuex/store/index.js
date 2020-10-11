import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state:function(){
            return{
                message:'Hello Vuex!',
                message2:'Hello Vuex222!'
            }
        }
    })
}

export default createStore