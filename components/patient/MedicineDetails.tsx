import React from "react";
import {Medicine} from "../../models/medicine";
import {Divider} from "@mui/material";

const MedicineDetails:React.FC<{medicine: Medicine}> = (props) => {

    return (
        <div>
        <h4>Medicine Details</h4>
        <div>
            <h5>{props.medicine.name}
            <span style={{ color: "#bbb" }}>
                - {props.medicine.genericName}
            </span>
            </h5>
            <Divider />
            <br/>
            <br/>
            <p>
                <h5><b>Warnings</b></h5>
                <Divider />
                <ul>
                <li>You should not use Tylenol if you have severe liver disease.</li>

                <li>An overdose of acetaminophen can damage your liver or cause death.</li>

                <li>Adults and teenagers who weigh at least 110 pounds should not take more than 1000 milligrams (mg) at one time,
                    or more than 4000 mg in 24 hours.</li>

                <li>Children younger than 12 years old should not take more than 5 doses in 24 hours, using only the number of
                    milligrams per dose that is recommended for the child's weight and age. Use exactly as directed on the label.</li>

                <li>Avoid also using other medicines that contain acetaminophen (sometimes abbreviated as APAP), or you could have
                    a fatal overdose.</li>

                <li>Call your doctor at once if you have nausea, pain in your upper stomach, itching, loss of appetite,
                dark urine, clay-colored stools, or jaundice (yellowing of your skin or eyes).</li>

                <li>Stop taking Tylenol and call your doctor right away if you have skin redness or a rash that spreads and
                    causes blistering and peeling</li>
                </ul>
                </p>
            <p>
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
            </p>
            <br/>
            <p>
                <h5><b>What other drugs will affect Tylenol?</b></h5>
                <Divider />
                Other drugs may interact with acetaminophen, including prescription and over-the-counter medicines,
                vitamins, and herbal products. Tell each of your health care providers about all medicines you use now and any medicine you start or stop using.
            </p>
        </div>
        </div>
    );
}

export default MedicineDetails;