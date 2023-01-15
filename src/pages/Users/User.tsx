import { TableItem } from "../../App"
import { TextField, Typography, Button } from "@mui/material"
import { Stack } from "@mui/system"
import styles from './users.module.css'

type UserProps = {
    user: TableItem
}

const User = ({ user }: UserProps) => {

    return (
        <>
            <Stack mb={5} justifyContent='space-between' alignItems='center' direction='row'>
                <Typography variant="h4" color='primary'>
                    User Details
                </Typography>
                <img className={styles.image} width={140} src={user.img} />
            </Stack>

            <Stack mb={5} gap={4}>

                <TextField value={user.name} label="Name" />
                <TextField value={user.phone} label="Phone" />
                <TextField value={user.address} label="Address" />
            </Stack>

            <Stack gap={3} justifyContent='end' alignItems='center' direction='row'>
                <Button variant="outlined" color="primary">Edit</Button>
                <Button variant="contained" color="primary">Save</Button>
                <Button variant="contained" color="error">Delete</Button>
            </Stack>
        </>
    )
}

export default User