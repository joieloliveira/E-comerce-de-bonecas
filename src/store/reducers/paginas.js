import { homeAlt, inserirAlt, minhaDietaAlt } from '../actions/actionTypes'

const initialState = {
    homeIni: true,
    inserirIni: false,
    minhaDietaIni:false,
}

export default function Paginas (state = initialState, action) {
    switch(action.type) {
        case homeAlt:
            return {
                ...state,
                homeIni: action.payload,
                inserirIni: false,
                minhaDietaIni:false,
            }
        case inserirAlt:
            return {
                ...state,
                inserirIni: action.payload,
                homeIni: false,
                minhaDietaIni:false,
            }
        case minhaDietaAlt:
            return {
                ...state,
                minhaDietaIni: action.payload,
                homeIni: false,
                inserirIni: false,
            }
        default:
            return state
    }
}