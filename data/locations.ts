import { canonicalUrl } from "../lib/site";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type LocationSlug = "pune" | "bangalore" | "vizag";

/**
 * Fields that must be confirmed with the branch before they can be published
 * or used in structured data. Nothing on a location page is allowed to invent
 * a value for one of these — if the flag is false, the field is either hidden
 * or replaced by a neutral "contact our team" message.
 */
export type VerifiableField =
  | "address"
  | "phone"
  | "whatsapp"
  | "hours"
  | "geo"
  | "mapUrl"
  | "googleBusinessProfile"
  | "photos"
  | "serviceList";

export type VerifiedFields = Record<VerifiableField, boolean>;

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type LocationContact = {
  /** Full postal address as supplied by the business. */
  address: string | null;
  /** Structured form of the same address, used for LocalBusiness JSON-LD. */
  postalAddress: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string | null;
    addressCountry: string;
  } | null;
  phone: string | null;
  whatsapp: string | null;
  /** Schema.org opening hours strings, e.g. "Mo-Sa 10:00-19:00". */
  hours: string[] | null;
  /** Human readable opening hours for display. */
  hoursLabel: string | null;
  latitude: number | null;
  longitude: number | null;
  mapUrl: string | null;
  googleBusinessProfileUrl: string | null;
  /** Only confirmed, official profiles belong here (used for sameAs). */
  officialProfiles: string[];
};

export type Location = {
  slug: LocationSlug;
  city: string;
  /** Second name the city is commonly searched by, e.g. Bengaluru. */
  alternateCityName: string | null;
  region: string;
  /** Visible <h1>. */
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  accent: string;
  hero: {
    eyebrow: string;
    lede: string;
  };
  /** Three short, city-specific statements shown in the gold band. */
  band: { label: string; note: string }[];
  intro: {
    heading: string;
    paragraphs: string[];
  };
  services: {
    heading: string;
    lede: string;
    cards: ServiceCard[];
  };
  whyChoose: {
    heading: string;
    lede: string;
    points: Highlight[];
  };
  faqIntro: string;
  faqs: Faq[];
  /** Neighbourhoods and towns people commonly travel from. */
  areasServed: string[];
  areasServedLabel: string;
  visit: {
    heading: string;
    lede: string;
  };
  contact: LocationContact;
  media: {
    heroImage: ImageAsset | null;
    galleryImages: ImageAsset[];
  };
  verifiedFields: VerifiedFields;
};

/* -------------------------------------------------------------------------- */
/* Verification defaults                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Everything starts unverified. Flip a flag to `true` only after the branch
 * has confirmed the value in writing. See README.md for the pre-launch list.
 */
const UNVERIFIED: VerifiedFields = {
  address: false,
  phone: false,
  whatsapp: false,
  hours: false,
  geo: false,
  mapUrl: false,
  googleBusinessProfile: false,
  photos: false,
  serviceList: false,
};

const serviceImages: ImageAsset[] = [
  {
    src: "https://americanhairclubs.com/wp-content/uploads/2026/03/2025-40-768x768-1.webp",
    alt: "Custom hair patch service at American Hair Club",
    width: 768,
    height: 768,
  },
  {
    src: "https://americanhairclubs.com/wp-content/uploads/2026/03/fi.webp",
    alt: "Hair extensions and hair replacement service",
    width: 768,
    height: 576,
  },
  {
    src: "https://americanhairclubs.com/wp-content/uploads/2026/03/Untitled-design-2025-09-24T150437.753-768x576-1.webp",
    alt: "Hair patch and hair replacement consultation",
    width: 768,
    height: 576,
  },
  {
    src: "https://americanhairclubs.com/wp-content/uploads/2026/03/Untitled-design-2025-09-25T111219.189-768x576-1.webp",
    alt: "Clip-in and clip-on hair system",
    width: 768,
    height: 576,
  },
  {
    src: "https://americanhairclubs.com/wp-content/uploads/2026/03/Untitled-design-2025-09-25T111203.699-768x576-1.webp",
    alt: "Tape hair extension service",
    width: 768,
    height: 576,
  },
  {
    src: "https://americanhairclubs.com/wp-content/uploads/2026/03/Untitled-design-2025-09-25T111141.803-768x576-1.webp",
    alt: "Micro and nano hair service",
    width: 768,
    height: 576,
  },
];

