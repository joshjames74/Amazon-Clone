const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            if (req.query.id) {
                return getProduct(req, res);
            } else {
                return getAllProducts(req, res);
            }
        }
        case 'PUT': {
            console.log(req.body)
            if (req.body.parameter) {
                return updateProduct(req, res);
            } if (req.body.field) {
                return createProductField(req, res);
            }
        }
    }
};

// Get a product by id.
async function getProduct(req, res) {
    try {
        const id = req.query.id;
        let { db } = await connectToDatabase();
        let product = await db
            .collection('products')
            .find({_id: ObjectId(id)})
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(product)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
};

async function getAllProducts(req, res) {
    try {
        let { db } = await connectToDatabase();
        let products = await db
            .collection('products')
            .find({})
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(products)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
};

// 
async function updateProduct(req, res) {
    try {
        const id = req.body.id;
        const parameter = req.body.parameter;
        const value = req.body.value;
        if (parameter == 'quantity') {
            db.collection('products')
              .update(
                {_id: id},
                {
                    $inc: {parameter: value}
                }
              )
            return res.json({
                message: 'Successfully updated quantity',
                success: true
            })
        }
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
};

async function createProductField(req, res) {
    try {
        const id = req.body.id;
        const field = req.body.field;
        const value = req.body.value;
        db.collection('products')
            .aggregate(
            { $match: {_id: id}},
            { $addFields: {
                field: value
            }}
            )
        return res.json({
            message: 'Successfully added field',
            success: true
        })
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
};
