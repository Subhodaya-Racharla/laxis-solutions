// Single source of truth for legal business details.
// Must match the Udyam Registration Certificate exactly.
export const BUSINESS = {
  name: "Laxis Solutions",
  owner: "Racharla Subhodaya",
  udyam: "UDYAM-AP-18-0060313",
  addressLines: [
    "2-45, Arundhathi Street, Ankampalem",
    "Atreyapuram Mandal, Ravulapalem",
    "Konaseema District, Andhra Pradesh – 533236, India",
  ],
  addressOneLine:
    "2-45, Arundhathi Street, Ankampalem, Atreyapuram Mandal, Ravulapalem, Konaseema District, Andhra Pradesh – 533236, India",
  phone: "+91 74162 14865",
  phoneHref: "tel:+917416214865",
  email: "subhodaya.r@gmail.com",
  website: "https://laxis.solutions",
} as const;

export const LEGAL_LAST_UPDATED = "26 October 2026";
