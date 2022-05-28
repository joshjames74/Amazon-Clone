import { performance } from 'perf_hooks';
import redis from 'redis';
import util from 'util';

const redisPort = 6379;
const client = redis.createClient(redisPort);
const key = 'example-key';

// Promisify the get command so we can use async/await.
client.get = util.promisify(client.get)

export default async function handler(req, res) {
    try {
        const startTime = performance.now();
        const response = await client.get(key);

        if (response) {
            res.status(200).json(JSON.parse(response))
        } else {
            // Waiting 1 second to simulate a slow response from another DB query
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // As a contrived example, let's say this is the expected result
            const data = { name: "John Doe" };

            // Cache the result for 15 seconds to redis
            client.setex(key, 15, JSON.stringify(data));
            res.status(200).json(data);
        }

        const endTime = performance.now();
        console.log(`Call took ${endTime - startTime} milliseconds`)
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}