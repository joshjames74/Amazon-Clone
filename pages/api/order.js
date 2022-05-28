import { getCurrentUserData } from '../../utils/user.js';
import { getProduct } from '../../utils/siteData.js';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;


// Protect api route
export default withApiAuthRequired(async function handler(req, res) {

    const session = getSession(req, res);

    if (session.user.sub != req.body.sub) {
        return JSON.parse({
            message: 'Route blocked',
            success: false
        })
    }

    switch(req.method) {
        case 'POST': {
            return createOrder(req, res);
        }
    }
})

async function createOrder(req, res) {
    // Split query
    // Check that enough items are in stock
    const items = req.body.items;
    items.forEach(v => {
        const id = v._id
        // USING REVIEW COUNT BECAUSE QUANTITY DOES NOT EXIST
        getProduct(id, response => {
            if (!response || !response.success) {
                // check valid response
                return res.json({
                    message: 'Failed to retrieve product',
                    success: false
                })
            } if (response.message) {
                // check that quantity is available
                const quantity = message.review_count;
                if (quantity - v.quantity < 0) {
                    return res.json({
                        message: 'Quantity unavailable',
                        success: false
                    })
                } else {
                    // change stock
                    // return nothing and continue
                }
            }
        })
    })
    // Insert document 
    try {
        let { db } = await connectToDatabase();
        await db.collection('orders').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Order added successfully',
            success: true
        })
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        })
    }
}