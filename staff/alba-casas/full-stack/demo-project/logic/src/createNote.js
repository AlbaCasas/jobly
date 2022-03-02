const {validators: { validateId, validateString, validateBoolean }} = require("commons");
const {models: {Note}} = require("data")

function createNote(userId, text, color, public = false){
    validateId(userId)
    validateString(text, "text")
    validateString(color, "color")
    validateBoolean(public, "public")

    return Note.create({user: userId, text, color, public})
        .then(note => {})
}

module.exports = createNote