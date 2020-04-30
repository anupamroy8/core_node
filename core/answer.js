7. // Write respective headers object below.
//General header:
// Request URL: https://altcampus.io/
// Request Method: GET
// Status Code: 200 
// Remote Address: 128.199.85.71:443
// Referrer Policy: no-referrer-when-downgrade

// Response Header:
// access-control-allow-credentials: true
// access-control-allow-origin: *
// access-control-expose-headers: 
// cache-control: max-age=0, private, must-revalidate
// content-encoding: gzip
// content-type: text/html; charset=utf-8
// date: Tue, 21 Apr 2020 14:04:59 GMT
// server: nginx/1.10.3 (Ubuntu)
// status: 200
// x-content-type-options: nosniff
// x-content-type-options: nosniff
// x-download-options: noopen
// x-frame-options: SAMEORIGIN
// x-frame-options: DENY
// x-permitted-cross-domain-policies: none
// x-request-id: 2o3tlf87da3vh9uf1000ccr1
// x-xss-protection: 1; mode=block

//  Request Header:
// :authority: altcampus.io
// :method: GET
// :path: /
// :scheme: https
// accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// accept-encoding: gzip, deflate, br
// accept-language: en-US,en;q=0.9
// cookie: _ga=GA1.2.411751058.1582777181; track_uid=58b85316-629b-11ff-6b9a-5e0cf09422fc; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYSHludTlYcFpNTXh1WEd4SW5DWlZkdz09.AJnKVrp5I-C6ebNyVwK-ZTueRmKZf6xz5EyubpFUQ_s
// sec-fetch-dest: document
// sec-fetch-mode: navigate
// sec-fetch-site: none
// upgrade-insecure-requests: 1
// user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36



8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4

const url = require("url");
var myurl = "http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4";

console.log(url.parse(myurl, true));

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     query: 'token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     pathname: '/api/v3',
//     path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
//   }
  

9. // Write parsed query object

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     query: [Object: null prototype] {
//       token: '8372fcb8y2874b2t478t6t48cbtbc72t4'
//     },
//     pathname: '/api/v3',
//     path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
//   }
  