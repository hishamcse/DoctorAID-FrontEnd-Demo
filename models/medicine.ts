export type Medicine = {
    name: string;
    genericName: string;
    dosage: string;
    frequency: string;
    startDate: string;
    id : number;
};

export type MedicineDetails = {
    brand_name : string,
    generic_name : string,
    company : string,
    dosage : string[],
    warnings : string[],
    other_remarks : string[],
    strengths : string[],
    side_effects : string[],
    description : string,
    uses : string[],
    id : number,
    reacting_drugs : {
        generic_name : string,
        reactions : string[]
    }[]
}
export type  Patient = {
    name : string,
    id : number,
    age : number,
    date : string,
    last_visit : string
}

export type Presciption = {
    date : string,
    id : number,
    diagnosis : string
}

export type PrescriptionDetails = {
    date : string,
    diagnosis : string,
    bp_low : number,
    bp_high : number,
    heart_rate : number,
    symptomps : string[],
    remarks : string[]
}