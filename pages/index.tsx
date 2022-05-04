import scenarios from '../scenarios'
import returnOrdersOfScenariosWithMatchingFingerprints from '../utils/returnOrdersOfScenariosWithMatchingFingerprints'

const fingerprint = {
  reason: 'annual exam',
  age: 36,
  insurance: 'medicare'
}

const Home = () => {
  return (
    <div>
      <pre>{JSON.stringify(returnOrdersOfScenariosWithMatchingFingerprints(scenarios, fingerprint), null, 2)}</pre>
    </div>
  )
}

export default Home