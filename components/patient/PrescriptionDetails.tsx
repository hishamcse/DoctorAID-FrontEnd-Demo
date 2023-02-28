import React from "react";
import {Medicine,  PrescriptionDetails} from "../../models/medicine";
import {Divider} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

function Arr(cont : string[], title : string){
    return (
    <p>
        <h5><b>{title}</b></h5>
        <Divider />
        <ul>
        {
            cont.map((w, index)=><li  key={index + Math.random().toString()} >{w}</li>)
        }
        </ul>
    </p>
    )
}

function customCard(cont : string, title : string){
    return (
        <React.Fragment>
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <hr/>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {cont}
                </Typography>
            </CardContent>
        </React.Fragment>
    )
}

function Arr2(cont : Medicine[], title : string){
    return (
        <p>
            <h5><b>{title}</b></h5>
            <Divider />
            <br/>
            <div style={{display: "flex", width: "100%"}}>
            {
                cont.map((w, index)=>{
                    return (
                        <div key={index + Math.random().toString()} >
                           <Box key={index + Math.random().toString()} sx={{ width: "90%"}}>
                             <Card variant="outlined">{customCard2(w)}</Card>
                           </Box>
                            &nbsp;
                        </div>
                    )
                })
            }
            </div>
        </p>
    )
}

function customCard2(cont : Medicine){
    const dateStr = new Date(cont.startDate).toDateString();

    return (
        <React.Fragment>
            <CardContent sx={{bgcolor: '#F2F4F3'}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {dateStr}
                </Typography>
                <Typography variant="h5" component="div">
                    {cont.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {cont.genericName}
                </Typography>
                <Typography variant="body2">
                    {cont.dosage}
                    <br />
                    {cont.frequency}
                </Typography>
            </CardContent>
        </React.Fragment>
    )
}

function Description( title : string, d : string){
    return (
        <p>
            <h5><b>{title}</b></h5>
            <Divider />
            {
                d
            }
        </p>
    )
}

const PresciptionDetails:React.FC<{prescription: PrescriptionDetails}> = (props) => {

    const bp = props.prescription.bp_high + " / " + props.prescription.bp_low + " mmHg";
    const dateStr = new Date(props.prescription.date).toDateString();

    return (
        <div style={{
            fontSize : "20px"
        }}>
        <h4>Prescription Details</h4>
        <div>
            <h5>Date
            <span style={{ color: "#bbb" }}>
                - {dateStr}
            </span>
            </h5>
            <Divider />
            <br/>
            <h5><b>Diagnosis</b><br/>
                <Divider />
            <span>
                {props.prescription.diagnosis}
            </span>
            </h5>
            <br/>

            <Box sx={{ minWidth: 250, display: "flex" }}>
                <Card variant="outlined">{customCard(bp, "Blood Pressure")}</Card>
                &nbsp;&nbsp;
                <Card variant="outlined">{customCard(props.prescription.heart_rate.toString(),"Heart Rate")}</Card>
            </Box>
            <br/>

            {Arr(props.prescription.symptomps, "Symptoms")}
            {Arr(props.prescription.remarks, "Remarks")}
            {Arr2(props.prescription.prescribed_drugs, "Medicines")}

            
            {/* <p>
                <br/>
                <h5><b>Side Effects</b></h5>
                <Divider />
                <ul>
                <li>Acetaminophen may cause liver damage. This damage may be severe and lead to liver failure, liver transplant,
                    or death. The risk is greater if you drink alcohol while using acetaminophen. Do not use more than the recommended
                    dose of acetaminophen, and avoid alcohol. Acetaminophen is contained in many combination medicines. Read the label
                    of any medicine you are taking to see if it contains acetaminophen. If it does, do not take more than the recommended
                    dose of acetaminophen.</li>
                </ul>
            </p> */}
            <br/>
            {/* <p>
                <h5><b>What other drugs will affect Tylenol?</b></h5>
                <Divider />
                Other drugs may interact with acetaminophen, including prescription and over-the-counter medicines,
                vitamins, and herbal products. Tell each of your health care providers about all medicines you use now and any medicine you start or stop using.
            </p> */}
        </div>
        </div>
    );
}

export default PresciptionDetails;