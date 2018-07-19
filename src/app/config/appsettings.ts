/**
 * New typescript file
 */
const BASE_URL = "http://localhost:8080/CWSServices";


export const AppSettings = Object.freeze({
  EMAIL_API_ENDPOINT: BASE_URL + "/cwsemailservice/sendmail/",
  SUBSCRIBE_API_ENDPOINT: BASE_URL + "/cwsemailservice/subscribemail/",
  PAYMENT_API_ENDPOINT: BASE_URL + "/cwspaymentservice/sendpayment/",
  HOMEPAGE_OUR_STORY_VIDEO: "https://www.youtube.com/embed/iHhcHTlGtRs",
  CONTACTUSMAIL_API_ENDPOINT: BASE_URL + "/cwsemailservice/contactemail/"
  
});