const { parseJwt } = require("./parseJwt")


exports.getusername = (token) => {
    let getuser = parseJwt(token)
    return getuser.user.username
}

exports.compareUsername = (postUser, userToCompare) => {
    if (postUser == userToCompare) 
    return true
    else
    return false
}