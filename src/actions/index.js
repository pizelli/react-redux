let nextAtestadosId = 0
export const addAtestado = ({nome, email}) => ({
    type: 'ADD_REGISTRO',
    id: ++nextAtestadosId,
    nome,
    email
})

export const handleChange = ({nome, email}) => ({
    type: 'CHANGE_INPUT',
    nome,
    email
})

export const editRegistro = ({id, nome, email}) => ({
    type: 'EDIT_REGISTRO',
    id,
    nome,
    email
})