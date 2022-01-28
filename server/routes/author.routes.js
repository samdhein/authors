const AuthorController = require("../controllers/author.controller")

// initially comment all but the index

module.exports = app => {
    // console.log("server/routes")
    app.get("/api", AuthorController.index) // root
    app.post("/api/authors", AuthorController.createAuthor) // create an author
    app.get("/api/authors", AuthorController.allAuthors)  // get all authors
    app.get("/api/authors/:id", AuthorController.oneAuthor) // get one author (:keyname must match req.params.keyname in controller)
    app.put("/api/authors/:id", AuthorController.updateAuthor) // update one author
    app.delete("/api/authors/:id", AuthorController.deleteAuthor) // delete one author
}