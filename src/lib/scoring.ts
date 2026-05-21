import { questions } from "@/data/questions";
import { results, type ResultId } from "@/data/results";

export type AnswerMap = Record<string, string>;

export type ScoreState = {
  play: Record<string, number>;
  comm: Record<string, number>;
  special: Record<string, number>;
  teamCore: number;
  toxic: number;
  mentalDown: number;
};

const basicResultMap: Record<string, ResultId> = {
  "P1-M1": "B01", "P1-M2": "B02", "P1-M3": "B03", "P1-M4": "B04", "P1-M5": "B05", "P1-M6": "B06",
  "P2-M1": "B07", "P2-M2": "B08", "P2-M3": "B09", "P2-M4": "B10", "P2-M5": "B11", "P2-M6": "B12",
  "P3-M1": "B13", "P3-M2": "B14", "P3-M3": "B15", "P3-M4": "B16", "P3-M5": "B17", "P3-M6": "B18",
  "P4-M1": "B19", "P4-M2": "B20", "P4-M3": "B21", "P4-M4": "B22", "P4-M5": "B23", "P4-M6": "B24",
  "P5-M1": "B25", "P5-M2": "B26", "P5-M3": "B27", "P5-M4": "B28", "P5-M5": "B29", "P5-M6": "B30",
  "P6-M1": "B31", "P6-M2": "B32", "P6-M3": "B33", "P6-M4": "B34", "P6-M5": "B35", "P6-M6": "B36",
};

function add(map: Record<string, number>, key?: string, amount = 1) {
  if (!key) return;
  map[key] = (map[key] ?? 0) + amount;
}

function topKey(map: Record<string, number>, fallback: string) {
  const entries = Object.entries(map);
  if (entries.length === 0) return fallback;
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0] ?? fallback;
}

function getSpecialWinner(scores: ScoreState) {
  const entries = Object.entries(scores.special).sort((a, b) => b[1] - a[1]);
  const [first, second] = entries;

  // 극단형: 팀의 중심축
  if ((scores.special.S1 ?? 0) + scores.teamCore >= 5 && scores.toxic <= 1 && scores.mentalDown <= 1) {
    return "S1";
  }

  // 극단형: 위험한 독주자
  if ((scores.special.S2 ?? 0) + scores.toxic >= 5 && scores.teamCore <= 2) {
    return "S2";
  }

  if (!first) return null;

  const firstScore = first[1];
  const secondScore = second?.[1] ?? 0;

  if (firstScore >= 3 && firstScore - secondScore >= 1) {
    return first[0];
  }

  return null;
}

export function calculateResult(answers: AnswerMap) {
  const scores: ScoreState = {
    play: {},
    comm: {},
    special: {},
    teamCore: 0,
    toxic: 0,
    mentalDown: 0,
  };

  for (const q of questions) {
    const selectedId = answers[q.id];
    const selected = q.options.find((o) => o.id === selectedId);
    if (!selected) continue;

    const weight = q.id === "Q9" ? 2 : 1;

    add(scores.play, selected.score.play, weight);
    add(scores.comm, selected.score.comm, 1);
    add(scores.special, selected.score.special, 1);
    scores.teamCore += selected.score.teamCore ?? 0;
    scores.toxic += selected.score.toxic ?? 0;
    scores.mentalDown += selected.score.mentalDown ?? 0;
  }

  const playType = topKey(scores.play, "P5");
  const commType = topKey(scores.comm, "M2");
  const special = getSpecialWinner(scores);

  const resultId = (special ?? basicResultMap[`${playType}-${commType}`] ?? "B26") as ResultId;
  return {
    resultId,
    resultData: results[resultId],
    playType,
    commType,
    scores,
  };
}
