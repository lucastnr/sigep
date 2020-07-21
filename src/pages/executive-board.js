import React from 'react'
//import "../../public/styles/main.css"

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