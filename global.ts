import { MedicineDetails, Patient, Medicine } from "./models/medicine";

import supabase from "./db";


let patient : Patient ;
let medicines : Medicine[] = []
let medicineDetais : MedicineDetails[] = []
function setPatient(data : any){
    patient = {
        age : data.age,
        id : data.id,
        name : data.name,
        date : data.date,
        last_visit : data.last_visit
    }
    console.log("patient", patient);
    // print(patient)
    // patient.age = data.age;
    // patient.id = data.id;
    // patient.name = data.name;
    // patient.date = data.date;
    // patient.last_visit = data.last_visit;
}


function processPatientInfo(data : any[] | null){
    if(data == null)
        return;
    medicines = []
    medicineDetais = []
    data.forEach(element => {
        let el : any[] = element.prescribed_drugs
        el.forEach(med =>{
            // console.log(med)
            let m : any = med.Drug;
            medicineDetais.push({
                ...m,
                generic_name : m.general_name
            })
            medicines.push({
                name : m.brand_name,
                dosage : med.strength,
                frequency : med.dosage,
                genericName : m.general_name,
                startDate :  med.taking_from,
                id : m.id
                
            })
        })
    });
    medicines.sort((a, b)=>{
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    })
    console.log(medicines)
    console.log(medicineDetais)
    medicineDetais.forEach(async (m, i) =>{
        const res = await supabase.from('reacting_drugs').select().eq('id1', m.id).select('*,Drug!reacting_drugs_id2_fkey(*)');
        console.log(res)
        let reactions : {
            generic_name : string,
            reactions : string[]
        } [] = []
        res.data?.forEach(d =>{
            reactions.push({
                generic_name : d.Drug.general_name,
                reactions : d.reactions
            })
        })
        medicineDetais[i].reacting_drugs = reactions;
    })
}



function getMedicines(){
    return medicines;
}

function getPatient(){
    return patient;
}

function getMedicineDetails(id : number){
    return medicineDetais.find((e => e.id == id))
}

export {setPatient, getPatient, processPatientInfo, getMedicines, getMedicineDetails};