import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>HULU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      {/* NAVIGATION BAR */}

      <NavBar />

      {/* RESULT */}

    </div>
  )
}

export async function getServerSideProps(context) {
  
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());
  
  return {
    props: {
      results: request.results,
    }
  }
}

