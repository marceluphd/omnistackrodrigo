const tweet = require('../models/tweet')

module.exports = {
    async store(req, res) {
        const tweet = await tweet.findById(req.params.id)

        tweet.set({likes: tweet.likes + 1})

        await tweet.save()

        return res.json(tweet)
    }
}