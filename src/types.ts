export type NavOptionT = { name: string };
export type NavOptionsT = { [key: string]: NavOptionT };

export const navOptions: NavOptionsT = {
  hiking: { name: "Hiking" },
  camping: { name: "Camping" },
  canyoneering: { name: "canyoneering" },
  hotel: { name: "Hotel" },
};
