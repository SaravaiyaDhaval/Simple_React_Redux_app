
const initialState = {
    user: 'admin',
    auth: ''
};

export default (states = { initialState }, action) => {
    debugger
    switch (action.type) {
        case 'CHAGE-USER-DATA':
            return ({
                ...states,
                user: action.payload
            });
        case 'USER-AUTH':
            return ({
                ...states,
                auth: action.payload
            });
        default:
            return states;
    }
}