import * as React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {alpha, TextField} from '@mui/material';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PatientView from "../patient/PatientView";
import { getPatient } from '@/global';

const drawerWidth = 220;

// let patientInfo = {
//     id: 123,
//     name: 'John Doe',
//     age: 23,
//     date: '2023-02-18',
//     last_visit: '2022-10-10',
//     // address: '1234 Main St, New York, NY 10001',
// }

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: alpha(theme.palette.common.black, 0.45),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [patientInfo, setPatientInfo] = React.useState(getPatient())

    // React.useEffect(()=>{
    //     setPatientInfo(getPatient());
    //     console.log(getPatient())
    // }, []);
        
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 7,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1, width: '20ch'},
                            margin: 'auto'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Box sx={{display: 'flex'}}>
                            <div>
                                <div>
                                    <TextField
                                        disabled
                                        id="standard-disabled"
                                        label="Patient ID"
                                        defaultValue={patientInfo.id}
                                        variant="standard"
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                    />
                                    <TextField
                                        disabled
                                        id="standard-disabled"
                                        label="Patient Name"
                                        defaultValue={patientInfo.name}
                                        variant="standard"
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                    />
                                    <TextField
                                        disabled
                                        id="standard-disabled"
                                        label="Age"
                                        defaultValue={patientInfo.age}
                                        variant="standard"
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        disabled
                                        id="standard-disabled"
                                        label="Date"
                                        defaultValue={new Date(patientInfo.date).toDateString()}
                                        variant="standard"
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                    />
                                    <TextField
                                        disabled
                                        id="standard-disabled"
                                        label="Last Visit"
                                        defaultValue={new Date(patientInfo.last_visit).toDateString()}
                                        variant="standard"
                                        size="small"
                                        sx={{
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{pl: 4, pt: 2}}>
                    <Typography variant="h6" noWrap component="div">
                        Doctor&apos;s View
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider sx={{pt: 7}}/>
                <List>
                    {['Notifications', 'Edit Profile', 'Important'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{display: 'block'}}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Patient Profile', 'Reference', 'Create Prescription'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{display: 'block'}}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box component="main" sx={{flexGrow: 1, pt: 8, pl: 1}}>
                <DrawerHeader/>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        defaultActiveKey="medication"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="general" title="General" disabled>
                        </Tab>
                        <Tab eventKey="demography" title="Demography" disabled>
                        </Tab>
                        <Tab eventKey="test" title="Diagnostics" disabled>
                            <PatientView type={"diagnostics"}/>
                        </Tab>
                        <Tab eventKey="prescription" title="Prescriptions">
                            <PatientView type={"prescriptions"} />
                        </Tab>
                        <Tab eventKey="medication" title="Medications">
                            <PatientView type={"medications"} />
                        </Tab>
                        <Tab eventKey="search" title="Search" disabled>
                        </Tab>
                    </Tabs>
                </Box>
            </Box>
        </Box>
    );
}