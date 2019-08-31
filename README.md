# Bitcoin Exchange Rate

Bitcoin currency converter

<br>Supported currencies:</b>

`"USD", "JPY", "CNY", "SGD", "HKD", "CAD", "NZD", "AUD", "CLP", "GBP", "DKK", "SEK", "ISK", "CHF", "BRL", "EUR", "RUB",
"PLN", "THB",  "KRW", "TWD".`


## Install
Using npm:
```sh
npm i bitcoin-exchange-rate
```

## How to use
```
var btc = require('bitcoin-exchange-rate')

const currency = 'USD';
const amount = 1000;

btc.bitcoinrate(currency, amount)
```

## Result

Converted amount in bitcoin

Example output:

`0.10399998`

## API

This is a wrapper which calls the free [Blockchain.com](https://www.blockchain.com/api/exchange_rates_api) API

## License

Copyright (c) 2019 Marty Jacobs

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following
conditions:

No guarentees if the exchange rates are accurate and I waive all liability on how this software is used.

The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
