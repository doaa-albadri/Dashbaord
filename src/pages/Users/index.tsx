import MuiTable from "../../components/MuiTable"
import Button from "@mui/material/Button"
import { useState } from "react"
import MuiModal from "../../components/MuiModal"
import { TextField, Stack, Typography } from "@mui/material"
import styles from './users.module.css'
import { TableProps } from "../../App"

export type ModalProps = {
    open: boolean
    handleOpen: () => void
    handleClose: () => void
    children: any
}


const Users = ({ tableHeaders, data, onClick }: TableProps) => {

    const [open, setOpen] = useState(false);
    const [filebase64, setFileBase64] = useState<string>("")

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function convertFile(files: FileList | null) {
        if (files) {
            const fileRef = files[0] || ""
            const fileType: string = fileRef.type || ""
            console.log("This file upload is of type:", fileType)
            const reader = new FileReader()
            reader.readAsBinaryString(fileRef)
            reader.onload = (ev: any) => {
                // convert it to base64
                setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
            }
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>Users</h4>
                <Button onClick={handleOpen} variant="contained">
                    Add User
                </Button>
            </div>
            <MuiTable tableHeaders={tableHeaders} data={data} onClick={onClick} />
            <MuiModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
                <Stack gap={3}>
                    <Typography variant="h6">
                        Add New User
                    </Typography>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Phone" variant="outlined" />
                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                    <label className={styles.uploadButton} htmlFor='inputTag'>
                        <Typography >
                            Upload Image
                        </Typography>
                        <input className='d-none' id="inputTag" type="file" onChange={(e) => convertFile(e.target.files)} />
                    </label>
                    {(filebase64.indexOf("image/") > -1) &&
                        <div className="d-flex justify-content-center">
                            <img className={styles.image} src={filebase64} width={200} />
                        </div>
                    }
                    <Stack className="d-flex justify-content-end" direction="row" gap={4}>
                        <Button variant="contained">
                            Add
                        </Button>
                        <Button variant="contained">Cancel</Button>

                    </Stack>
                </Stack>

            </MuiModal>

        </>
    )
}

export default Users