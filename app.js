const express = require('express');
const app = express()
const port = 3000
const Article = require('./models/Article')

app.delete('/articles/:id', (req, res) => {
    Article.findOneAndRemove(
        { _id: req.params.id },
        (err, article) => {
            res.send(article)
        }
    )
})


app.get('/articles', (req, res) => {
    Article.find({}, (err, articles) => {
        res.send(articles)
    })
})

app.post('/articles', (req, res) => {
    const newArticle = new Article(req.body)
    newArticle.save((err, article) => {
        res.send(article)
    })
})

app.put('/articles/:id', (req, res) => {
    Article.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, article) => {
            res.send(article)
        }
    )
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

