export type ItemsT = {
  name: string;
  items?: Array<ItemsT>;
  details?: string;
  heading?: string;
};
export type NavOptionsT = { [key: string]: ItemsT };

const bathRoomStuff = [
  { name: "Tooth Brush" },
  { name: "Tooth Paste" },
  { name: "Dental Floss" },
];
const electronics = [
  { name: "Recharge Batteries" },
  { name: "Head Lamps" },
  { name: "Air Pump" },
];
const electronicsCamping = [
  ...electronics,
  { name: "Air Pump" },
  { name: "Speaker" },
];

const hydration = [{ name: "Water" }, { name: "Electrolytes" }];
const firstAidItems = [{ name: "Duck Tape", details: "Stick stuff together" }];
const firstAid = [{ name: "First Aid Kit", items: [...firstAidItems] }];
const toiletries = [
  { name: "Toilet Paper" },
  { name: "Wet wipes" },
  { name: "Hand Sanitizer" },
];
export const navOptions: NavOptionsT = {
  hiking: {
    name: "Hiking",
    items: [...hydration, ...toiletries, ...firstAid, ...electronics],
  },
  climbing: { name: "Climbing" },
  canyoneering: {
    name: "Canyoneering",
    items: [
      ...hydration,
      ...toiletries,
      ...firstAid,
      ...electronics,
      { name: "Harness" },
      { name: "Rappel Device" },
      { name: "Personal Anchor System" },
      { name: "Carabiners" },
      { name: "Figure 8" },
      { name: "Quick Links" },
    ],
  },
  camping: {
    name: "Camping",
    items: [
      ...hydration,
      ...bathRoomStuff,
      ...toiletries,
      ...firstAid,
      ...electronicsCamping,
      { name: "Tent" },
      { name: "Tent Floor Tarp" },
      { name: "Bug Spray" },
    ],
  },
  hotel: { name: "Hotel", items: [...bathRoomStuff] },
  oneNight: {
    name: "1 Night",
    heading: "Red Rock Trifecta",
    items: [
      { name: "Gatorade Powder - 3 containers" },
      { name: "6 power bars" },
      { name: "indica" },
      { name: "Tent" },
      { name: "Tent Floor Tarp" },
      { name: "Bug Spray" },
      { name: "Air Mattress" },
      { name: "Sleeping Bag" },
      { name: "hand warmers" },
      { name: "pj's tick" },
      { name: "3 battery packs - small, medium, large" },
      { name: "mini pack" },
      { name: "sunscreen - face" },
      { name: "sunscreen - body" },
    ],
  },
};
