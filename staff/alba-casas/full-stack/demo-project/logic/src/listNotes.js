const {validators: { validateId } } = require("commons")
const {models: { Note } } = require("data")

function listNotes(userId){
    validateId(userId)

    return Note.find( { user: userId } )
        .then(notes => {
            const docs = notes.map(note => {
                const doc = note._doc
                
                doc.id = doc._id.toString()
                delete doc._id
                delete doc.user
                delete doc.__v

                return doc
            })

            return docs
        })
}

module.exports = listNotes