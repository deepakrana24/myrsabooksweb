import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    DateField
} from 'react-admin';



const postList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='bookName'/>
            <TextField source='bookSerialNumber'/>
            <TextField source='publication'/>
            <TextField source='status'/>
            <DateField source='pubDate'/>
            <EditButton basePath='/posts'/>
            <DeleteButton basePath='/posts'/>
        </Datagrid>
    </List>
  )
}

export default postList ;