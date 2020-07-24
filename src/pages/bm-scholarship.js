import React from 'react'

import Layout from "../components/Layout/Layout"
import BmScholarship from "../components/BmScholarship/BmScholarship"
import Helmet from "react-helmet"

export default function BmScholarshipPage() {
  return (
    <>
      <Helmet title="Sigep | BM Scholarship" />
      <Layout pageContent={BmScholarship}/>
    </>
  )
}