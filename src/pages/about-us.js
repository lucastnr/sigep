import React from 'react'

import Layout from "../components/Layout/Layout"
import AboutUs from "../components/AboutUs/AboutUs"
import Helmet from "react-helmet"

export default function AboutUsPage() {

  return (
    <>
      <Helmet title="Sigep | About Us" />
      <Layout pageContent={AboutUs} />
    </>
  )
}