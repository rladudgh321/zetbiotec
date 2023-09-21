import { produce } from "immer";

const initialState = {
    isMenu:false,
    twoInfo:[{
        src:'http://zetbio.com/theme/zb/img/main/item03.png'
    }, {
        src:'http://zetbio.com/theme/zb/img/main/item02.png'
    }, {
        src:'http://zetbio.com/theme/zb/img/main/item01.png'
    }],
}

export const IS_MENU_REQUEST = 'IS_MENU_REQUEST';
export const IS_NOT_MENU_REQUEST = 'IS_NOT_MENU_REQUEST';

const imageReducer = (state=initialState, action) => {
    return produce(state, (draft)=>{
        switch(action.type) {
            case IS_MENU_REQUEST:
                draft.isMenu = true;
                break;
            case IS_NOT_MENU_REQUEST:
                draft.isMenu = false;
                break;
            default : break;
        }
    });
}

export default imageReducer;