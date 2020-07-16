import React from 'react'
//import "../../public/styles/main.css"

import Layout from "../components/Layout/Layout"
import ExecutiveBoard from "../components/ExecutiveBoard/ExecutiveBoard"

export default function ExecutiveBoardPage() {
  return <Layout pageContent={<ExecutiveBoard />} />
}