import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function SSRPage() {
  const { user, error, isLoading } = useUser();

  console.log(user);

  if (isLoading) {
    return (<div>Loading...</div>);
  } else if (error) {
    return (<div>{error.message}</div>)
  } else {
    return (<div>Hello {user.name}</div>)
  }
});
