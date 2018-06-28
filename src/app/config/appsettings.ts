/**
 * New typescript file
 */
const BASE_URL = "http://localhost:8080/CWSServices";

export const AppSettings = Object.freeze({
  EMAIL_API_ENDPOINT: BASE_URL + "/cwsemailservice/sendmail/",
  PAYMENT_API_ENDPOINT: BASE_URL + "/cwspaymentservice/payment/"
});