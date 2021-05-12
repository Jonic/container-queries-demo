import Card from '../components/Card'
import Container from '../components/Container'
import Fonts from '../components/Fonts'
import Grid from '../components/Grid'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  const cardData = {
    category: 'Profile',
    comments: 0,
    date: '30th Apr 2021',
    description: 'Software engineer and content creator Estefannie talks about electronics, her community, and giving away free tech.',
    title: 'Meet Estefannie Explains it All',
    url: 'https://www.raspberrypi.org/blog/meet-estefannie-explains-it-all/',
  }

  return (
    <>
      <Head>
        <title>Container Queries Demo</title>
        <link rel="icon" href="/favicon.ico" />

        <Fonts />
      </Head>

      <Header title="Container Queries!">
        Currently only works in <a href="https://www.google.com/chrome/canary/">Chrome Canary</a> with
        the <a href="chrome://flags/#enable-container-queries">container queries flag</a> enabled.
      </Header>

      <Main>
        <Container size="sm">
          <h2>Small Container</h2>
          <Card {...cardData} />
        </Container>

        <Container size="md">
          <h2>Medium Container</h2>
          <Card {...cardData} />
        </Container>

        <Container size="lg">
          <h2>Large Container</h2>
          <Card {...cardData} />
        </Container>

        <Container size="xl">
          <h2>Extra-large Container</h2>
          <Card {...cardData} />
        </Container>

        <Container>
          <h2>Grid</h2>

          <Grid>
            <Card {...cardData} />
            <Card {...cardData} />
            <Card {...cardData} />
            <Card {...cardData} />
            <Card {...cardData} />
            <Card {...cardData} />
            <Card {...cardData} />
            <Card {...cardData} />
          </Grid>
        </Container>
      </Main>
    </>
  )
}