/* -------------------------------------------------------------------------- */
/* Locations                                                                  */
/* -------------------------------------------------------------------------- */

export const locations: Location[] = [
  {
    slug: "pune",
    city: "Pune",
    alternateCityName: null,
    region: "Maharashtra",
    pageTitle: "Hair Patch & Hair Replacement in Pune",
    metaTitle: "Hair Patch & Hair Replacement in Pune | American Hair Club",
    metaDescription:
      "Explore personalised hair patch and non-surgical hair replacement services in Pune from American Hair Club. Book a private consultation to discuss your hair restoration needs.",
    canonical: canonicalUrl("pune"),
    accent: "#c7a26b",
    hero: {
      eyebrow: "American Hair Club Pune",
      lede: "Private, appointment-only consultations in Hinjawadi for men and women considering a custom hair patch or a non-surgical hair replacement system.",
    },
    band: [
      { label: "Hinjawadi Phase II", note: "Inside Rajiv Gandhi Infotech Park" },
      { label: "By appointment", note: "One consultation at a time" },
      { label: "Men and women", note: "Patches, systems and extensions" },
    ],
    intro: {
      heading: "Understand your options before you decide.",
      paragraphs: [
        "If you have been researching hair patches or non-surgical hair replacement in Pune, you are probably looking for two things: a clear explanation of what is actually involved, and somewhere you can ask questions without feeling rushed. Our Hinjawadi studio is set up for exactly that. Consultations are one-to-one, held by appointment, and kept private, so you are never discussing something personal in a shared waiting area.",
        "There is no single system that suits everybody. The base material, attachment method and density that work for you depend on your scalp, the pattern and stage of your hair loss, how active your week is, and how much maintenance you are realistically willing to take on. Someone commuting daily between Hinjawadi and Wakad on a two-wheeler often needs something different from someone who mostly works from home.",
        "That is why we would rather you speak with our team first than choose a system from a description online.",
      ],
    },
    services: {
      heading: "What you can discuss at the Pune studio.",
      lede: "Every service below starts with the same thing — a look at your own hair and scalp, and an honest conversation about what will and will not work.",
      cards: [
        {
          id: "custom-hair-patches",
          title: "Custom hair patches",
          description:
            "Each patch is prepared to a template of your own scalp and matched to your hair colour, texture and wave, so the parting falls where it should instead of being corrected afterwards.",
        },
        {
          id: "non-surgical-hair-replacement",
          title: "Non-surgical hair replacement",
          description:
            "No surgery and no recovery period. We take you through what happens at each stage, how long the fitting appointment runs, and what changes about your daily routine afterwards.",
        },
        {
          id: "hair-systems-men",
          title: "Hair systems for men",
          description:
            "Options for a receding hairline, crown thinning or a more advanced pattern, weighed against how visible your parting is and how much heat and helmet time your commute involves.",
        },
        {
          id: "hair-systems-women",
          title: "Hair systems for women",
          description:
            "Discreet coverage for a widening parting or diffuse thinning, planned so it blends into your existing length and colour rather than sitting on top of it.",
        },
        {
          id: "hairline-density",
          title: "Hairline and density consultations",
          description:
            "Time spent on where your hairline should sit and how much density actually looks believable, before anything is ordered. A lower, denser hairline is not always the more natural choice.",
        },
        {
          id: "maintenance-refitting",
          title: "Maintenance and refitting guidance",
          description:
            "Practical advice on washing, drying, styling and storage, plus typical service intervals, so you can plan visits to Hinjawadi around your working week.",
        },
      ],
    },
    whyChoose: {
      heading: "Why people choose American Hair Club in Pune.",
      lede: "No pressure, no rush, and no commitment on the day you first walk in.",
      points: [
        {
          title: "Consultations stay private",
          description:
            "Appointments are spaced so you are not sharing the studio with another client while you talk about your hair.",
        },
        {
          title: "Matched to your own hair",
          description:
            "Colour, texture, wave pattern and density are assessed against your existing hair rather than a standard shade card.",
        },
        {
          title: "Natural-looking, not overdone",
          description:
            "We will tell you when a lower hairline or heavier density would draw attention instead of avoiding it.",
        },
        {
          title: "Maintenance explained upfront",
          description:
            "You will know what the routine involves and roughly how often a system needs servicing before you decide anything.",
        },
        {
          title: "Appointments in Hinjawadi",
          description:
            "A Pune address within Rajiv Gandhi Infotech Park, which suits people travelling from the western suburbs and the Pimpri-Chinchwad side.",
        },
      ],
    },
    faqIntro:
      "These are the points people raise most often before their first appointment in Hinjawadi. If yours is not here, bring it up on the day — no question is too basic.",
    faqs: [
      {
        question: "Where can I get a hair patch in Pune?",
        answer:
          "American Hair Club's Pune studio is in Hinjawadi Phase II, inside Rajiv Gandhi Infotech Park, which is convenient if you are travelling from Wakad, Baner, Aundh, Kothrud or the Pimpri-Chinchwad side. Consultations are by appointment. Please contact our team to confirm current appointment availability and branch details before you travel.",
      },
      {
        question: "How long does a hair patch consultation take?",
        answer:
          "Allow roughly forty-five minutes to an hour for a first consultation. That covers looking at your scalp and existing hair, going through the options that suit you, and answering your questions. If you decide to go ahead, the fitting is a separate appointment, because a custom system has to be prepared first.",
      },
      {
        question: "Is non-surgical hair replacement suitable for everyone?",
        answer:
          "It suits many people, but not everyone, and it is not a medical treatment for the cause of hair loss. If your hair loss is sudden, patchy, or accompanied by scalp irritation, we would suggest seeing a doctor first. Our team will say so during the consultation if we think a hair system is not the right fit for you.",
      },
      {
        question: "Will people be able to tell that I am wearing a hair system?",
        answer:
          "A well-matched system, fitted at a sensible density with the hairline in the right place, is designed to look natural in everyday settings. How convincing it looks depends on the match, the hairline placement and how well it is maintained, which is why we spend time on all three rather than promising a particular result.",
      },
      {
        question: "How do I maintain a hair system in Pune's climate?",
        answer:
          "The essentials are gentle cleaning, drying properly after you sweat, and keeping to your service schedule. If you commute on a two-wheeler and wear a helmet for long stretches, mention it at the consultation — it affects which attachment method we would suggest and how often the system needs attention.",
      },
      {
        question: "Do I need to bring anything to the consultation?",
        answer:
          "Nothing is essential. It helps to arrive with clean, dry hair and, if you have them, a couple of photographs of how your hair looked before the thinning began. If you already wear a hair system, bring it with you so we can see what has and has not worked for you so far.",
      },
      {
        question: "Can I visit the Pune studio without an appointment?",
        answer:
          "We would recommend booking first. Because consultations are private and one-to-one, appointments are scheduled to avoid overlap. Contact our team to confirm current appointment availability and branch details.",
      },
    ],
    areasServed: [
      "Hinjawadi",
      "Wakad",
      "Baner",
      "Aundh",
      "Kothrud",
      "Pimpri-Chinchwad",
    ],
    areasServedLabel:
      "Hinjawadi, Wakad, Baner, Aundh, Kothrud and the wider Pimpri-Chinchwad area",
    visit: {
      heading: "Visiting our Pune studio.",
      lede: "The studio sits inside Rajiv Gandhi Infotech Park in Hinjawadi Phase II, so it is straightforward to reach from the Mumbai-Bengaluru highway and the western suburbs.",
    },
    contact: {
      address:
        "Shop 82, 1st Floor, Rajiv Gandhi Infotech Park, VJ Happiness Street, Hinjawadi Phase II, Pune, Maharashtra",
      postalAddress: null,
      phone: null,
      whatsapp: null,
      hours: null,
      hoursLabel: null,
      latitude: null,
      longitude: null,
      mapUrl: null,
      googleBusinessProfileUrl: null,
      officialProfiles: [],
    },
    media: {
      heroImage: null,
      galleryImages: serviceImages,
    },
    verifiedFields: { ...UNVERIFIED },
  },

  {
    slug: "bangalore",
    city: "Bangalore",
    alternateCityName: "Bengaluru",
    region: "Karnataka",
    pageTitle: "Hair Patch & Hair Replacement in Bangalore",
    metaTitle: "Hair Patch & Hair Replacement in Bangalore | American Hair Club",
    metaDescription:
      "Discover personalised hair patch and non-surgical hair replacement services in Bangalore from American Hair Club. Book a private consultation for expert guidance.",
    canonical: canonicalUrl("bangalore"),
    accent: "#9aa879",
    hero: {
      eyebrow: "American Hair Club Bengaluru",
      lede: "An unhurried, appointment-only conversation about custom hair patches and non-surgical hair systems, at our studio off Silver Springs Layout Road.",
    },
    band: [
      { label: "East Bengaluru", note: "Off Silver Springs Layout Road" },
      { label: "Unhurried appointments", note: "No decision needed on the day" },
      { label: "Men and women", note: "Patches, systems and extensions" },
    ],
    intro: {
      heading: "A conversation first, a decision later.",
      paragraphs: [
        "Hair replacement is a personal decision and it deserves an unhurried conversation. At our Bengaluru studio, consultations are held by appointment and kept private, so you can talk openly about what is bothering you and what you would actually like to change.",
        "We begin by looking at your scalp and your existing hair rather than at a product catalogue. The stage of your hair loss, the shape of your hairline, the texture and colour of your own hair, and the way you spend your week all influence which approach makes sense. Someone on video calls for most of the working day in Whitefield or Koramangala tends to have different priorities from someone who is outdoors or at the gym regularly.",
        "For that reason we would far rather you come in, see the options in person and ask everything you want to ask, than pick a hair system from a website description.",
      ],
    },
    services: {
      heading: "What we can look at together in Bengaluru.",
      lede: "Each of these begins with an assessment of your own hair, not with a recommendation made in advance.",
      cards: [
        {
          id: "custom-hair-patches",
          title: "Custom hair patches",
          description:
            "Made to a template of your own scalp and matched to the colour, wave and density of your hair, so the result reads as your hair rather than as an addition to it.",
        },
        {
          id: "non-surgical-hair-replacement",
          title: "Non-surgical hair replacement",
          description:
            "No surgery, no anaesthetic and no downtime. We explain each stage, what you will see immediately after the fitting, and what to expect over the months that follow.",
        },
        {
          id: "hair-systems-men",
          title: "Hair systems for men",
          description:
            "From a first receding hairline through to full crown coverage, with base and attachment choices weighed against how much sweat, travel and gym time your routine involves.",
        },
        {
          id: "hair-systems-women",
          title: "Hair systems for women",
          description:
            "Coverage for a widening parting or overall thinning, designed to sit comfortably through a long working day and blend with your existing length.",
        },
        {
          id: "hairline-density",
          title: "Hairline and density consultations",
          description:
            "An honest discussion about where the hairline should start and how much density looks natural for your age and face shape, including where more would be too much.",
        },
        {
          id: "maintenance-refitting",
          title: "Maintenance and refitting guidance",
          description:
            "Guidance on cleaning, the effect of hard water, drying and storage, plus realistic service intervals so your Bengaluru appointments can be planned around work.",
        },
      ],
    },
    whyChoose: {
      heading: "Why people choose American Hair Club in Bengaluru.",
      lede: "Straight answers, a careful match, and no pressure to decide on the day.",
      points: [
        {
          title: "One-to-one, by appointment",
          description:
            "Consultations are booked so that you have the studio and our attention to yourself while you talk things through.",
        },
        {
          title: "Personalised matching",
          description:
            "Base type, hair colour, curl pattern and density are chosen against your own hair, in daylight, rather than from a catalogue image.",
        },
        {
          title: "Realistic about results",
          description:
            "We describe what a system can and cannot do, and we will tell you if something you have seen online is unlikely to look right on you.",
        },
        {
          title: "Aftercare you can actually follow",
          description:
            "Cleaning, drying and servicing explained in terms of your routine, including the water quality issues people in Bengaluru often ask about.",
        },
        {
          title: "Convenient east Bengaluru access",
          description:
            "The studio is off Silver Springs Layout Road, within reach of Marathahalli, Whitefield, Bellandur, Indiranagar and HSR Layout.",
        },
      ],
    },
    faqIntro:
      "A few things worth knowing before you visit our Bengaluru studio. Anything we have not covered can be asked in person, and you will get a straight answer.",
    faqs: [
      {
        question: "Where can I get a hair patch in Bangalore?",
        answer:
          "Our Bengaluru studio is on Silver Springs Layout Road in Silver Springs Layout, which is reachable from Marathahalli, Whitefield, Bellandur, Indiranagar and HSR Layout. Consultations are by appointment only. Contact our team to confirm current appointment availability and branch details before travelling.",
      },
      {
        question: "How does a hair replacement consultation work in Bangalore?",
        answer:
          "It follows a simple order. We look at your scalp and remaining hair, ask about how long the thinning has been happening and what you have already tried, explain the base types and attachment methods that would suit you, and then discuss maintenance. You are not asked to commit on the day, and you can take the information away and think about it.",
      },
      {
        question: "Does Bengaluru's hard water affect a hair system?",
        answer:
          "It is one of the questions we are asked most often. Mineral-heavy water can leave residue on a system and change how the hair feels over time, though the effect varies by area and by base type. Tell us what your water supply is like at home and we will suggest a rinsing and cleaning routine that works around it.",
      },
      {
        question: "Is a hair patch permanent?",
        answer:
          "No. A hair patch is a wearable system, not a permanent implant. It needs periodic servicing, and it is eventually replaced. How long a system lasts depends on the base material, how it is attached and how carefully it is looked after — we will give you an expected range for the specific system you choose rather than a general figure.",
      },
      {
        question: "Do you offer hair systems for women in Bengaluru?",
        answer:
          "Yes. We work with women experiencing diffuse thinning or a widening parting as well as men with pattern hair loss. The approach is the same: a private assessment first, then options matched to your own hair length, colour and styling habits.",
      },
      {
        question: "How do I maintain a hair system between appointments?",
        answer:
          "Broadly: clean it gently with the products recommended for your base type, dry it properly rather than leaving it damp, avoid dragging a brush through the attachment area, and keep to your servicing schedule. You will be shown the routine in person, and you are welcome to call if something is unclear later.",
      },
      {
        question: "What if I am not sure I want to go ahead?",
        answer:
          "That is a perfectly normal position to be in, and it is a good reason to book a consultation rather than a reason to avoid one. Many people come in simply to understand what non-surgical hair replacement involves. There is no obligation to proceed.",
      },
    ],
    areasServed: [
      "Silver Springs Layout",
      "Marathahalli",
      "Whitefield",
      "Bellandur",
      "Indiranagar",
      "HSR Layout",
    ],
    areasServedLabel:
      "Silver Springs Layout, Marathahalli, Whitefield, Bellandur, Indiranagar and HSR Layout",
    visit: {
      heading: "Visiting our Bengaluru studio.",
      lede: "The studio is off Silver Springs Layout Road in east Bengaluru, which keeps it within a reasonable drive of the Outer Ring Road corridor and the Whitefield side of the city.",
    },
    contact: {
      address:
        "2nd Floor, Saroj Square, No. 1, Silver Spring Layout Road, Silver Springs Layout, Bengaluru, Karnataka",
      postalAddress: null,
      phone: null,
      whatsapp: null,
      hours: null,
      hoursLabel: null,
      latitude: null,
      longitude: null,
      mapUrl: null,
      googleBusinessProfileUrl: null,
      officialProfiles: [],
    },
    media: {
      heroImage: null,
      galleryImages: serviceImages,
    },
    verifiedFields: { ...UNVERIFIED },
  },

  {
    slug: "vizag",
    city: "Vizag",
    alternateCityName: "Visakhapatnam",
    region: "Andhra Pradesh",
    pageTitle: "Hair Patch & Hair Replacement in Vizag",
    metaTitle: "Hair Patch & Hair Replacement in Vizag | American Hair Club",
    metaDescription:
      "Find personalised hair patch and non-surgical hair replacement services in Vizag and Visakhapatnam. Book a private consultation with American Hair Club.",
    canonical: canonicalUrl("vizag"),
    accent: "#c08d80",
    hero: {
      eyebrow: "American Hair Club Visakhapatnam",
      lede: "Private consultations on Waltair Main Road for anyone weighing up a custom hair patch or a non-surgical hair replacement system in Vizag.",
    },
    band: [
      { label: "Waltair Main Road", note: "Central Visakhapatnam" },
      { label: "Private consultations", note: "Booked one at a time" },
      { label: "Coastal-climate advice", note: "Wear and servicing explained" },
    ],
    intro: {
      heading: "Start where you are, not where a brochure says you should be.",
      paragraphs: [
        "People come to our Visakhapatnam studio at very different stages. Some arrive at the first sign of thinning, others after years of trying various things. Wherever you are in that process the consultation is the same: private, by appointment, and focused on your situation rather than on selling a particular product.",
        "Vizag's coastal climate is one of the things visitors ask about most. Humidity, sea breeze and regular exposure to salt air all affect how a hair system feels through the day and how often it needs servicing, so it is worth talking through your routine honestly before settling on a base type or an attachment method.",
        "There is no standard answer that fits everyone. Your scalp condition, the pattern of your hair loss, your work and how much upkeep you want to manage all matter, which is why we suggest speaking with our team here in Vizag before committing to any system.",
      ],
    },
    services: {
      heading: "What we can talk through in Visakhapatnam.",
      lede: "Practical, non-surgical options — explained in plain terms, with the trade-offs included.",
      cards: [
        {
          id: "custom-hair-patches",
          title: "Custom hair patches",
          description:
            "Built around a template of your scalp and matched to your natural hair, so the front line and parting are right from the start instead of being adjusted later.",
        },
        {
          id: "non-surgical-hair-replacement",
          title: "Non-surgical hair replacement",
          description:
            "An approach that avoids surgery altogether. We walk you through the fitting process, how long it takes and exactly what changes about your day-to-day routine.",
        },
        {
          id: "hair-systems-men",
          title: "Hair systems for men",
          description:
            "Choices covering early recession through to extensive thinning, with particular attention to how a humid, coastal climate affects comfort and wear.",
        },
        {
          id: "hair-systems-women",
          title: "Hair systems for women",
          description:
            "Solutions for thinning through the crown and parting, planned around your existing hair length and the way you normally style it.",
        },
        {
          id: "hairline-density",
          title: "Hairline and density consultations",
          description:
            "Careful thought about where the hairline should begin and what density will look right on you, so the result suits your face rather than simply covering an area.",
        },
        {
          id: "maintenance-refitting",
          title: "Maintenance and refitting guidance",
          description:
            "Clear advice on rinsing after time near the sea, drying, storage and the servicing intervals that suit Visakhapatnam's humidity.",
        },
      ],
    },
    whyChoose: {
      heading: "Why people choose American Hair Club in Vizag.",
      lede: "Calm, private guidance and a clear picture of what living with a hair system is really like.",
      points: [
        {
          title: "Private, unhurried consultations",
          description:
            "Appointments are booked individually, so the conversation happens at your pace and stays between you and our team.",
        },
        {
          title: "Matched to your natural hair",
          description:
            "Colour, texture and density are assessed against your own hair so the system blends rather than contrasts.",
        },
        {
          title: "Honest about the coastal climate",
          description:
            "We would rather explain how humidity and sea air affect wear and servicing beforehand than have you discover it afterwards.",
        },
        {
          title: "Aftercare guidance included",
          description:
            "You leave knowing how to clean, dry and store your system, and roughly when it will need attention.",
        },
        {
          title: "Central Visakhapatnam address",
          description:
            "The studio is on Waltair Main Road, convenient for MVP Colony, Dwaraka Nagar and Siripuram, and reachable for visitors travelling in from surrounding districts.",
        },
      ],
    },
    faqIntro:
      "Questions we are asked regularly by visitors to the Waltair Main Road studio. If something is still unclear afterwards, please ask us directly.",
    faqs: [
      {
        question: "Where can I get a hair patch in Vizag?",
        answer:
          "Our Visakhapatnam studio is on Waltair Main Road, which is central and convenient for MVP Colony, Dwaraka Nagar, Siripuram and Madhurawada, as well as for anyone travelling in from the surrounding districts. Consultations are by appointment. Contact our team to confirm current appointment availability and branch details before you travel.",
      },
      {
        question: "Can I book a private consultation in Visakhapatnam?",
        answer:
          "Yes. Every consultation here is private and by appointment. You will not be asked to discuss your hair in a shared waiting area, and there is no obligation to proceed with a system afterwards. Get in touch with our team to arrange a time.",
      },
      {
        question: "How does Vizag's humidity and sea air affect a hair system?",
        answer:
          "Humidity tends to affect how the hair behaves and how an adhesive or tape performs through the day, and salt air can leave deposits that shorten the interval between services. None of this rules out a hair system — it simply means the base type, attachment method and cleaning routine should be chosen with the coast in mind.",
      },
      {
        question: "Can I swim or spend time at the beach with a hair patch?",
        answer:
          "It depends on the attachment method you choose, so please raise it at the consultation. As a general rule, rinsing with fresh water soon after swimming and drying the system properly makes a noticeable difference. We will tell you plainly what your particular system can and cannot handle.",
      },
      {
        question: "How often does a hair system need servicing?",
        answer:
          "Servicing intervals vary with the attachment method, how quickly your own hair grows, and your daily routine. Rather than quote a single figure, we will set out a schedule for the specific system you choose during the consultation, so you can judge whether the upkeep fits your life before deciding.",
      },
      {
        question: "Is non-surgical hair replacement painful?",
        answer:
          "There is no surgery, no anaesthetic and no incision involved, so you should not experience pain during a fitting. Some people find a new system feels unfamiliar for the first few days. If anything feels uncomfortable or irritating at any point, tell us — it usually means something needs adjusting.",
      },
      {
        question: "What should I ask during my first consultation?",
        answer:
          "Useful questions include which base type suits your scalp, how the system will be attached, how often it needs servicing, what the routine looks like at home, and how long the system is expected to last. If anything is not clear, ask us to explain it again — that is what the appointment is for.",
      },
    ],
    areasServed: [
      "Waltair",
      "MVP Colony",
      "Dwaraka Nagar",
      "Siripuram",
      "Madhurawada",
      "Gajuwaka",
    ],
    areasServedLabel:
      "Waltair, MVP Colony, Dwaraka Nagar, Siripuram, Madhurawada and Gajuwaka",
    visit: {
      heading: "Visiting our Visakhapatnam studio.",
      lede: "The studio is on Waltair Main Road, close to the centre of the city and a short drive from the beach road and Dwaraka Nagar.",
    },
    contact: {
      address:
        "SevenHills Hospital, 2nd Floor, Flat No. 10, 29-10/11/1, Waltair Main Road, Visakhapatnam, Andhra Pradesh",
      postalAddress: null,
      phone: null,
      whatsapp: null,
      hours: null,
      hoursLabel: null,
      latitude: null,
      longitude: null,
      mapUrl: null,
      googleBusinessProfileUrl: null,
      officialProfiles: [],
    },
    media: {
      heroImage: null,
      galleryImages: serviceImages,
    },
    verifiedFields: { ...UNVERIFIED },
  },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function requireLocation(slug: LocationSlug): Location {
  const location = getLocation(slug);
  if (!location) throw new Error(`Unknown location slug: ${slug}`);
  return location;
}

export function otherLocations(slug: LocationSlug): Location[] {
  return locations.filter((location) => location.slug !== slug);
}

/** True only when the branch has explicitly confirmed the field. */
export function isVerified(location: Location, field: VerifiableField): boolean {
  return location.verifiedFields[field] === true;
}

/**
 * A LocalBusiness node is only honest once the branch has a confirmed address
 * *and* a confirmed way to contact it. Until both are verified, location pages
 * fall back to WebPage + BreadcrumbList + FAQPage only.
 */
export function canPublishLocalBusiness(location: Location): boolean {
  return (
    isVerified(location, "address") &&
    location.contact.postalAddress !== null &&
    isVerified(location, "phone") &&
    location.contact.phone !== null
  );
}

/** Fields still awaiting confirmation, for the pre-launch checklist. */
export function outstandingVerifications(location: Location): VerifiableField[] {
  return (Object.keys(location.verifiedFields) as VerifiableField[]).filter(
    (field) => !location.verifiedFields[field],
  );
}
