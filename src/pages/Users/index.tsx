import MuiTable from "../../components/MuiTable"
import harry from '../../assets/imgs/harrypotter.jpg'
import ron from '../../assets/imgs/ronweasley.jpg'
import hermoine from '../../assets/imgs/hermionegranger.jpg'
import luna from '../../assets/imgs/lunalovegood.jpg'
import neville from '../../assets/imgs/nevillenongbottom.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from "@mui/material/Button"

export type TableItem = {
    img: string,
    name: string,
    phone: number,
    address: string,
    btn: React.ReactElement
}

export type TableProps = {
    data: TableItem[]
}


const Users = () => {

    function createData(
        img: string,
        name: string,
        phone: number,
        address: string,
        btn: React.ReactElement
    ) {
        return { img, name, phone, address, btn };
    }

    const data = [
        createData(harry, 'Harry Potter', 974635333, 'address', <VisibilityIcon />),
        createData(ron, 'Ron Weasely', 345098976, 'address', <VisibilityIcon />),
        createData(hermoine, 'Hermoine Granger', 262377747, 'address', <VisibilityIcon />),
        createData(luna, 'Luna Lovegood', 305836799, 'address', <VisibilityIcon />),
        createData(neville, 'Neville Longbottom', 356009876, 'address', <VisibilityIcon />),
    ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>Users</h4>
                <Button variant="contained">
                    Add User
                </Button>
            </div>
            <MuiTable data={data} />

        </>
    )
}

export default Users