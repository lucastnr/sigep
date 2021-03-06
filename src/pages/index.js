import React from "react"

import Layout from "../components/Layout/Layout"
import Home from "../components/Home/Home"
import Helmet from "react-helmet"

export default function HomePage() {
  return (
    <>
      <Helmet title="Sigep | Home" />
      <Layout pageContent={Home} />
    </>
  )
}