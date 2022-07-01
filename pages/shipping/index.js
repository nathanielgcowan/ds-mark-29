import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Shipping() {

    return (
        <>
            <div>
                Shipping
            </div>
        </>
    )
});