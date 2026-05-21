export type Gender = "male" | "female";

export const weaponGroups = [
  {
    group: "라이플",
    items: ["AK-47", "SCAR", "ANR", "DRT-6", "GAL-1", "M4A1", "UAR"],
  },
  {
    group: "스나이퍼",
    items: ["AWP", "TRG-21", "윈체스터", "컴벳보우"],
  },
  {
    group: "특수총",
    items: ["KRISS", "MP7", "SG-12", "P90", "MP-X3"],
  },
] as const;

export const weaponCodeMap: Record<string, string> = {
  "AK-47": "AK47",
  "SCAR": "SCAR",
  "ANR": "ANR",
  "DRT-6": "DRT6",
  "GAL-1": "GAL1",
  "M4A1": "M4A1",
  "UAR": "UAR",

  "AWP": "AWP",
  "TRG-21": "TRG21",
  "윈체스터": "WINCHESTER",
  "컴벳보우": "COMBATBOW",

  "KRISS": "KRISS",
  "MP7": "MP7",
  "SG-12": "SG12",
  "P90": "P90",
  "MP-X3": "MPX3",
};

export const weaponLabelByCode: Record<string, string> = Object.fromEntries(
  Object.entries(weaponCodeMap).map(([label, code]) => [code, label])
);
