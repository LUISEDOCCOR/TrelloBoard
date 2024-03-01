const getKey = () => {
    return new Date().getTime()
}

export const addBoard = (title, bgColor) => {
    const board = {
        title: title,
        bgColor: bgColor
    }
    localStorage.setItem(getKey(),JSON.stringify(board))

}

export const getBoards = () => {
    const boards = []
    for(let i = 0; i < localStorage.length; i++){
        const boardKey = localStorage.key(i)
        const board = localStorage.getItem(boardKey)
        boards.push(JSON.parse(board))
    }
    return boards
}