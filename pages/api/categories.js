const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getCategories(req, res);
        }
    }
}

// Getting all posts.
async function getCategories(req, res) {
    try {
        let { db } = await connectToDatabase();
        let categories = await db
            .collection('categories')
            .find({})
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(categories)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}