
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sol Circle</title>
      </Head>
      <Navbar />
      <Welcome />
      <Footer/>
    </div>
  )
}
