const tweet = require ('../models/tweet')

module.exports = {
    async index(req, res) {
        const tweets = await tweet.find({}).sort('-createdAt')
        return res.json(tweets)
    },
    async store(req, res){
        const tweet = await tweet.create(req.body)

        return res.json(tweet)
    }
}