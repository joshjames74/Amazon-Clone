import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { getProduct } from '../../utils/siteData.js';
import { useState, useEffect } from 'react'

export default function Product() {
    const router = useRouter()

    const id = router.query.id

    var product;

    getProduct(id, res => {
        if (res.success) {
            product = res.message
        }
    })

    console.log(product)

    return (<p>{JSON.stringify(product)}</p>)
}