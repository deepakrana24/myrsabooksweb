
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

import React from 'react'

const notFound = () => {
  return (
    <Card>
    <Title title="Not Found" />
    <CardContent>
        <h1>404: Page not found</h1>
    </CardContent>
</Card>
  )
}

export default notFound