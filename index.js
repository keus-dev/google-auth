import google from 'googleapis'
// import googleServiceAccountKey from './vast-logic-406014-858368001ca5.json' // see docs on how to generate a service account

// console.log(googleServiceAccountKey);
const googleJWTClient = new google.Auth.JWT(
  "test-sheet@vast-logic-406014.iam.gserviceaccount.com",
  null,
  "PRIVATE KEY",
  [
    'https://www.googleapis.com/auth/spreadsheets'
  ], // You may need to specify scopes other than analytics
  null,
)

googleJWTClient.authorize((error, access_token) => {
  if (error) {
    return console.error("Couldn't get access token", e)
  }
  console.log(access_token);
  // ... access_token ready to use to fetch data and return to client
  // even serve access_token back to client for use in `gapi.analytics.auth.authorize`
})