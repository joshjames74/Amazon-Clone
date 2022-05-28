import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

// Need to send status

export default withApiAuthRequired(async function handler(req, res) {

    const session = getSession(req, res);

    // Check that query sub is valid
    if (session.user.sub != req.query.sub) {
        return JSON.parse({
            message: 'Invalid sub',
            success: false,
        })
    }

    // Call relevant functions
    switch (req.method) {
        case 'GET': {
            return getUser(req, res);
        }
        case 'POST': {
            return createUser(req, res);
        }
    }
});

async function getUser(req, res) {
    try {
        let { db } = await connectToDatabase();
        let user = await db
            .collection('users')
            .find({sub: req.query.sub})
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(user)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function createUser(req, res) {
    try {
        let { db } = await connectToDatabase();
        await db.collection('users').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'User added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}
