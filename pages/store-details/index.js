import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function StoreDetails() {

    return (
        <>
            <div>
                Store Details
            </div>
            <div>
                As you drill down from the Store Locator page, provide full details about a particular store, like a map and business hours.
            </div>
        </>
    )
});