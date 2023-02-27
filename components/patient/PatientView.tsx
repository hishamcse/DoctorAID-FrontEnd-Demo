import React from "react";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Medications from "./Medications";

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));

const PatientView: React.FC<{type: string}> = (props) => {

    return (
        <div>
            {/*<h4>Recent {props.type}</h4>*/}
            <Medications />
        </div>
    );
}

export default PatientView;