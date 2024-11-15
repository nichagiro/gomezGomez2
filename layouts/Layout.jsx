import React, { useMemo } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { CELL_PHONES, PHONES, WHATSAPP } from 'global/contact'
import avatar from "../public/assets/img/avatarWhatsapp.webp"

const Layout = ({ children }) => {
  const contactNumbers = useMemo(() => [...CELL_PHONES, ...PHONES], [])

  const chatMessage = useMemo(
    () =>
      `¿Necesitas ayuda con tu trasteo? 📦💪 Escríbenos por WhatsApp o llamanos y te ayudamos. 🚛✨ ¡Estamos listos para hacer tu mudanza fácil y rápida!: 
    \n${contactNumbers.map(item => `📲 ${item} \n`).join('')}`
    , [contactNumbers])

  return (
    <>
      <Nav />
      <main>
        {children}
      </main>
      <FloatingWhatsApp
        phoneNumber={WHATSAPP}
        accountName='Elizabeth Gómez'
        statusMessage='Asesora Comercial'
        chatMessage={chatMessage}
        chatboxHeight={500}
        avatar={avatar.src}
      />
      <Footer />
    </>
  )
}

export default Layout