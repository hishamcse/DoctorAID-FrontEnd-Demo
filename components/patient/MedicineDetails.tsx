import React from "react";
import {Medicine, MedicineDetails} from "../../models/medicine";
import {Divider} from "@mui/material";

function Arr(cont : string[], title : string){
    return (
    <p>
        <h5><b>{title}</b></h5>
        <Divider />
        <ul>
        {
            cont.map(w=><li>{w}</li>)
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

const MedicineDetails:React.FC<{medicine: MedicineDetails}> = (props) => {

    return (
        <div style={{
            fontSize : "20px"
        }}>
        <h4>Medicine Details</h4>
        <div>
            <h5>{props.medicine.brand_name}
            <span style={{ color: "#bbb" }}>
                - {props.medicine.generic_name}
            </span>
            </h5>
            <h6>
               From: {props.medicine.company}
            </h6>
            <Divider />
            <br/>
            <br/>
            {Description("Description", props.medicine.description)}
            {Arr(props.medicine.dosage, "Dosage")}
            {Arr(props.medicine.warnings, "Warnings")}
            {Arr(props.medicine.strengths, "Strengths")}
            {Arr(props.medicine.side_effects, "Side Effects")}
            {Arr(props.medicine.uses, "Uses")}
            {
                props.medicine.reacting_drugs.length != 0 &&
                <p>
                    <h5><b>Reacing Drugs</b></h5>
                </p>
            }
            {props.medicine.reacting_drugs.map(d =>{
                return (
                    <p>
                        {d.generic_name}
                        <ul>
                            {
                                d.reactions.map(s => <li>{s}</li>)
                            }
                        </ul>
                    </p>
                )
            })}
            {/* {Arr(props.medicine.strengths, "Strengths")} */}

            
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

export default MedicineDetails;