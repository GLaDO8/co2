import { RebreathedAirFormula } from "./RebreathedAirFormula";
import type { PlaceCardData, TimelineCardData } from "./types";

export const heroIntro =
  "Carbon dioxide is commonly known for it's macro effects as a greenhouse gas, but most aren't aware of what elevated levels of CO2 does an individual.";

export const placesIntro =
  "Lets' explore CO2 levels in common places you breathe in.";

export const timelineCards: TimelineCardData[] = [
  {
    range: "400-600ppm",
    title: "The clarity of fresh air",
    body: [
      "Your brain is at peak performance, cerebral blood flows smoothly, pH is balanced. This is the air we evolved to breathe.",
    ],
  },
  {
    range: "600-1000ppm",
    title: "Brain fog threshold",
    body: [
      "You're in a packed meeting room, someone closed the door 30 minutes ago. Human's exhale CO2 at 40,000ppm. With little air entering the room, You're gradually inhaling what others have exhaled, about 1% of what you breathe.",
      <RebreathedAirFormula key="rebreathed-air-formula" />,
      "Cognitive impairment has started to creep in. Students would score 15% less on an average at these levels. Physical symptoms begin here. You might feel,",
    ],
    citationArrowParagraph: 1,
    bullets: [
      { text: "Subtle fatigue" },
      { text: "Slight headache" },
      { text: "Heaviness in the room" },
    ],
  },
  {
    range: "1000-1500ppm",
    title: "Stuffy room syndrome",
    body: [
      "The meeting has been running for an hour. CO2 levels are close to 1500 and cognitive function has dropped by 50% and that headache is increasing.",
    ],
    accordion: {
      title: "## What's going on?",
      subtitle: "click again to collapse",
      content: {
        intro:
          "CO2 dissolves in the blood to form carbonic acid, decreasing pH levels of your blood. It's also a vasodilator, it widens your blood vessels and increases blood flow to your brain. The combined effect drops brain pH, causing",
        bullets: [
          { text: "Headaches, slowed thinking and drowsiness" },
          { text: "Confusion, memory problems and reduced alertness" },
        ],
        outro: "This is called respiratory acidosis.",
      },
    },
  },
  {
    range: "1500-2500ppm",
    title: "Flu is imminent",
    body: [
      "The disease risk has escalated, You're now breathing about 5% rebreathed air, increasing risk of air-borne disease transmission. You aren't getting sick because it's flu season, your workspace likely has elevated CO2 levels. Lets extrapolate this.",
    ],
    rebreathedAirGraph: {
      bars: [
        { ppm: "400-600", rebreathedAir: "0%" },
        { ppm: "1000", rebreathedAir: "1.5%" },
        { ppm: "1400", rebreathedAir: "2.5%" },
        { ppm: "2500", rebreathedAir: "5%" },
        { ppm: "5000", rebreathedAir: "11.5%" },
        { ppm: "10,000", rebreathedAir: "24%" },
      ],
    },
  },
];

export const placeCards: PlaceCardData[] = [
  {
    title: "Airplanes",
    range: "1500-2500ppm",
    imageSrc: "/places-airplanes.webp",
    imageAlt: "Dithered airplane image.",
    imageBackgroundClassName: "bg-[#36390E]",
  },
  {
    title: "Buses",
    range: "1500-2500ppm",
    imageSrc: "/places-buses.webp",
    imageAlt: "Dithered bus image.",
    imageBackgroundClassName: "bg-[#282B02]",
  },
  {
    title: "Bars & Clubs",
    range: "1500-2500ppm",
    imageSrc: "/places-bars-clubs.webp",
    imageAlt: "Dithered bars and clubs image.",
    imageBackgroundClassName: "bg-[#3D4005]",
  },
  {
    title: "Cars",
    range: "1500-2500ppm",
    imageSrc: "/places-cars.webp",
    imageAlt: "Dithered car image.",
    imageBackgroundClassName: "bg-[#282B02]",
  },
  {
    title: "Closed meeting rooms",
    range: "1500-2500ppm",
    imageSrc: "/places-closed-meeting-rooms.webp",
    imageAlt: "Dithered closed meeting room image.",
    imageBackgroundClassName: "bg-[#282B02]",
  },
];
