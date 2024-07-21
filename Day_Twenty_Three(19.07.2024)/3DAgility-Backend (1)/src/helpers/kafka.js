const { Kafka, logLevel } = require("kafka-node");

// Will use configs later here, for now i am hardcoding this.
const client = new Kafka({
	clientId: "id", // not sure if this is required yet
	brokers: ["kafka1:9093", "kafka2:9093"],
	ssl: true,
	sslOptions: {
		rejectUnauthorized: true,
		ca: [fs.readFileSync("ca-cert.pem")],
		key: fs.readFileSync("client-key.pem"),
		cert: fs.readFileSync("client-cert.pem")
	},
	logLevel: logLevel.ERROR
});

// Create a producer
const producer = new Kafka.Producer(client);

// Wait for the producer to be ready
producer.on("ready", () => {
	console.log("Producer is ready");

	// Send a message to a topic
	producer.send([
		{
			topic: "opaTopic",
			messages: "Hello!"
		}
	], (error, result) => {
		console.log(error || result);
		process.exit();
	});
});

// Handle producer errors
producer.on("error", error => {
	console.error(error); // ? should i use console.log here instead of error
});

// Create a consumer
const consumer = new Kafka.Consumer(client, [{ topic: "my-topic" }]);

// Wait for the consumer to be ready
consumer.on("ready", () => {
	console.log("Consumer is ready");
});

// Consume messages
consumer.on("message", message => {
	console.log(message);
});

// Handle consumer errors
consumer.on("error", error => {
	console.error(error);
});

module.exports = {
	producer,
	consumer,
	produceMessage: (topic, message) => {
		producer.send([{ topic, messages: message }], (error, result) => {
			console.log(error || result);
		});
	},
	consumeMessages: () => {
		// Consume messages as they become available
		consumer.on("message", message => {
			console.log(message);
		});
	}
};
