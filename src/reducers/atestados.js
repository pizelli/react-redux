export const atestado = (state, action) => {
    return {
        id: action.id,
        nome: action.nome,
        email: action.email
    }
}

export const atestados = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_REGISTRO':
            return [
                ...state,
                atestado(undefined, action)
            ]
            // let user = {...state.user, id: action.id, ...action.alvo}
            // state.atestados.push(user)
            // console.log(user)
            // return {
            //     ...state,
            // }
        case 'CHANGE_INPUT':
            return atestado(undefined, action)
        case 'EDIT_REGISTRO':
            state.forEach(o => {
                if (o.id === action.id){
                    o.nome = action.nome
                    o.email = action.email
                }
                return o
            })
            return [
                ...state
            ]
        default:
            return state
    }
}

export default atestados