import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import myMusicReducer from "./myMusic-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    myMusic: myMusicReducer,
    
});


let store = legacy_createStore(reducers);

window.store = store;

export default store;

/*combineReducers(функция) = обьединяем три редьюсера. Создаем обьект profilePage со свойством profileReducer.
так же и для других обьектов */