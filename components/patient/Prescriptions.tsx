import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SingleMedicine from "./SingleMedicine";
import {useEffect} from "react";
import MedicineDetails from "./MedicineDetails";
import { getMedicineDetails, getMedicines, getPrescriptionDetails, getPrescriptions } from '@/global';
import SinglePrescription from './SinglePrescription';
import PrescriptionDetails from './PrescriptionDetails';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Prescriptions() {
    const [prescriptions , setPrescriptions] = React.useState(getPrescriptions())
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', width: '100%' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', width: '30%', pl:10, pr:10 }}
            >
                {prescriptions.map((prescription, index) => {
                    return (
                        <Tab key={index + Math.random().toString()} label={<SinglePrescription prescription={prescription}/>} {...a11yProps(index)} />
                    )
                })}
            </Tabs>
            {prescriptions.map((prescription, index) => {
                return (
                    <TabPanel key={index + Math.random().toString()} value={value} index={index}>
                        <PrescriptionDetails prescription={getPrescriptionDetails(prescription.id)!}/>
                    </TabPanel>
                )
            })}

        </Box>
    );
}