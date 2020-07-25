import React from 'react'

import Layout from "../components/Layout/Layout"
import EventsMixers from "../components/EventsMixers/EventsMixers"
import Helmet from "react-helmet"

export default function EventsMixersPage() {
  return (
    <>
      <Helmet title="Sigep | Events and Mixer" />
      <Layout pageContent={EventsMixers}/>
    </>
  )
}