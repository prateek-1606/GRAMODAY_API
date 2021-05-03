# GRAMODAY_API

Every day prices of agriculture commodities change across different mandis/markets in the country. On Gramoday App, daily prices are reported by users whose occupation is mandi commission agent. Each mandi commission agent maps to one market commodity combination for which he creates a daily price report.

One market commodity combination can have a daily price report contributed by 2 users, in which case, an aggregate (average of values) report needs to be created which is available for consumption on the platform. 

The algorithm to generate the aggregate report is as below:
1.	Look for an existing report with marketID-cmdtyID in the DB [1].
2.	Convert the prices into base price based on the base unit [2]
3.	Calculate the mean of prices.
4.	Save the aggregated report with price per Kg.
5.	Return the reportID of the generated report.

## How to run localy:
1. Download the Source Code or Clone the repositry 
2. In the terminal type
 ```bash
 npm install
 ```
 ```bash
 npm start
 ```

