const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://elena:159_elena@cluster0.stjm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const start = async () => {
    try {
        await client.connect()
        console.log("Подключение установлено")

        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({name: 'elena', age: 21})

        const user = await users.findOne({age: 21})
        console.log(user)

    } catch (error) {
        console.log(error)
    }
}

start()