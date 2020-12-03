import { homeAlt, inserirAlt, minhaDietaAlt } from './actionTypes'

// Action Creator
export function altAtributoHome(novaPagina) {
    return {
        type: homeAlt,
        payload: novaPagina
    }
}

// Action Creator
export function altAtributoInserir(novaPagina) {
    return {
        type: inserirAlt,
        payload: novaPagina 
    }
}

// Action Creator
export function altAtributoMinhaDieta(novaPagina) {
    return {
        type: minhaDietaAlt,
        payload: novaPagina 
    }
}