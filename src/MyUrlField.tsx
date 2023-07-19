import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";


const MyUrlField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{ textDecoration: "none" }}>
            {record[source]}
            <LaunchIcon sx={{ fontSize: 20, ml: 1, color:"navy", fontWeight: 200}} />
            
        </Link>
    ) : null;
};

export default MyUrlField;