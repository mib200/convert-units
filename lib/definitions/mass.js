var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogram'
    , plural: 'Kilograms'
    }
  , to_anchor: 1000
}
, mt: {
    name: {
      singular: 'Metric Tonne'
    , plural: 'Metric Tonnes'
    }
  , to_anchor: 1000000
}, '10kg': {
    name: {
      singular: '10 Kilograms'
    , plural: '10 Kilograms'
    }
  , to_anchor: 10000
}, '15kg': {
    name: {
      singular: '15 Kilograms'
    , plural: '15 Kilograms'
    }
  , to_anchor: 15000
}, '35kg': {
    name: {
      singular: '35 Kilograms'
    , plural: '35 Kilograms'
    }
  , to_anchor: 35000
}, '50kg': {
    name: {
      singular: '50 Kilograms'
    , plural: '50 Kilograms'
    }
  , to_anchor: 50000
}, '70kg': {
    name: {
      singular: '70 Kilograms'
    , plural: '70 Kilograms'
    }
  , to_anchor: 70000
}, 'mound': {
    name: {
      singular: '40 Kilograms'
    , plural: '40 Kilograms'
    }
  , to_anchor: 40000
}, 'candy': {
    name: {
      singular: '356 Kilograms'
    , plural: '356 Kilograms'
    }
  , to_anchor: 356000
}, 'bales': {
    name: {
      singular: '170 Kilograms'
    , plural: '170 Kilograms'
    }
  , to_anchor: 170000
}, 'j34mound': {
    name: {
      singular: '37.32 Kilograms'
    , plural: '37.32 Kilograms'
    }
  , to_anchor: 37320
}, 'qt': {
    name: {
      singular: 'Quintal'
    , plural: 'Quintals'
    }
  , to_anchor: 100000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Ounce'
    , plural: 'Ounces'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
}, t: {
  name: {
    singular: 'Ton',
    plural: 'Tons',
  },
    to_anchor: 2000,
  },
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};
