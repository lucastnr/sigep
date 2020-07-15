import React from "react"
import "../styles/main.css"

import Home from "../components/Home/Home"
import Layout from "../components/Layout/Layout"

export default function HomePage() {
  return (
    <Layout pageContent={<Home />} />
  )
}