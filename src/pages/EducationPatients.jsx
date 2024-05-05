import { DashboardLayout } from "../layouts"
import {EducationPatientsTable} from '../components'
const EducationPatients = () => {
  return (
    <>
    <DashboardLayout>
        <EducationPatientsTable API='/patient-education-patients/' Title='My Medical Description'/>
    </DashboardLayout>
    </>
  )
}

export default EducationPatients