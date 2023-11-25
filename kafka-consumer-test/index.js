const { Kafka } = require('kafkajs')


// create consumer
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka-service:9092', 'kafka-service:9092']
})

const consumer = kafka.consumer({ groupId: 'my-app' })

const run = async () => {

    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ message }) => {
            console.log(`received message: ${message.value}`)
        }
    })
}

run().catch(console.error)