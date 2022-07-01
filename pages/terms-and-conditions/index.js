import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function TermsAndConditions() {

    return (
        <>
            <div>
                Terms and Conditions
            </div>
        </>
    )
});