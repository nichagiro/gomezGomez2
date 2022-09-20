import BackTopFloat from '@/components/custom/BackTopFloat'
import Loading from '@/components/custom/Loading'
import Map from '@/components/custom/Map'
import PhoneFloat from '@/components/custom/PhoneFloat'
import Whatsapp from '@/components/custom/Whatsapp'
import Attributes from '@/containers/home/Attributes'
import BannerContact from '@/containers/home/BannerContact'
import Form from '@/containers/home/Form'
import History from '@/containers/home/History'
import Services from '@/containers/home/Services'
import SliderIntro from '@/containers/home/SliderIntro'
import Valores from '@/containers/home/Valores'
import Footer from '@/layouts/Footer'
import Nav from '@/layouts/Nav'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function Home() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setLoad(false)
  }, [])

  const getSocials = () => {
    return {
      __html: `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Trasteos Gomez Gomez",
        "url": "https://trasteosgomezgomez.com/",
        "address": "Carrera 1G #46A - 23, Salomia",
        "sameAs": [
          "https://www.facebook.com/Empaques-Trasteos-G%C3%B3mez-G%C3%B3mez-209996329403407/",
          "https://www.instagram.com/trasteosgomezg/",
          "https://www.linkedin.com/in/nicolas-chamorro-gir%C3%B3n-9aa594196/"
        ]
      }
    `
    }
  }

  const getDataStructure = () => {
    return {
      __html: `
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "Trasteos Gomez Gomez",
          "image": [
            "https://trasteosgomezgomez.com/assets/img/1.webp",
            "https://trasteosgomezgomez.com/assets/img/2.webp",
            "https://trasteosgomezgomez.com/assets/img/3.webp"
          ],
          "datePublished": "2021-01-21T21:00:00+08:00",
          "dateModified": "2021-01-21T21:00:00+08:00",
          "author": [
            {
              "@type": "Organization",
              "name": "Trasteos Gomez Gomez",
              "url": "https://trasteosgomezgomez.com/"
            },
            {
              "@type": "Person",
              "name": "Nicolas Chamorro Giron",
              "url": "https://nichagiro.github.io/"
            },
            {
              "@type": "Organization",
              "name": "overweb",
              "url": "https://overweb.com.co/"
            }
          ]	
        }
      `
    }
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Mudanzas, trasteos, embalaje, bodegaje, camiones de carga, gomez gomez" />
        <meta name="description" content="Trasteos Gomez Gomez, servicio de mudanzas, trasnporte de calidad, alta productividad en bodegaje, embalaje, trasteos nacionales e internacionales." />
        <meta name="subject" content="Mudanzas y trasteos" />
        <meta name="author" content="Nicolas Chamorro" />
        <meta name="copyright" content="© Trasteos Gomez Gomez" />
        <meta name="language" content="es" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <title>Trasteos Gomez Gomez | Mudanzas | Bodegaje | Embalaje</title>
        <link rel="canonical" href="https://trasteosgomezgomez.com/" />
        <meta property="og:title" content="Trasteos Gomez Gomez | Mudanzas | Bodegaje | Embalaje" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trasteosgomezgomez.com/" />
        <meta property="og:site_name" content="Trasteos Gomez Gomez" />
        <meta property="og:image" content="https://trasteosgomezgomez.com/assets/img/3.webp" />
        <meta property="og:image:alt" content="Trasteos y mudanzas gomez" />
        <meta property="og:description" content="Trasteos Gomez Gomez, servicio de mudanzas, trasnporte de calidad, alta productividad en bodegaje, embalaje, trasteos nacionales e internacionales." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Trasteos Gomez Gomez | Mudanzas | Bodegaje | Embalaje" />
        <meta name="twitter:description/" content="Trasteos Gomez Gomez, servicio de mudanzas, trasnporte de calidad, alta productividad en bodegaje, embalaje, trasteos nacionales e internacionales." />
        <meta name="twitter:image" content="https://trasteosgomezgomez.com/assets/img/3.webp" />
        <meta name="twitter:site" content="@Nicolas63783814" />
        <meta name="twitter:creator" content="@Nicolas63783814" />
        <script type="application/ld+json" dangerouslySetInnerHTML={getDataStructure()} />
        <script type="application/ld+json" dangerouslySetInnerHTML={getSocials()} />
        <link rel="icon" type="image/jpg" href="/assets/img/favicon.png" />
      </Head>
      
      <Loading display={load} />

      <Nav />

      <main>
        <SliderIntro />
        <Attributes />
        <Services />
        <History />
        <Form />
        <Map />
        <BannerContact />
        <Valores />
      </main>

      <PhoneFloat />
      <Whatsapp />
      <BackTopFloat />

      <Footer />

      <Script strategy='afterInteractive' src="assets/js/popper.min.js" />
      <Script strategy='afterInteractive' src="assets/js/swiper.min.js" />
      <Script strategy='afterInteractive' src="assets/js/plugins.js" />
      <Script strategy='afterInteractive' src="assets/js/wow.min.js" />
      <Script strategy='lazyOnload' src="assets/js/main.js" />
      <Script strategy='lazyOnload' src="assets/js/bootstrap.min.js" />
    </>
  )
}
