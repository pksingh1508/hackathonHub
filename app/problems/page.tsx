import Problems from '@/components/Problem';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: {
        absolute: "Problems - Choose and Build"
    }
}

const page = () => {
    return (
        <div>
            <Problems />
        </div>
    )
}

export default page;