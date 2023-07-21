import {Card, CardContent, CardHeader} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

export const Dashboard = () => (

    <Card sx={{
        bgcolor: 'pink'
    }}>
        <CardHeader title="Welcome to the administration"/>
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        {/* <DateTimePicker
            label="Controlled picker"
            value={value}
            onChange={(newValue) => setValue(newValue)}/> */}

    </Card>

);
