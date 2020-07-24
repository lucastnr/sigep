import React from 'react'

import Layout from "../components/Layout/Layout"
import ExecutiveBoard from "../components/ExecutiveBoard/ExecutiveBoard"
import Helmet from "react-helmet"

export default function ExecutiveBoardPage() {
  return (
    <>
      <Helmet title="Sigep | Executive Board" />
      <Layout pageContent={ExecutiveBoard} />
    </>
  )
}