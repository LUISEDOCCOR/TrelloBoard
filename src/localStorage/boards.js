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
        const board = JSON.parse(localStorage.getItem(boardKey))
        board.key = boardKey
        boards.push(board)
    }
    return boards
}

export const getOnlyBoard = (key) => {
    return JSON.parse(localStorage.getItem(key))
}