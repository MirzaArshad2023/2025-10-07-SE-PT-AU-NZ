const Sentiment = require("sentiment");
const sentiment = new Sentiment();
const result = sentiment.analyze("Economy is disaster.");
console.log(result); // Score: -2, Comparative: -0.666
