"use client"

import Script from 'next/script'
import { useState, useEffect } from 'react'



export default function CalendlyWidgetButton() {
  const [pageIsLoaded, setPageIsLoaded] = useState(false)

  const openCalendly = () => {
    if (pageIsLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/orestakisilrealestate" })
    }
  }

  useEffect(() => {
    setPageIsLoaded(true)
  }, [])

  return (
    pageIsLoaded &&
    <>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"
        />
      </head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <button className="oresta-action-orange py-3 px-5" onClick={openCalendly}>Book a Free Consultation</button>
    </>
  )
}
