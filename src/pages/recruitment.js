import React from 'react'

import Layout from "../components/Layout/Layout"
import Recruitment from "../components/Recruitment/Recruitment"
import Helmet from "react-helmet"

export default function RecruitmentPage() {
  return (
    <>
      <Helmet title="Sigep | Recruitment" />
      <Layout pageContent={Recruitment} />
    </>
  )
}