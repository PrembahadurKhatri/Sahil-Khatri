// ---------------------------------------------------------------------------
// EmailJS configuration -- this is what lets the static Contact form actually
// deliver a message to your inbox with no backend server.
//
// Setup (one-time, ~5 minutes):
//   1. Create a free account at https://www.emailjs.com/
//   2. Email Services -> Add New Service -> connect your Gmail (or any inbox)
//      -> copy the generated Service ID into SERVICE_ID below.
//   3. Email Templates -> Create New Template. Use these variable names in
//      the template body so they match what Contact.jsx sends:
//        {{from_name}}   {{from_email}}   {{message}}   {{budget}}
//      Set the template's "To email" to your own address. Copy the
//      Template ID into TEMPLATE_ID below.
//   4. Account -> General -> "Public Key" -> copy into PUBLIC_KEY below.
//      (This key is meant to be exposed in client-side code -- EmailJS is
//      designed to work that way -- but do set up the template's allowed
//      origins/domain restrictions in the EmailJS dashboard before going
//      live, so only your deployed site's domain can send through it.)
//
// Until all three values below are filled in, the form will show a clear
// "not configured yet" error instead of silently failing.
// ---------------------------------------------------------------------------

export const EMAILJS_SERVICE_ID = "service_52p4yyp";
export const EMAILJS_TEMPLATE_ID = "template_xyy75dl";
export const EMAILJS_PUBLIC_KEY = "f2L8YB-FHgGV_TZAT";

export const isEmailjsConfigured =
  EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";
