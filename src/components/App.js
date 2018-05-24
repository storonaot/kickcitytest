import { Fragment } from 'react'
import Header from 'components/Header'
import Hero from 'components/Hero'
import TrendingEvents from 'components/TrendingEvents'
import Divider from 'components/Divider'

const App = () => (
  <Fragment>
    <Header />
    <main className="main">
      <Hero />
      <Divider horizontal />
      <TrendingEvents />
    </main>
  </Fragment>
)

export default App
