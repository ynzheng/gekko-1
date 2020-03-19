const randomExt = require('random-ext');

const config = {
  stratName: 'neuralnet',
  gekkoConfig: {
    watch: {
      exchange: 'bitfinex',
      currency: 'USD',
      asset: 'BTC'
    },

//    daterange: 'scan',

    daterange: {
      from: '2019-01-01 00:00',
      to: '2020-02-01 00:00'
    },

    simulationBalance: {
      'asset': 1,
      'currency': 1
    },

    slippage: 0.05,
    feeTaker: 0.25,
    feeMaker: 0.15,
    feeUsing: 'taker', // maker || taker

  },
  apiUrl: 'http://localhost:3000',

  // Population size, better reduce this for larger data
  populationAmt: 20,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 0.5,

  // How many components maximum to mutate at once
  mutateElements: 7,

  // How many parallel queries to run at once
  parallelqueries: 5,

  // Min sharpe to consider in the profitForMinSharpe main objective
  minSharpe: 0.5,

  // profit || score || profitForMinSharpe
  // score = ideas? feedback?
  // profit = recommended!
  // profitForMinSharpe = same as profit but sharpe will never be lower than minSharpe
  mainObjective: 'profitForMinSharpe',

  // optionally recieve and archive new all time high every new all time high
  notifications: {
    email: {
      enabled: false,
      receiver: 'destination@some.com',
      senderservice: 'gmail',
      sender: 'origin@gmail.com',
      senderpass: 'password',
    },
  },

  candleValues: [5,10,15,30,60,120,240],
  getProperties: () => ({

    historySize: randomExt.integer(100, 70),
  threshold_buy: randomExt.float(0,0.5).toFixed(2),
  threshold_sell: randomExt.float(0,-0.5).toFixed(2),
  method: 'adadelta',
  learning_rate: randomExt.integer(3,0),
  momentum: 1.89,
  decay: 0.13,                                                                            
  stoploss_enabled: false,                                                                
  stoploss_threshold: 0.85,                                                               
  hodl_threshold: randomExt.integer(10,6),
  price_buffer_len: 100,                                                                  
  min_predictions: 1100,

    candleSize: randomExt.pick(config.candleValues)
  })
};

module.exports = config;