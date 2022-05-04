const ageWorks = (fingerprint, scenario) => {
  // any age
  if (fingerprint.age === '*') {
    return true
  }

  // exact number age
  if (fingerprint.age === scenario.age.value[0]) {
    return true
  }

  // between min + max age
  if (scenario.age.value.length >= 2) {
    if (fingerprint.age <= scenario.age.value[0] && fingerprint.age[1] >= scenario.age.value[1]) {
      return true
    }
  }

  // age and operator (e.g. > 41)
  if (scenario.age.operator) {
    if (scenario.age.operator === '>') {
      if (scenario.age.value[0] > fingerprint.age) {
        return true
      }
    }
  }

  return false
}

const returnOrdersOfScenariosWithMatchingFingerprints = (scenarios, fingerprint) => {
  let result = []

  // Loop through every scenario
  scenarios.forEach(scenario => {
    // Compare fingerprint keys to scenario keys
    if (scenario.reason === fingerprint.reason) {
      // If they match then see if the fingerprint age works
      if (ageWorks(fingerprint, scenario)) {
        // return the scenario if so
        result.push(scenario)
      }
    }
  })

  return result
    .map(x => x.orders)
    .flat()
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr)
      }
      return acc
    }, [])
}

export default returnOrdersOfScenariosWithMatchingFingerprints