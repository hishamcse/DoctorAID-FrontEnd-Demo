import React from "react";
import {Medicine,  PrescriptionDetails} from "../../models/medicine";
import {Divider} from "@mui/material";

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

    return (
        <div style={{
            fontSize : "20px"
        }}>
        <h4>Prescription Details</h4>
        <div>
            <h5>Date
            <span style={{ color: "#bbb" }}>
                - {props.prescription.date}
            </span>
            </h5>
            <Divider />
            <br/>
            <br/>
            <h5>Diagnosis
            <span style={{ color: "#bbb" }}>
                - {props.prescription.diagnosis}
            </span>
            </h5>
            
            
            {Arr(props.prescription.symptomps, "Symptomps")}
            {Arr(props.prescription.remarks, "Remarks")}

            
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