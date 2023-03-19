
export const getFriendsColor = (type: string) => {
    switch (type) {
        case 'Close Friends':
            return '#3399FF'
        case 'Super Close Friends':
            return '#19B444'
        default:
            return 'transparent'
    }
}


export const getFriendsBgColor = (type: string) => {
    switch (type) {
        case 'Close Friends':
            return '#DFEFFF'
        case 'Super Close Friends':
            return '#DCFFE6'
        default:
            return 'transparent'
    }
}