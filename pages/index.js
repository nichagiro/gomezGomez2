import Map from '@/components/custom/Map'
import MainHead from '@/components/seo/MainHead'
import Attributes from '@/containers/home/Attributes'
import BannerContact from '@/containers/home/BannerContact'
import Form from '@/containers/home/Form'
import History from '@/containers/home/History'
import Services from '@/containers/home/Services'
import SliderIntro from '@/containers/home/SliderIntro'
import Valores from '@/containers/home/Valores'
import Layout from '@/layouts/Layout'

export default function Home() {
  return (
    <>
      <MainHead />
      <Layout>
        <SliderIntro />
        <Attributes />
        <Services />
        <History />
        <Form />
        <Map />
        <BannerContact />
        <Valores />
      </Layout>
    </>
  )
}
