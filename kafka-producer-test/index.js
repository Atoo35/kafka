const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka-service:9092', 'kafka-service:9092']
})

const producer = kafka.producer()

const run = async () => {

    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    })

    console.log('Message sent!')
}

run().catch(console.error)