import { CHANGE_THEME } from "../actions/actionTypes";

export default (state = true, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            if (!state) {
                document.body.style.background = "white";
                document.body.style.color = "black";
            } else {
                document.body.style.background = "#171923";
                document.body.style.color = "white";
            }
            return !state;
        default:
            return state;
    }
};
