export type QuestionCategory = "play" | "comm" | "special";

export type ScorePayload = {
  play?: string;
  comm?: string;
  special?: string;
  teamCore?: number;
  toxic?: number;
  mentalDown?: number;
};

export type QuestionOption = {
  id: string;
  text: string;
  score: ScorePayload;
};

export type Question = {
  id: string;
  category: QuestionCategory;
  title: string;
  description?: string;
  options: QuestionOption[];
};

/**
 * 주의:
 * - 화면에 보이는 A/B/C/D는 배열 순서 기준이다.
 * - 점수는 option.score 기준으로 계산한다.
 * - Q1~Q7, Q12~Q13, Q15, Q17, Q19~Q25는 현재 앱 동작용 문항으로 작성되어 있다.
 *   네가 확정 문항 전문을 별도로 넣으면 이 파일의 title/options.text만 교체하면 된다.
 * - Q8, Q9, Q10, Q11, Q14, Q16, Q18, Q26~Q30은 현재 대화에서 확정된 문항/표현을 반영했다.
 */
export const questions: Question[] = [
  {
    id: "Q1",
    category: "play",
    title: "라운드가 시작되자마자 내가 가장 먼저 보는 것은?",
    options: [
      { id: "Q1_A", text: "후방이나 안전한 곳에서 기다렸다가 상황을 본다.", score: { play: "P6" } },
      { id: "Q1_B", text: "상대가 자리 잡기 전에 먼저 열어서 한 명 잡아본다.", score: { play: "P4" } },
      { id: "Q1_C", text: "팀원이 어디를 보는지 확인하고 같이 움직인다.", score: { play: "P5" } },
      { id: "Q1_D", text: "맡은 자리를 안정적으로 지킨다.", score: { play: "P2" } },
      { id: "Q1_E", text: "바로 정면 열어 보고 상대 반응을 확인한다.", score: { play: "P1" } },
      { id: "Q1_F", text: "상대 움직임과 폭 타이밍을 보고 판단한다.", score: { play: "P3" } },
    ],
  },
  {
    id: "Q2",
    category: "play",
    title: "초반 교전이 애매하게 열렸을 때 내 반응은?",
    options: [
      { id: "Q2_A", text: "팀원과 말 맞춰서 같이 움직인다.", score: { play: "P5" } },
      { id: "Q2_B", text: "잡을 수 있으면 바로 승부를 본다.", score: { play: "P4" } },
      { id: "Q2_C", text: "상대 패턴과 시간을 보고 다음 움직임을 고른다.", score: { play: "P3" } },
      { id: "Q2_D", text: "괜히 무리하지 않고 자리 유지한다.", score: { play: "P2" } },
      { id: "Q2_E", text: "살아 있다가 나오는 상대를 잡는다.", score: { play: "P6" } },
      { id: "Q2_F", text: "먼저 살짝 체크해서 정보를 만든다.", score: { play: "P1" } },
    ],
  },
  {
    id: "Q3",
    category: "play",
    title: "상대 위치가 확실하지 않을 때 나는?",
    options: [
      { id: "Q3_A", text: "살짝 체크만 해본다.", score: { play: "P1" } },
      { id: "Q3_B", text: "지금까지 나온 움직임으로 위치를 예상한다.", score: { play: "P3" } },
      { id: "Q3_C", text: "무리하지 않고 확실한 순간까지 기다린다.", score: { play: "P6" } },
      { id: "Q3_D", text: "팀원과 같이 확인한다.", score: { play: "P5" } },
      { id: "Q3_E", text: "잡을 수 있다고 느끼면 먼저 들어간다.", score: { play: "P4" } },
      { id: "Q3_F", text: "내가 맡은 곳을 비우지 않는다.", score: { play: "P2" } },
    ],
  },
  {
    id: "Q4",
    category: "play",
    title: "상대가 같은 방식으로 반복해서 들어온다.",
    options: [
      { id: "Q4_A", text: "패턴 파악했으니 다음엔 다르게 받는다.", score: { play: "P3" } },
      { id: "Q4_B", text: "팀원과 타이밍 맞춰 같이 막는다.", score: { play: "P5" } },
      { id: "Q4_C", text: "내 자리를 지키면서 안정적으로 막는다.", score: { play: "P2" } },
      { id: "Q4_D", text: "기다렸다가 나오는 걸 잡는다.", score: { play: "P6" } },
      { id: "Q4_E", text: "이번엔 내가 먼저 열어본다.", score: { play: "P1" } },
      { id: "Q4_F", text: "상대가 반복하면 먼저 잡아서 끊는다.", score: { play: "P4" } },
    ],
  },
  {
    id: "Q5",
    category: "play",
    title: "팀원과 움직임이 엇갈리는 판에서 나는?",
    options: [
      { id: "Q5_A", text: "말 맞춰서 다시 같이 움직인다.", score: { play: "P5" } },
      { id: "Q5_B", text: "우선 내 자리를 안정적으로 본다.", score: { play: "P2" } },
      { id: "Q5_C", text: "먼저 정보를 보고 팀에 알려준다.", score: { play: "P1" } },
      { id: "Q5_D", text: "왜 엇갈렸는지 보고 운영을 바꾼다.", score: { play: "P3" } },
      { id: "Q5_E", text: "살아남아 마무리할 기회를 본다.", score: { play: "P6" } },
      { id: "Q5_F", text: "중요한 순간 내가 직접 잡아 흐름을 바꾼다.", score: { play: "P4" } },
    ],
  },
  {
    id: "Q6",
    category: "play",
    title: "마지막 한 명을 잡으면 흐름이 바뀔 것 같다.",
    options: [
      { id: "Q6_A", text: "이번엔 내가 잡아볼게.", score: { play: "P4" } },
      { id: "Q6_B", text: "확실하게 하자. 무리하지 않는다.", score: { play: "P6" } },
      { id: "Q6_C", text: "팀원과 같이 맞춰서 잡는다.", score: { play: "P5" } },
      { id: "Q6_D", text: "먼저 반응을 보고 위치를 확인한다.", score: { play: "P1" } },
      { id: "Q6_E", text: "상대가 나오는 타이밍을 계산한다.", score: { play: "P3" } },
      { id: "Q6_F", text: "자리 지키면서 들어오는 걸 받는다.", score: { play: "P2" } },
    ],
  },
  {
    id: "Q7",
    category: "play",
    title: "우리가 유리한 판에서 상대가 몇 명 남았다.",
    options: [
      { id: "Q7_A", text: "괜히 흔들지 말고 안정적으로 끝낸다.", score: { play: "P2" } },
      { id: "Q7_B", text: "먼저 잡는 사람이 가져가는 거지.", score: { play: "P6", special: "S4", toxic: 1 } },
      { id: "Q7_C", text: "팀원과 같이 정리한다.", score: { play: "P5" } },
      { id: "Q7_D", text: "상대가 어디로 빠질지 보고 판단한다.", score: { play: "P3" } },
      { id: "Q7_E", text: "잡을 수 있으면 내가 먼저 승부 본다.", score: { play: "P4" } },
      { id: "Q7_F", text: "상대 위치를 먼저 확인하러 간다.", score: { play: "P1" } },
    ],
  },
  {
    id: "Q8",
    category: "play",
    title: "시간은 40초 남았다.",
    description: "마지막 라운드에 나 혼자 남은 상황이다.",
    options: [
      { id: "Q8_A", text: "상대가 나오기 전에 내가 먼저 찾으러 간다.", score: { play: "P4" } },
      { id: "Q8_B", text: "무리하게 찾기보다, 상대가 나오는 걸 기다리며 안정적으로 본다.", score: { play: "P3" } },
      { id: "Q8_C", text: "상대 스타일을 이미 파악해뒀고 심리전을 이용해 잡는다.", score: { play: "P5" } },
      { id: "Q8_D", text: "잡아봐야 무승부다. 폭탄 설치를 최우선으로 한다.", score: { play: "P2", special: "S3" } },
      { id: "Q8_E", text: "죽은 팀원의 브리핑이나 오더를 듣고 그대로 맞춰 움직인다.", score: { play: "P1" } },
      { id: "Q8_F", text: "어차피 이기긴 글렀다. 킬뎃 관리 해야겠다.", score: { play: "P6", special: "S2", toxic: 1 } },
    ],
  },
  {
    id: "Q9",
    category: "play",
    title: "내가 팀에서 가장 편하게 느끼는 역할은?",
    options: [
      { id: "Q9_A", text: "한쪽을 안정적으로 막고, 쉽게 뚫리지 않게 버티는 역할.", score: { play: "P2" } },
      { id: "Q9_B", text: "먼저 움직여서 상대 위치나 정보를 확인해주는 역할.", score: { play: "P1" } },
      { id: "Q9_C", text: "중요한 순간에 직접 잡거나 승부를 걸어 흐름을 바꾸는 역할.", score: { play: "P4" } },
      { id: "Q9_D", text: "팀원들과 함께 타이밍을 맞추는 분위기를 이끄는 역할.", score: { play: "P5" } },
      { id: "Q9_E", text: "무리하지 않고 살아 있으면서 확실한 순간에 적을 잡는 역할.", score: { play: "P6" } },
      { id: "Q9_F", text: "상대 움직임과 라운드 흐름을 보고 어디를 풀지 판단하는 역할.", score: { play: "P3" } },
    ],
  },
  {
    id: "Q10",
    category: "comm",
    title: "나의 브리핑 스타일 중 가장 가까운 것은?",
    options: [
      { id: "Q10_A", text: "“한 명 봤어”, “숏 하나”, “패스”처럼 내가 본 정보를 짧게 말한다.", score: { comm: "M1" } },
      { id: "Q10_B", text: "“정면 2명인데 같이 열어 줄 사람?”처럼 팀원이 맞춰 움직일 수 있게 말한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q10_C", text: "내가 본 것 중 확실하다고 생각되는 것만 말한다. 그래서 말수가 많지는 않다.", score: { comm: "M3" } },
      { id: "Q10_D", text: "본 것도 브리핑하고 패턴이나 추측, 나의 행동까지 같이 말한다.", score: { comm: "M5" } },
    ],
  },
  {
    id: "Q11",
    category: "comm",
    title: "클랜전 중 팀원이 내가 따로 물어본 것도 아닌데 내 플레이에 대해 반복적으로 피드백한다.",
    description: "“왜 그렇게 하지? 그렇게 하면 계속 죽잖아.” “이럴 땐 이렇게 하는 게 좋아.” “타이밍 맞춰서 해야지.” 이때 내 생각에 가장 가까운 것은?",
    options: [
      { id: "Q11_A", text: "말투가 거슬려도 근거가 있다고 생각하면 일단 받아들인다.", score: { comm: "M1" } },
      { id: "Q11_B", text: "요청하지 않은 피드백은 삼가해달라고 하거나 좋게 말 해달라고 한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q11_C", text: "기분은 좋지 않지만, 괜히 말하면 분위기만 안 좋아질 것 같아서 그냥 넘긴다.", score: { comm: "M3" } },
      { id: "Q11_D", text: "무조건 수용보단 내가 이 플레이를 한 이유에 대해 얘기한다.", score: { comm: "M6", toxic: 1 } },
    ],
  },
  {
    id: "Q12",
    category: "comm",
    title: "팀원이 게임 중 잡담이 많아 집중이 흐려진다.",
    options: [
      { id: "Q12_A", text: "분위기를 깨지 않는 선에서 집중하자고 정리한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q12_B", text: "지금은 조용히 하자고 바로 말한다.", score: { comm: "M1" } },
      { id: "Q12_C", text: "크게 거슬리지 않으면 맞춰준다.", score: { comm: "M2" } },
      { id: "Q12_D", text: "괜히 말하면 분위기만 이상해질 것 같아 참고 한다.", score: { comm: "M3" } },
      { id: "Q12_E", text: "나는 내 방식대로 집중하고 크게 신경 쓰지 않는다.", score: { comm: "M6" } },
    ],
  },
  {
    id: "Q13",
    category: "comm",
    title: "팀원끼리 말투가 날카로워지는 상황이 생겼다.",
    options: [
      { id: "Q13_A", text: "선을 넘는 말은 바로 끊는다.", score: { comm: "M1" } },
      { id: "Q13_B", text: "분위기가 더 커지지 않게 부드럽게 정리한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q13_C", text: "괜히 끼면 더 커질 것 같아서 조용히 있는다.", score: { comm: "M3" } },
      { id: "Q13_D", text: "게임 끝난 뒤 따로 얘기해서 정리한다.", score: { comm: "M2" } },
    ],
  },
  {
    id: "Q14",
    category: "comm",
    title: "팀원이 내가 브리핑을 안해줘서 죽었다며 탓을 한다.",
    options: [
      { id: "Q14_A", text: "바로 “내가 못 봤다”, “내 실수다”라고 말한다.", score: { comm: "M1" } },
      { id: "Q14_B", text: "실수한 건 알지만, 민망해서 짧게 “아 미안” 정도만 말하고 넘어간다.", score: { comm: "M5" } },
      { id: "Q14_C", text: "왜 실수했는지 생각해보고, 다음 라운드에는 같은 상황이 안 나오게 바꿔본다.", score: { comm: "M6" } },
      { id: "Q14_D", text: "나도 그럴 수밖에 없는 상황이 있었다고 말한다.", score: { comm: "M4" } },
      { id: "Q14_E", text: "실수한 게 계속 신경 쓰여서 이후 플레이가 조심스러워진다.", score: { comm: "M3", mentalDown: 1 } },
    ],
  },
  {
    id: "Q15",
    category: "comm",
    title: "팀원이 실수해서 분위기가 어색해졌다.",
    options: [
      { id: "Q15_A", text: "바로 문제였던 부분을 말한다.", score: { comm: "M1" } },
      { id: "Q15_B", text: "기분이 조금 상해서 말투에 티가 난다.", score: { comm: "M4" } },
      { id: "Q15_C", text: "괜히 말하지 않고 조용히 넘어간다.", score: { comm: "M3" } },
      { id: "Q15_D", text: "가볍게 분위기를 풀고 다시 맞춰본다.", score: { comm: "M2", teamCore: 1 } },
    ],
  },
  {
    id: "Q16",
    category: "comm",
    title: "우리 퀵이 연패중이다. 다들 점점 말이 없어지고 집중을 못하는게 보인다. 이때 내 반응은?",
    options: [
      { id: "Q16_A", text: "나도 말이 줄어들고 스트레스 받아 게임을 빨리 끄고 싶어진다.", score: { comm: "M4", special: "S6", mentalDown: 1 } },
      { id: "Q16_B", text: "분위기 전환을 위해 가벼운 농담을 하거나 화이팅을 불어넣는다.", score: { comm: "M2", special: "S5", teamCore: 1 } },
      { id: "Q16_C", text: "내가 잘 해보겠다고 적극적으로 플레이한다.", score: { play: "P4" } },
      { id: "Q16_D", text: "지는 이유를 분석하고 운영을 바꿔본다.", score: { comm: "M5", special: "S8" } },
    ],
  },
  {
    id: "Q17",
    category: "comm",
    title: "상대나 팀원이 좋은 플레이를 보여줬다.",
    options: [
      { id: "Q17_A", text: "왜 통했는지 생각해보고 다음에 써먹을 방법을 본다.", score: { comm: "M5", special: "S8" } },
      { id: "Q17_B", text: "그건 피지컬 차이라고 생각한다.", score: { play: "P4" } },
      { id: "Q17_C", text: "좋아 보이긴 해도 그 사람 방식이고 나는 내 방식대로 한다.", score: { comm: "M6", toxic: 1 } },
      { id: "Q17_D", text: "괜찮은 플레이라고 생각되면 다음 판에 바로 따라 해본다.", score: { special: "S7" } },
    ],
  },
  {
    id: "Q18",
    category: "comm",
    title: "팀원이 분명히 잘못된 플레이를 반복하고 있다. 내가 피드백을 해야 할 것 같다.",
    options: [
      { id: "Q18_A", text: "“거기선 이렇게 나가야 돼” 하고 직접적으로 피드백한다. 상대의 기분은 크게 고려하지 않는다.", score: { comm: "M1", toxic: 1 } },
      { id: "Q18_B", text: "“이렇게 한 번 해보면 어때?” 등 부드럽게 제안한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q18_C", text: "요청하지 않았는데 괜히 말하면 기분 나쁠 수 있으니 말하지 않는다.", score: { comm: "M3" } },
      { id: "Q18_D", text: "내가 보기엔 분명한 문제라서, 그 사람이 기분 나쁠게 확실해도 말해야 한다고 생각한다.", score: { comm: "M6", toxic: 1 } },
    ],
  },
  {
    id: "Q19",
    category: "comm",
    title: "방금 진 판이 계속 생각난다.",
    options: [
      { id: "Q19_A", text: "우리가 어디서 꼬였는지 생각해보고 다음엔 바꿔본다.", score: { comm: "M5", special: "S8" } },
      { id: "Q19_B", text: "상대가 자주 쓰던 자리나 패턴을 기억해둔다.", score: { comm: "M5", special: "S8" } },
      { id: "Q19_C", text: "졌으니 빨리 잊고 다음 판으로 넘긴다.", score: { comm: "M6" } },
      { id: "Q19_D", text: "기분이 남아서 다음 판도 조금 흔들린다.", score: { comm: "M4", mentalDown: 1 } },
    ],
  },
  {
    id: "Q20",
    category: "comm",
    title: "팀에서 내가 가장 편하게 느끼는 분위기는?",
    options: [
      { id: "Q20_A", text: "서로 맞춰주고 말투가 부드러운 분위기.", score: { comm: "M2" } },
      { id: "Q20_B", text: "필요한 말만 하고 집중하는 분위기.", score: { comm: "M3" } },
      { id: "Q20_C", text: "실수해도 너무 날카롭지 않은 분위기.", score: { comm: "M4" } },
      { id: "Q20_D", text: "각자 자기 역할을 확실히 하는 분위기.", score: { comm: "M6" } },
      { id: "Q20_E", text: "문제 있으면 바로 말하는 분위기.", score: { comm: "M1" } },
      { id: "Q20_F", text: "패턴과 운영 얘기가 잘 통하는 분위기.", score: { comm: "M5" } },
    ],
  },
  {
    id: "Q21",
    category: "comm",
    title: "내 단점에 가장 가까운 것은?",
    options: [
      { id: "Q21_A", text: "말이 너무 직설적으로 나올 때가 있다.", score: { comm: "M1" } },
      { id: "Q21_B", text: "생각이 많아져 말이 길어질 때가 있다.", score: { comm: "M5" } },
      { id: "Q21_C", text: "내 기준이 강해서 남의 말을 바로 못 받을 때가 있다.", score: { comm: "M6", toxic: 1 } },
      { id: "Q21_D", text: "분위기를 맞추느라 내 판단을 늦게 말할 때가 있다.", score: { comm: "M2" } },
      { id: "Q21_E", text: "필요한 말도 참고 넘어갈 때가 있다.", score: { comm: "M3" } },
      { id: "Q21_F", text: "기분이 말투나 플레이에 묻어날 때가 있다.", score: { comm: "M4" } },
    ],
  },
  {
    id: "Q22",
    category: "comm",
    title: "내가 게임에서 장점으로 보이고 싶은 모습은?",
    options: [
      { id: "Q22_A", text: "판을 읽고 원인을 짚는 사람.", score: { comm: "M5" } },
      { id: "Q22_B", text: "조용하지만 확실한 사람.", score: { comm: "M3" } },
      { id: "Q22_C", text: "자기 기준이 분명한 사람.", score: { comm: "M6" } },
      { id: "Q22_D", text: "분위기가 흔들려도 다시 잡는 사람.", score: { comm: "M4" } },
      { id: "Q22_E", text: "필요한 말을 바로 하는 사람.", score: { comm: "M1" } },
      { id: "Q22_F", text: "팀을 편하게 해주는 사람.", score: { comm: "M2" } },
    ],
  },
  {
    id: "Q23",
    category: "comm",
    title: "팀 분위기에서 내가 중요하게 보는 것은?",
    options: [
      { id: "Q23_A", text: "서로 맞춰주는 분위기.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q23_B", text: "각자의 기준을 존중하는 분위기.", score: { comm: "M6" } },
      { id: "Q23_C", text: "문제가 있으면 바로 말하는 분위기.", score: { comm: "M1" } },
      { id: "Q23_D", text: "왜 졌는지 같이 보는 분위기.", score: { comm: "M5" } },
      { id: "Q23_E", text: "괜히 말이 많지 않은 분위기.", score: { comm: "M3" } },
      { id: "Q23_F", text: "감정 상하지 않게 조심하는 분위기.", score: { comm: "M4" } },
    ],
  },
  {
    id: "Q24",
    category: "comm",
    title: "불편한 상황에서 나는 보통 어떻게 한다?",
    options: [
      { id: "Q24_A", text: "내 기준이 맞으면 그대로 간다.", score: { comm: "M6" } },
      { id: "Q24_B", text: "괜히 크게 만들지 않고 넘긴다.", score: { comm: "M3" } },
      { id: "Q24_C", text: "감정이 조금 올라와 말투에 드러난다.", score: { comm: "M4" } },
      { id: "Q24_D", text: "바로 말해서 정리한다.", score: { comm: "M1" } },
      { id: "Q24_E", text: "왜 불편한지 원인을 따져본다.", score: { comm: "M5" } },
      { id: "Q24_F", text: "서로 맞출 방법을 찾아본다.", score: { comm: "M2" } },
    ],
  },
  {
    id: "Q25",
    category: "comm",
    title: "내가 팀에 기여하는 방식에 가까운 것은?",
    options: [
      { id: "Q25_A", text: "원인과 패턴을 찾아준다.", score: { comm: "M5" } },
      { id: "Q25_B", text: "필요한 말을 바로 한다.", score: { comm: "M1" } },
      { id: "Q25_C", text: "확실한 정보 위주로 말한다.", score: { comm: "M3" } },
      { id: "Q25_D", text: "팀원들이 맞춰 움직일 수 있게 돕는다.", score: { comm: "M2" } },
      { id: "Q25_E", text: "내 기준으로 밀고 갈 때 팀이 따라오기 쉽다.", score: { comm: "M6" } },
      { id: "Q25_F", text: "분위기를 보고 조심스럽게 반응한다.", score: { comm: "M4" } },
    ],
  },
  {
    id: "Q26",
    category: "comm",
    title: "클랜 분위기나 운영 방향이 내가 생각하는 방향과 조금 다르다고 느껴진다.",
    description: "예를 들어 게임을 너무 빡세게 하거나, 반대로 너무 가볍게만 하는 분위기라서 내가 원하는 방향과 맞지 않는 느낌이다. 이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q26_A", text: "내가 불편한 부분을 바로 말하고, 방향이 맞는지 얘기해본다.", score: { comm: "M1" } },
      { id: "Q26_B", text: "클랜 분위기를 해치지 않는 선에서, 서로 맞출 수 있는 방법을 찾아본다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q26_C", text: "굳이 크게 말하지 않고, 내가 맞출 수 있는 정도까지만 맞춘다.", score: { comm: "M3" } },
      { id: "Q26_D", text: "분위기가 계속 안 맞으면 스트레스를 받아 접속이나 참여가 줄어든다.", score: { comm: "M4", mentalDown: 1 } },
      { id: "Q26_E", text: "나와 맞는 다른 클랜을 간다.", score: { comm: "M6", toxic: 1 } },
    ],
  },
  {
    id: "Q27",
    category: "special",
    title: "클랜전에서 라운드가 중요하게 갈리는 순간이다.",
    description: "이길 수도 있지만, 무리하면 크게 말릴 수도 있는 상황이다. 팀원들도 어떻게 할지 확실히 정하지 못하고 있다. 이때 내 생각에 가장 가까운 것은?",
    options: [
      { id: "Q27_A", text: "팀 분위기가 흔들리지 않게 먼저 말로 정리하거나 분위기를 살린다.", score: { special: "S5" } },
      { id: "Q27_B", text: "팀원들이 뭐라고 해도, 내가 익숙한 방식이 제일 낫다고 생각한다.", score: { special: "S2", toxic: 1 } },
      { id: "Q27_C", text: "이길 수 있는 가능성이 있다면 위험을 감수해서라도 승부를 걸어본다.", score: { special: "S3" } },
      { id: "Q27_D", text: "지금까지 왜 밀렸는지 보고, 운영을 바꿔야 한다고 생각한다.", score: { special: "S8" } },
      { id: "Q27_E", text: "이런 압박 상황에서는 괜히 말수도 줄고 몸이 굳는 편이다.", score: { special: "S6", mentalDown: 1 } },
      { id: "Q27_F", text: "유리한 상황이면 남은 상대는 먼저 잡는 사람이 가져가는 거라고 생각한다.", score: { special: "S4" } },
    ],
  },
  {
    id: "Q28",
    category: "special",
    title: "클랜전 중 우리 팀이 계속 꼬이고 있다.",
    description: "브리핑은 부족하고, 몇몇 팀원은 따로 움직이고, 누군가는 실수할 때마다 분위기가 조금씩 날카로워지고 있다. 이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q28_A", text: "팀원들이 뭐라고 하든, 내가 맞다고 생각하는 방식대로 계속 한다.", score: { special: "S2", toxic: 1 } },
      { id: "Q28_B", text: "분위기가 더 망가지지 않게 말투를 부드럽게 하고, 다시 맞춰보자고 한다.", score: { special: "S1", teamCore: 1 } },
      { id: "Q28_C", text: "이런 분위기가 계속되면 집중이 안 되고, 그냥 빨리 끝났으면 좋겠다고 생각한다.", score: { special: "S6", mentalDown: 1 } },
      { id: "Q28_D", text: "필요한 브리핑을 정리하고, 팀원들이 같이 움직일 수 있게 방향을 잡아본다.", score: { special: "S1", teamCore: 1 } },
      { id: "Q28_E", text: "어차피 팀이 안 맞는 것 같으니, 내가 할 수 있는 플레이만 하고 내 킬이라도 챙긴다.", score: { special: "S2", toxic: 1 } },
      { id: "Q28_F", text: "왜 계속 꼬이는지 보고, 다음 라운드에서 바꿀 운영을 말해본다.", score: { special: "S8", teamCore: 1 } },
    ],
  },
  {
    id: "Q29",
    category: "special",
    title: "클랜전 중 한 팀원이 실수를 반복하고 있다.",
    description: "브리핑도 늦고, 같은 자리에서 계속 죽고, 팀원들 사이에서도 “또 저기서 죽었네” 같은 말이 나오기 시작했다. 그 팀원도 기분이 상한 것 같고, 이대로 가면 게임보다 사람 감정 문제가 더 커질 것 같다. 이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q29_A", text: "괜히 말하면 더 커질 것 같아서 아무 말 안 하고 넘어간다.", score: { comm: "M3" } },
      { id: "Q29_B", text: "“괜찮아, 다음 판엔 같이 맞춰보자”처럼 분위기를 먼저 잡아준다.", score: { special: "S1", teamCore: 1 } },
      { id: "Q29_C", text: "어차피 말해도 안 바뀔 것 같아서, 나는 내 플레이랑 킬 챙기는 데 집중한다.", score: { special: "S2", toxic: 1 } },
      { id: "Q29_D", text: "왜 계속 같은 상황이 나오는지 보고, 다음 라운드에 바꿀 방법을 말해본다.", score: { special: "S8", teamCore: 1 } },
      { id: "Q29_E", text: "나도 답답해서 “아 또 왜 거기서 죽어”처럼 말이 날카롭게 나간다.", score: { special: "S2", comm: "M4", toxic: 1 } },
      { id: "Q29_F", text: "“계속 그렇게 하면 힘들어. 이번엔 이렇게 해보자”처럼 필요한 말을 직접 한다.", score: { comm: "M1" } },
    ],
  },
  {
    id: "Q30",
    category: "special",
    title: "연패 중인 퀵의 마지막 경기다.",
    description: "계속된 연패로 다들 지쳐 있고, 이번 경기를 끝으로 대부분 로그아웃할 분위기다. 말수도 줄었고, 분위기도 많이 가라앉은 상황이다. 이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q30_A", text: "마지막 판이니까 너무 벌리지 않고, 내가 확실히 할 수 있는 구도 위주로 한다.", score: { special: "S4" } },
      { id: "Q30_B", text: "괜히 더 가라앉지 않게 짧게라도 말을 걸면서 분위기를 풀어본다.", score: { special: "S5" } },
      { id: "Q30_C", text: "마지막이라고 해서 크게 바꾸기보다, 내가 원래 하던 방식대로 마무리한다.", score: { special: "S2", toxic: 1 } },
      { id: "Q30_D", text: "마지막 판이라도 이길 수 있는 흐름이 보이면, 그쪽으로 한번 과감하게 맞춰본다.", score: { special: "S3" } },
      { id: "Q30_E", text: "다들 지친 게 보여서 나도 크게 말하지 않고, 조용히 마지막 판을 한다.", score: { special: "S6", mentalDown: 1 } },
      { id: "Q30_F", text: "지금까지 반복해서 막힌 부분을 떠올리면서, 마지막 판에는 다른 방식으로 풀어본다.", score: { special: "S8" } },
    ],
  },
];
