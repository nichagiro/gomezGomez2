import '@/styles/magnific-popup.css'
import '@/styles/animate.min.css'
import '@/styles/owl.carousel.min.css'
import '@/styles/owl.theme.default.min.css'
import '@/styles/swiper.min.css'
import '@/styles/bootstrap.min.css'
import '@/styles/style.css'
import '@/styles/pages.css'
import '@/styles/responsive.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script strategy='afterInteractive' src="assets/js/popper.min.js" />
    <Script strategy='afterInteractive' src="assets/js/swiper.min.js" />
    <Script strategy='afterInteractive' src="assets/js/plugins.js" />
    <Script strategy='afterInteractive' src="assets/js/wow.min.js" />
    <Script strategy='lazyOnload' src="assets/js/main.js" />
    <Script strategy='lazyOnload' src="assets/js/bootstrap.min.js" />
  </>
}

export default MyApp

