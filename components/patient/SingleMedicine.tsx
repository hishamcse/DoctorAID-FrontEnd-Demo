import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Medicine} from "../../models/medicine";

const SingleMedicine: React.FC<{ medicine: Medicine }> = (props) => {

    const dateStr = new Date(props.medicine.startDate).toDateString();

    const card = (
        <React.Fragment>
            <CardContent sx={{bgcolor: '#F2F4F3'}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {dateStr}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.medicine.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.medicine.genericName}
                </Typography>
                <Typography variant="body2">
                    {props.medicine.dosage}
                    <br />
                    {props.medicine.frequency}
                </Typography>
            </CardContent>
            <CardActions sx={{bgcolor: '#F2F4F3'}}>
                <Button size="small">See Prescription</Button>
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ width: '100%'}}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}

export default SingleMedicine;