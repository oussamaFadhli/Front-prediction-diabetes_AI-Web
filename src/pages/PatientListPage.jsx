import React from 'react'
import {DashboardLayout} from '../layouts'
import { PatientsListTable } from '../components'
const PatientListPage = () => {
  return (
    <DashboardLayout>
        <PatientsListTable/>
    </DashboardLayout>
  )
}

export default PatientListPage