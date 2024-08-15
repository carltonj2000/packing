export type ItemsT = { name: string; items?: Array<ItemsT>; details?: string };
export type NavOptionsT = { [key: string]: ItemsT };

const bathRoomStuff = [
  { name: "ToothBrush" },
  { name: "ToothPaste" },
  { name: "Dental Floss" },
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
    items: [...hydration, ...toiletries, ...firstAid],
  },
  climbing: { name: "Climbing" },
  canyoneering: {
    name: "Canyoneering",
    items: [
      ...hydration,
      ...toiletries,
      ...firstAid,
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
      { name: "Tent" },
      { name: "Tent Floor Tarp" },
      { name: "Bug Spray" },
    ],
  },
  hotel: { name: "Hotel", items: [...bathRoomStuff] },
};
