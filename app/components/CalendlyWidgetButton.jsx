"use client"

import Script from 'next/script'
import { useState, useEffect } from 'react'
import { CALENDLY_URL } from "@/lib/constants"



export default function CalendlyWidgetButton() {
  const [pageIsLoaded, setPageIsLoaded] = useState(false)

  const openCalendly = () => {
    if (pageIsLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
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
      <button className="oresta-action-orange py-3 px-5" onClick={openCalendly}>Let&apos;s Chat <br className="block min-[400px]:hidden" />Real Estate</button>
    </>
  )
}
