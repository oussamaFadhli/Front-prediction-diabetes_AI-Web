import { DashboardLayout } from "../layouts"
import {EducationPatientsTable} from '../components'
const MedicineEducationPatientPage = () => {
  return (
    <>
    <DashboardLayout>
        <EducationPatientsTable API='/education-patients/' Title='Patients Description'/>
    </DashboardLayout>
    </>
  )
}

export default MedicineEducationPatientPage