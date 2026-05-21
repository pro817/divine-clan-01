import type { Gender } from "@/data/weapons";
import { weaponCodeMap } from "@/data/weapons";

export function getGenderCode(gender: Gender) {
  return gender === "male" ? "M" : "F";
}

export function getProfileCode(resultId: string, gender: Gender, weapon: string) {
  const weaponCode = weaponCodeMap[weapon];
  if (!weaponCode) throw new Error(`Unsupported weapon: ${weapon}`);
  return `${resultId}-${getGenderCode(gender)}-${weaponCode}`;
}

export function getProfileImageUrl(profileCode: string) {
  return `/profile-images/${profileCode}.png`;
}

export async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}
