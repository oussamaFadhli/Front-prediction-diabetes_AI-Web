import React from 'react'
import { DashboardLayout } from '../layouts'
import { CreatePatientProfileForm } from '../components'

const CreatePatientProfile = () => {
  return (
    <>
    <DashboardLayout>
        <CreatePatientProfileForm/>
    </DashboardLayout>
    </>
  )
}

export default CreatePatientProfile