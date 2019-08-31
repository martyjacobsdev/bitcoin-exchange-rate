exports.bitcoinrate = function(currency, value) {

  const https = require("https");
  const url = 'https://blockchain.info/tobtc?currency=' + currency + '&value=' + value;

  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      console.log(body);
    });
  });

}
