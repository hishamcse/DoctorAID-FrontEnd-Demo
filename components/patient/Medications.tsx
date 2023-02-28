import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SingleMedicine from "./SingleMedicine";
import {useEffect} from "react";
import MedicineDetails from "./MedicineDetails";
import { getMedicineDetails, getMedicines } from '@/global';

// const medicines = [
//     {
//         name: "Napa Plus",
//         genericName: "Paracetamol",
//         dosage: "50mg",
//         frequency: "1 + 0 + 1",
//         startDate: "01/01/2022",
//     },
//     {
//         name: "Tylenol",
//         genericName: "acetaminophen",
//         dosage: "10mg",
//         frequency: "0 + 0 + 1",
//         startDate: "01/10/2021",
//     },
//     {
//         name: "Humulin N",
//         genericName: "insulin",
//         dosage: "100mg",
//         frequency: "1 + 0 + 0",
//         startDate: "01/08/2021",
//     },
//     {
//         name: "Phoslo",
//         genericName: "calcium acetate",
//         dosage: "50mg",
//         frequency: "1 + 0 + 1",
//         startDate: "01/08/2021",
//     }
// ];

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

export default function Medications() {
    const [medicines , setMedicines] = React.useState(getMedicines())
    const [value, setValue] = React.useState(0);

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '7b06c8ef90msh327a557ef6b983cp1f96e9jsn0c7d8ccac890',
    //             'X-RapidAPI-Host': 'myhealthbox.p.rapidapi.com'
    //         }
    //     };
    //
    //     fetch('https://myhealthbox.p.rapidapi.com/search/updatedDocuments?sd=2020-06-01&c=us&l=en', options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));
    //
    // }, []);

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
                {medicines.map((medicine, index) => {
                    return (
                        <Tab key={index + Math.random().toString()} label={<SingleMedicine medicine={medicine}/>} {...a11yProps(index)} />
                    )
                })}
            </Tabs>
            {medicines.map((medicine, index) => {
                return (
                    <TabPanel key={index + Math.random().toString()} value={value} index={index}>
                        <MedicineDetails medicine={getMedicineDetails(medicine.id)!}/>
                    </TabPanel>
                )
            })}

        </Box>
    );
}