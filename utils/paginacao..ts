export function paginacao(page = 1, limit = 15){
    const get = Number(limit)
    const skip = (Number(page) - 1) * get 

    return {skip, get}
}

