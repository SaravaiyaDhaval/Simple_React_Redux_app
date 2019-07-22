export function changeUserData (user) {
    return({
        type: 'CHAGE-USER-DATA',
        payload: user
    })
}

export function chageUserAuth (auth) {
    debugger
    return({
        type: 'USER-AUTH',
        payload: auth
    })
}