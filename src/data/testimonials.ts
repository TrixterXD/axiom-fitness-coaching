type Testimonial = {
  id: string;
  name: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "maya-r",
    name: "Maya R.",
    quote:
      "I used to guess what to do at the gym. Now I walk in with a plan and leave knowing what improved.",
    rating: 5,
  },
  {
    id: "jordan-l",
    name: "Jordan L.",
    quote: "The weekly check-ins helped me stay consistent, even when work got busy.",
    rating: 5,
  },
  {
    id: "sam-k",
    name: "Sam K.",
    quote:
      "I feel more confident under the bar because I finally understand what good form feels like.",
    rating: 5,
  },
  {
    id: "taylor-m",
    name: "Taylor M.",
    quote:
      "Having a shorter session to fall back on meant I could keep training on my busiest weeks.",
    rating: 5,
  },
  {
    id: "alex-d",
    name: "Alex D.",
    quote:
      "After months of lifting the same weights, we changed how I trained and my numbers started moving again.",
    rating: 5,
  },
  {
    id: "riley-p",
    name: "Riley P.",
    quote:
      "The feedback was specific enough that I always knew what to work on in my next session.",
    rating: 5,
  },
];
