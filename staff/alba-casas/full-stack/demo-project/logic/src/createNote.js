const {validators: { validateId, validateString }} = require("commons");
const {models: {Note}} = require("data")

function createNote(userId, text, color){
    validateId(userId)
    validateString(text, "text")
    validateString(color, "color")

    return Note.create({user: userId, text, color})
        .then(note => {})
}

module.exports = createNote