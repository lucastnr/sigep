import React from 'react'

import Layout from "../components/Layout/Layout"
import Helmet from "react-helmet"
import Philanthropies from '../components/Philanthropies/Philanthropies'

export default function PhilanthropiesPage() {
  return (
    <>
      <Helmet title="Sigep | Philanthropies" />
      <Layout pageContent={Philanthropies}/>
    </>
  )
}