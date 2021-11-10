import Head from 'next/head'
import Feed from '../Components/Feed'
import Header from '../Components/Header'
import Modal from '../Components/Modal'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Agram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/*Header */}
      <Header/>

      {/* feed*/}
      <Feed/>

      {/* Modal*/}
      <Modal />

    </div>
  )
}
