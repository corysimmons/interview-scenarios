type Scenario = {
  name: string,
  reason: string,
  age: {
    value: number[], // [min, max]... if only 1 then that's the value
    operator?: string,
  },
  insurance: {
    value: string[],
    operator: string,
  },
  orders: string[]
}

const scenarios: Scenario[] = [
  {
    name: 'scenario 1',
    reason: 'annual exam',
    age: {
      value: [36],
    },
    insurance: {
      value: ['medicare'],
    },
    orders: ['folic acid', 'complete blood count'],
  },
  {
    name: 'scenario 2',
    reason: 'annual exam',
    age: {
      value: [41],
      operator: '>',
    },
    insurance: {
      value: ['medicare', 'aetna'],
    },
    orders: ['complete blood count', 'cancer screen'],
  },
  {
    name: 'scenario 3',
    reason: 'annual exam',
    age: {
      value: [20, 40]
    },
    insurance: {
      value: ['medicare'],
      operator: 'not',
    },
    orders: ['complete blood count', 'diabetes monitoring', 'cancer screen'],
  },
  {
    name: 'scenario 4',
    reason: 'post operation hip',
    age: {
      value: [-1],
    },
    insurance: {
      value: ['*'],
    },
    orders: ['xray hip', 'stitch removal'],
  },

  // Custom
  {
    name: 'scenario 5',
    reason: 'annual exam',
    age: {
      value: [36],
    },
    insurance: {
      value: ['medicare'],
    },
    orders: ['xray hip', 'stitch removal', 'complete blood count'],
  },
]

export default scenarios