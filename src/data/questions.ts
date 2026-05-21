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

export const questions: Question[] = [
  {
    id: "Q1",
    category: "play",
    title: "5vs5 선블루로 게임을 시작했다.",
    description: "내 첫 움직임에 가까운 것은?",
    options: [
      { id: "Q1_A", text: "후방이나 안전한 곳에서 기다렸다가 폭탄이 빠진 후 움직인다.", score: { play: "P6" } },
      { id: "Q1_B", text: "상대가 자리 잡기 전에 먼저 나가서 한 명 잡는다.", score: { play: "P4" } },
      { id: "Q1_C", text: "팀원들이 먼저 자리 잡게 하고, 백업이 필요하겠다 싶은 곳으로 간다.", score: { play: "P5" } },
      { id: "Q1_D", text: "무리해서 열기보다 내가 잘 막을 수 있는 위치로 가서 포지션을 잡는다.", score: { play: "P2" } },
      { id: "Q1_E", text: "제일 먼저 정면을 열거나 숏오바를 해서 상대 위치를 확인하고 빠진다.", score: { play: "P1" } },
      { id: "Q1_F", text: "정해진 자리로 고정하기보다, 초반 움직임을 보면서 상대 플레이 스타일을 파악한다.", score: { play: "P3" } },
    ],
  },
  {
    id: "Q2",
    category: "play",
    title: "5vs5 선레드로 게임을 시작했다.",
    description: "내 첫 움직임에 가까운 것은?",
    options: [
      { id: "Q2_A", text: "팀원들이 자리 잡는 걸 보고, 비어 있는 포지션이나 백업이 필요한 포지션을 잡는다.", score: { play: "P5" } },
      { id: "Q2_B", text: "돌진해서 한 명 잡고 시작한다.", score: { play: "P4" } },
      { id: "Q2_C", text: "숏, 전진, 실각 등을 조금씩 체크하면서 블루팀 위치를 파악한다.", score: { play: "P3" } },
      { id: "Q2_D", text: "정면은 다른 팀원에게 맡기고, 숏을 보기 위해 대각에 자리를 잡는다.", score: { play: "P2" } },
      { id: "Q2_E", text: "초반 교전은 피하고, 폭탄이 빠지거나 상대 위치가 드러난 뒤 움직인다.", score: { play: "P6" } },
      { id: "Q2_F", text: "시작하자마자 정면을 먼저 열어 블루 반응을 확인한다.", score: { play: "P1" } },
    ],
  },
  {
    id: "Q3",
    category: "play",
    title: "레드팀으로 플레이 중이다.",
    description: "블루팀이 정면을 제대로 열지 않고, 가끔 모습만 살짝 보이거나 폭만 던지고 빠진다.\n몇 초가 지나도 블루 위치가 확실히 잡히지 않는 상황이다.\n이때 내 플레이에 가장 가까운 것은?",
    options: [
      { id: "Q3_A", text: "내가 먼저 숏을 살짝 체크하거나 폭을 빼도록 유도한다.", score: { play: "P1" } },
      { id: "Q3_B", text: "남은 폭탄 개수, 타이밍, 이전 라운드에서 파악한 상대 위치를 생각하며 움직인다.", score: { play: "P3" } },
      { id: "Q3_C", text: "후방에서 팀원들을 백업하며 확실한 상황을 기다린다.", score: { play: "P5" } },
      { id: "Q3_D", text: "팀원들에게 말 맞춰서 같이 어택하자고 한다.", score: { play: "P5" } },
      { id: "Q3_E", text: "선두로 패스나 숏어택을 해서 먼저 흐름을 만든다.", score: { play: "P4" } },
      { id: "Q3_F", text: "시간을 좀 더 쓰면서 대기하고, 블루가 나오는 걸 기다린다.", score: { play: "P6" } },
    ],
  },
  {
    id: "Q4",
    category: "play",
    title: "블루팀에서 숏에 포지션을 잡고 있다.",
    description: "내 플레이에 가장 가까운 것은?",
    options: [
      { id: "Q4_A", text: "폭이 몇 개 빠졌는지, 숏 앞에 사운드가 있는지 등 흐름을 보며 대응한다.", score: { play: "P3" } },
      { id: "Q4_B", text: "팀원들이 자리 잡는 걸 보고, 비는 곳이나 백업이 필요한 쪽으로 움직인다.", score: { play: "P5" } },
      { id: "Q4_C", text: "무리해서 나가기보다 숏을 정면으로 열어 확실하게 막는다.", score: { play: "P2" } },
      { id: "Q4_D", text: "낚시 자리에 가거나 패스 브리핑이 나오면 잡을 수 있는 자리로 간다.", score: { play: "P6" } },
      { id: "Q4_E", text: "숏 앞을 먼저 살짝 열거나 오바해서 레드가 붙었는지 확인한다.", score: { play: "P1" } },
      { id: "Q4_F", text: "숏전진이나 숏오바로 먼저 교전을 걸어 한 명 잡아본다.", score: { play: "P4" } },
    ],
  },
  {
    id: "Q5",
    category: "play",
    title: "블루팀으로 플레이 중이다.",
    description: "우리 팀 정면 스나가 몇 라운드째 레드 스나에게 먼저 따이고 있다.\n정면이 자꾸 밀리다 보니 숏도 같이 흔들리는 상황이다.\n이때 내 플레이에 가장 가까운 것은?",
    options: [
      { id: "Q5_A", text: "팀원과 타이밍을 맞춰서 동시에 정면을 연다.", score: { play: "P5" } },
      { id: "Q5_B", text: "정면을 바로 도우러 가기보다, 숏이 더 흔들리지 않게 막는 것에 집중한다.", score: { play: "P2" } },
      { id: "Q5_C", text: "레드 스나 위치를 내가 먼저 체크해 준다.", score: { play: "P1" } },
      { id: "Q5_D", text: "레드 스나가 여는 방식과 타이밍을 확인하고 대응한다.", score: { play: "P3" } },
      { id: "Q5_E", text: "숏이 뚫리는 것에 대비할 수 있는 포지션을 잡는다.", score: { play: "P6" } },
      { id: "Q5_F", text: "팀원보다 내가 먼저 정면을 열어 레드 스나와 교전한다.", score: { play: "P4" } },
    ],
  },
  {
    id: "Q6",
    category: "play",
    title: "라운드 중 우리 팀이 2명, 상대가 4명 남았다.",
    description: "상대 위치는 정확히 모르지만, 이대로 가면 라운드를 내줄 가능성이 높다.\n이때 내 플레이에 가장 가까운 것은?",
    options: [
      { id: "Q6_A", text: "먼저 움직여 한 명이라도 잡는다.", score: { play: "P4" } },
      { id: "Q6_B", text: "낚시 자리로 가거나 후방에서 상대가 나오는 타이밍을 기다린다.", score: { play: "P6" } },
      { id: "Q6_C", text: "남은 팀원과 같이 있을지 따로 볼지 대화하며 맞춘다.", score: { play: "P5" } },
      { id: "Q6_D", text: "먼저 나가서 상대가 어디 있는지만 확인하고 빠진다.", score: { play: "P1" } },
      { id: "Q6_E", text: "시간 체크하고 상대 위치를 예측하며 움직인다.", score: { play: "P3" } },
      { id: "Q6_F", text: "무리하게 움직이기보다, 상대가 들어오는 걸 기다리며 한 명씩 끊어본다.", score: { play: "P2" } },
    ],
  },
  {
    id: "Q7",
    category: "play",
    title: "라운드 중 우리 팀이 4명, 상대가 2명 남았다.",
    description: "상대 위치는 정확히 모르지만, 우리 팀이 인원수로 유리한 상황이다.\n이때 내 플레이에 가장 가까운 것은?",
    options: [
      { id: "Q7_A", text: "보던 포지션을 유지하며 방심하지 않는다.", score: { play: "P2" } },
      { id: "Q7_B", text: "먼저 잡는 사람이 임자다. 잡으러 간다.", score: { play: "P6", special: "S4", toxic: 1 } },
      { id: "Q7_C", text: "팀원들과 다 같이 물량공세로 돌진한다.", score: { play: "P5" } },
      { id: "Q7_D", text: "상대가 나올지 숨을지 보고, 움직일지 기다릴지 결정한다.", score: { play: "P3" } },
      { id: "Q7_E", text: "한 명만 더 잡으면 라운드가 거의 끝난다고 보고, 먼저 나가서 흐름을 굳힌다.", score: { play: "P4" } },
      { id: "Q7_F", text: "먼저 나가 상대가 어디 있는지 확인한다.", score: { play: "P1" } },
    ],
  },
  {
    id: "Q8",
    category: "play",
    title: "우리가 레드팀이고 마지막 라운드에 나 혼자 남았다.",
    description: "상대도 한 명 남아 1:1 상황이다.\n내가 상대를 잡으면 이번 경기는 무승부, 죽으면 그대로 패배다.\n시간은 40초 남았고, 상대 위치는 아직 보이지 않는다.\n이때 내 플레이에 가장 가까운 것은?",
    options: [
      { id: "Q8_A", text: "잡아봐야 무승부다. 폭탄 설치를 최우선으로 한다.", score: { play: "P2", special: "S3" } },
      { id: "Q8_B", text: "상대 스타일을 이미 파악해뒀고, 심리전을 이용해 잡는다.", score: { play: "P3" } },
      { id: "Q8_C", text: "죽은 팀원의 브리핑이나 오더를 듣고 그대로 맞춰 움직인다.", score: { play: "P5" } },
      { id: "Q8_D", text: "무리하게 찾기보다, 상대가 나오는 걸 기다리며 안정적으로 본다.", score: { play: "P6" } },
      { id: "Q8_E", text: "상대가 나오기 전에 내가 먼저 찾으러 간다.", score: { play: "P4" } },
      { id: "Q8_F", text: "어차피 이기긴 글렀다. 킬뎃 관리해야겠다.", score: { play: "P6", special: "S2", toxic: 1 } },
    ],
  },
  {
    id: "Q9",
    category: "play",
    title: "클랜전에서 내가 가장 편하다고 느끼는 역할은?",
    options: [
      { id: "Q9_A", text: "한쪽을 안정적으로 막고, 쉽게 뚫리지 않게 버티는 역할.", score: { play: "P2" } },
      { id: "Q9_B", text: "먼저 움직여서 상대 위치나 정보를 확인해주는 역할.", score: { play: "P1" } },
      { id: "Q9_C", text: "중요한 순간에 직접 잡거나 승부를 걸어 흐름을 바꾸는 역할.", score: { play: "P4" } },
      { id: "Q9_D", text: "팀원들과 함께 움직이고, 타이밍을 맞춰주는 역할.", score: { play: "P5" } },
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
      { id: "Q10_B", text: "본 것도 브리핑하고 패턴이나 추측, 나의 행동까지 같이 말한다.", score: { comm: "M5" } },
      { id: "Q10_C", text: "내가 본 것 중 확실하다고 생각되는 것만 말한다. 그래서 말수가 많지는 않다.", score: { comm: "M3" } },
      { id: "Q10_D", text: "“정면 2명인데 같이 열어 줄 사람?”처럼 팀원이 맞춰 움직일 수 있게 말한다.", score: { comm: "M2", teamCore: 1 } },
    ],
  },
  {
    id: "Q11",
    category: "comm",
    title: "클랜전 중 팀원이 내가 따로 물어본 것도 아닌데 내 플레이에 대해 반복적으로 피드백한다.",
    description: "“왜 그렇게 하지? 그렇게 하면 계속 죽잖아.”\n“이럴 땐 이렇게 하는 게 좋아.”\n“타이밍 맞춰서 해야지.”\n\n이때 내 생각에 가장 가까운 것은?",
    options: [
      { id: "Q11_A", text: "요청하지 않은 피드백은 삼가해달라고 하거나 좋게 말해달라고 한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q11_B", text: "말투가 거슬려도 근거가 있다고 생각하면 일단 받아들인다.", score: { comm: "M1" } },
      { id: "Q11_C", text: "기분은 좋지 않지만, 괜히 말하면 분위기만 안 좋아질 것 같아서 그냥 넘긴다.", score: { comm: "M3" } },
      { id: "Q11_D", text: "무조건 수용보단 내가 이 플레이를 한 이유에 대해 얘기한다.", score: { comm: "M6", toxic: 1 } },
    ],
  },
  {
    id: "Q12",
    category: "comm",
    title: "클랜전 중 분위기가 좋아져서 팀원들 잡담이 많아졌다.",
    description: "처음엔 괜찮았는데, 라운드가 진행될수록 브리핑보다 잡담이 많아지고 있다.\n집중해야 할 타이밍에도 장난 섞인 말이 계속 나오는 상황이다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q12_A", text: "잡담도 게임의 재미라고 생각해서 나도 같이 장난친다.", score: { comm: "M4" } },
      { id: "Q12_B", text: "너무 시끄럽다고, 쓸데없는 얘기 그만하라고 바로 말한다.", score: { comm: "M1", toxic: 1 } },
      { id: "Q12_C", text: "“지금은 집중하자” 정도로 말하고 분위기를 정리한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q12_D", text: "방해된다고 느끼지만, 분위기 나빠질까 봐 굳이 말하지 않는다.", score: { comm: "M3" } },
      { id: "Q12_E", text: "말은 하지 않고, 그냥 내 플레이에만 집중한다.", score: { comm: "M6" } },
    ],
  },
  {
    id: "Q13",
    category: "comm",
    title: "게임 중 특정 클랜원의 말투나 태도 때문에 서로 기분이 상한 상황이다.",
    description: "게임 내용보다 사람 간 감정 문제가 된 느낌이고, 지금 더 얘기하면 분위기가 더 안 좋아질 수도 있다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q13_A", text: "그냥 넘기기 어렵다고 생각해서, 게임이 끝난 뒤 따로 얘기해서 정리한다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q13_B", text: "나도 기분이 상해서 바로 따지거나 강하게 말한다.", score: { comm: "M4", toxic: 1 } },
      { id: "Q13_C", text: "더 얘기하면 싸울 것 같아서 말을 줄이고 넘어간다.", score: { comm: "M3" } },
      { id: "Q13_D", text: "감정적으로 커지기 전에 “그만 얘기하자” 정도로 정리하려 한다.", score: { comm: "M2", teamCore: 1 } },
    ],
  },
  {
    id: "Q14",
    category: "comm",
    title: "팀원이 내가 브리핑을 안 해줘서 죽었다며 나를 탓한다.",
    description: "상황을 생각해보면 내가 못 본 것도 있고, 브리핑이 늦었던 것도 어느 정도 맞는 것 같다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q14_A", text: "바로 “내가 못 봤다”, “내 실수다”라고 말한다.", score: { comm: "M1" } },
      { id: "Q14_B", text: "왜 실수했는지 생각해보고, 다음 라운드에는 같은 상황이 안 나오게 바꿔본다.", score: { comm: "M5" } },
      { id: "Q14_C", text: "나도 그럴 수밖에 없는 상황이 있었다고 말한다.", score: { comm: "M6" } },
      { id: "Q14_D", text: "실수한 게 계속 신경 쓰여서 이후 플레이가 조심스러워진다.", score: { comm: "M4", mentalDown: 1 } },
      { id: "Q14_E", text: "실수한 건 알지만, 민망해서 짧게 “아 미안” 정도만 말하고 넘어간다.", score: { comm: "M3" } },
    ],
  },
  {
    id: "Q15",
    category: "comm",
    title: "클랜전 중 팀원들끼리 말이 날카로워지고 있다.",
    description: "누가 크게 싸운 건 아니지만, 서로 말투가 거칠어지고 분위기가 점점 안 좋아지는 느낌이다.\n나는 직접 당사자는 아니지만, 이대로 가면 게임 분위기가 더 무너질 것 같다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q15_A", text: "“말 그렇게 하지 말자”처럼 선을 넘는 말은 바로 끊는다.", score: { comm: "M1" } },
      { id: "Q15_B", text: "이런 분위기가 싫어서 이 판 끝나면 게임을 끄고 싶어진다.", score: { comm: "M4", mentalDown: 1 } },
      { id: "Q15_C", text: "괜히 끼어들면 더 커질 것 같아서 조용히 있는다.", score: { comm: "M3" } },
      { id: "Q15_D", text: "“싸우지 말고 게임에 집중하자”처럼 분위기를 풀어보려 한다.", score: { comm: "M2", teamCore: 1 } },
    ],
  },
  {
    id: "Q16",
    category: "comm",
    title: "우리 퀵이 연패 중이다.",
    description: "다들 점점 말이 없어지고, 집중을 못하는 게 보인다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q16_A", text: "지는 이유를 분석하고 운영을 바꿔본다.", score: { comm: "M5", special: "S8" } },
      { id: "Q16_B", text: "나도 말이 줄어들고 스트레스 받아 게임을 빨리 끄고 싶어진다.", score: { comm: "M4", special: "S6", mentalDown: 1 } },
      { id: "Q16_C", text: "내가 잘해보겠다고 적극적으로 플레이한다.", score: { play: "P4" } },
      { id: "Q16_D", text: "분위기 전환을 위해 가벼운 농담을 하거나 화이팅을 불어넣는다.", score: { comm: "M2", special: "S5", teamCore: 1 } },
    ],
  },
  {
    id: "Q17",
    category: "comm",
    title: "상대나 팀원이 내가 생각하기에 좋은 플레이를 보여줬다.",
    description: "내가 평소에 잘 안 하던 움직임이지만, 확실히 효과가 있어 보이는 플레이였다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q17_A", text: "나중에 따로 혼자 그 플레이를 연습해본다.", score: { comm: "M5", special: "S7" } },
      { id: "Q17_B", text: "어떤 플레이가 좋은 건지 잘 모르겠다. 그냥 피지컬 차이라고 생각한다.", score: { comm: "M6" } },
      { id: "Q17_C", text: "좋은 플레이라는 생각은 하지만, 그 사람 스타일이고 나는 내 방식을 유지한다.", score: { comm: "M6", toxic: 1 } },
      { id: "Q17_D", text: "괜찮은 플레이라고 생각되면 다음 판에 바로 따라 해본다.", score: { special: "S7" } },
    ],
  },
  {
    id: "Q18",
    category: "comm",
    title: "클랜전 중 팀원이 계속 같은 방식으로 죽고 있다.",
    description: "내가 보기엔 그 플레이 때문에 라운드가 반복해서 흔들리는 것 같다.\n그 팀원이 먼저 물어본 건 아니지만, 말해주면 고칠 수도 있을 것 같다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q18_A", text: "요청하지 않았는데 괜히 말하면 기분 나쁠 수 있으니 말하지 않는다.", score: { comm: "M3" } },
      { id: "Q18_B", text: "내가 보기엔 분명한 문제라서, 그 사람이 기분 나쁠 게 확실해도 말해야 한다고 생각한다.", score: { comm: "M6", toxic: 1 } },
      { id: "Q18_C", text: "“거기선 이렇게 나가야 돼” 하고 직접적으로 피드백한다. 상대의 기분은 크게 고려하지 않는다.", score: { comm: "M1", toxic: 1 } },
      { id: "Q18_D", text: "“이렇게 한 번 해보면 어때?” 등 부드럽게 제안한다.", score: { comm: "M2", teamCore: 1 } },
    ],
  },
  {
    id: "Q19",
    category: "comm",
    title: "퀵이 끝났고, 아쉽게 졌다.",
    description: "몇몇 라운드는 우리가 충분히 이길 수 있었던 것 같고, 상대가 반복해서 쓰는 자리나 패턴도 조금 보였던 상황이다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q19_A", text: "우리가 어디서 꼬였는지 생각해보고, 다음엔 그 부분을 바꿔본다.", score: { comm: "M5", special: "S8" } },
      { id: "Q19_B", text: "상대가 자주 쓰던 자리나 패턴을 기억해두고 다음에 써먹는다.", score: { comm: "M5", special: "S8" } },
      { id: "Q19_C", text: "지난 결과에 미련 없이 바로 다음 판을 한다.", score: { comm: "M6" } },
      { id: "Q19_D", text: "너무 깊게 생각하기보다 다음 판에서 좀 더 집중해서 해야겠다고 생각한다.", score: { comm: "M4" } },
    ],
  },
  {
    id: "Q20",
    category: "comm",
    title: "내가 생각하는 내 가장 큰 장점은?",
    options: [
      { id: "Q20_A", text: "팀 분위기나 흐름을 보고, 맞춰야 할 때 맞춰주는 편이다.", score: { comm: "M2" } },
      { id: "Q20_B", text: "괜히 말이 많아지기보다, 필요한 순간에만 말하고 집중하는 편이다.", score: { comm: "M3" } },
      { id: "Q20_C", text: "말리거나 분위기가 안 좋아져도 쉽게 흔들리지 않으려는 편이다.", score: { comm: "M4" } },
      { id: "Q20_D", text: "내 플레이에는 나름의 이유가 있고, 내 기준이 분명한 편이다.", score: { comm: "M6" } },
      { id: "Q20_E", text: "필요한 말을 짧고 바로 해서 상황 전달이 빠른 편이다.", score: { comm: "M1" } },
      { id: "Q20_F", text: "왜 졌는지, 어디서 꼬였는지 생각하고 다음에 바꿔보는 편이다.", score: { comm: "M5" } },
    ],
  },
  {
    id: "Q21",
    category: "comm",
    title: "내가 생각하는 내 단점에 가장 가까운 것은?",
    options: [
      { id: "Q21_A", text: "말이 너무 짧거나 직설적이라, 가끔 차갑게 들릴 수 있다.", score: { comm: "M1" } },
      { id: "Q21_B", text: "생각이 많아져서, 가끔 판단이나 말이 길어질 때가 있다.", score: { comm: "M5" } },
      { id: "Q21_C", text: "내 기준이 강해서, 남의 방식이나 피드백을 바로 받아들이기 어렵다.", score: { comm: "M6", toxic: 1 } },
      { id: "Q21_D", text: "팀 분위기를 신경 쓰다 보니, 내가 하고 싶은 말을 바로 못 할 때가 있다.", score: { comm: "M2" } },
      { id: "Q21_E", text: "확실하지 않으면 말을 아끼는 편이라, 브리핑이 늦거나 부족할 때가 있다.", score: { comm: "M3" } },
      { id: "Q21_F", text: "말리거나 분위기가 안 좋아지면, 표정이나 말투에 티가 나는 편이다.", score: { comm: "M4" } },
    ],
  },
  {
    id: "Q22",
    category: "comm",
    title: "내가 같이 게임할 때 가장 편한 팀원 스타일은?",
    options: [
      { id: "Q22_A", text: "상대 패턴이나 라운드 흐름을 잘 보고 알려주는 사람.", score: { comm: "M5" } },
      { id: "Q22_B", text: "말이 많진 않아도, 자기 자리에서 안정적으로 해주는 사람.", score: { comm: "M3" } },
      { id: "Q22_C", text: "자기 역할이 확실하고, 본인 기준대로 꾸준히 해주는 사람.", score: { comm: "M6" } },
      { id: "Q22_D", text: "말리거나 분위기가 안 좋아져도 감정적으로 흔들리지 않는 사람.", score: { comm: "M4" } },
      { id: "Q22_E", text: "필요한 말만 짧고 정확하게 브리핑해주는 사람.", score: { comm: "M1" } },
      { id: "Q22_F", text: "분위기를 잘 맞추고, 팀원들이 편하게 게임할 수 있게 해주는 사람.", score: { comm: "M2", teamCore: 1 } },
    ],
  },
  {
    id: "Q23",
    category: "comm",
    title: "내가 가장 편하게 느끼는 클랜 분위기는?",
    options: [
      { id: "Q23_A", text: "서로 맞춰주고, 실수해도 너무 날 세우지 않는 분위기.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q23_B", text: "서로 플레이 방식이 달라도, 각자 스타일을 존중해주는 분위기.", score: { comm: "M6" } },
      { id: "Q23_C", text: "필요한 말은 바로 하고, 아닌 건 아니라고 말할 수 있는 분위기.", score: { comm: "M1" } },
      { id: "Q23_D", text: "진 판도 그냥 넘기지 않고, 뭐가 문제였는지 같이 얘기해보는 분위기.", score: { comm: "M5" } },
      { id: "Q23_E", text: "말이 너무 많지 않고, 각자 자기 역할에 집중하는 분위기.", score: { comm: "M3" } },
      { id: "Q23_F", text: "져도 너무 가라앉지 않고, 분위기를 다시 잡을 수 있는 분위기.", score: { comm: "M4", special: "S5" } },
    ],
  },
  {
    id: "Q24",
    category: "comm",
    title: "클랜에서 내가 가장 불편하게 느끼는 상황은?",
    options: [
      { id: "Q24_A", text: "각자 플레이 방식이 다른데, 한쪽 방식만 맞다고 강요하는 상황.", score: { comm: "M6" } },
      { id: "Q24_B", text: "게임 중 말이 너무 많아서 집중이 흐트러지는 상황.", score: { comm: "M3" } },
      { id: "Q24_C", text: "지는 분위기에서 다들 말이 없어지고 가라앉는 상황.", score: { comm: "M4", mentalDown: 1 } },
      { id: "Q24_D", text: "해야 할 말을 아무도 안 하고 애매하게 넘어가는 상황.", score: { comm: "M1" } },
      { id: "Q24_E", text: "같은 문제가 반복되는데 아무도 원인을 짚지 않는 상황.", score: { comm: "M5" } },
      { id: "Q24_F", text: "실수 하나에 분위기가 날카로워지고 서로 예민해지는 상황.", score: { comm: "M2" } },
    ],
  },
  {
    id: "Q25",
    category: "comm",
    title: "클랜에서 내가 어떤 사람으로 보였으면 좋겠는가?",
    options: [
      { id: "Q25_A", text: "왜 이기고 지는지 잘 보고, 다음 판에 도움 되는 말을 해주는 사람.", score: { comm: "M5" } },
      { id: "Q25_B", text: "필요한 순간에 할 말은 하고, 상황을 정확히 전달하는 사람.", score: { comm: "M1" } },
      { id: "Q25_C", text: "말은 많지 않아도 자기 자리에서 안정적으로 해주는 사람.", score: { comm: "M3" } },
      { id: "Q25_D", text: "같이 하면 편하고, 팀원들과 잘 맞춰주는 사람.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q25_E", text: "자기 스타일이 뚜렷하고, 꾸준히 자기 역할을 해내는 사람.", score: { comm: "M6" } },
      { id: "Q25_F", text: "분위기가 흔들릴 때도 쉽게 무너지지 않고 중심을 잡는 사람.", score: { comm: "M4" } },
    ],
  },
  {
    id: "Q26",
    category: "comm",
    title: "클랜 분위기나 운영 방향이 내가 생각하는 방향과 조금 다르다고 느껴진다.",
    description: "예를 들어 게임을 너무 빡세게 하거나, 반대로 너무 가볍게만 하는 분위기라서 내가 원하는 방향과 맞지 않는 느낌이다.\n이때 내 반응에 가장 가까운 것은?",
    options: [
      { id: "Q26_A", text: "나와 맞는 다른 클랜을 간다.", score: { comm: "M6", toxic: 1 } },
      { id: "Q26_B", text: "굳이 크게 말하지 않고, 내가 맞출 수 있는 정도까지만 맞춘다.", score: { comm: "M3" } },
      { id: "Q26_C", text: "클랜 분위기를 해치지 않는 선에서, 서로 맞출 수 있는 방법을 찾아본다.", score: { comm: "M2", teamCore: 1 } },
      { id: "Q26_D", text: "내가 불편한 부분을 바로 말하고, 방향이 맞는지 얘기해본다.", score: { comm: "M1" } },
      { id: "Q26_E", text: "분위기가 계속 안 맞으면 스트레스를 받아 접속이나 참여가 줄어든다.", score: { comm: "M4", mentalDown: 1 } },
    ],
  },
  {
    id: "Q27",
    category: "special",
    title: "클랜전에서 라운드가 중요하게 갈리는 순간이다.",
    description: "이길 수도 있지만, 무리하면 크게 말릴 수도 있는 상황이다.\n팀원들도 어떻게 할지 확실히 정하지 못하고 있다.\n이때 내 생각에 가장 가까운 것은?",
    options: [
      { id: "Q27_A", text: "팀 분위기가 흔들리지 않게 먼저 말로 정리하거나 분위기를 살린다.", score: { special: "S5", teamCore: 1 } },
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
    description: "브리핑은 부족하고, 몇몇 팀원은 따로 움직이고,\n누군가는 실수할 때마다 분위기가 조금씩 날카로워지고 있다.\n이때 내 반응에 가장 가까운 것은?",
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
    description: "브리핑도 늦고, 같은 자리에서 계속 죽고,\n팀원들 사이에서도 “또 저기서 죽었네” 같은 말이 나오기 시작했다.\n그 팀원도 기분이 상한 것 같고,\n이대로 가면 게임보다 사람 감정 문제가 더 커질 것 같다.\n이때 내 반응에 가장 가까운 것은?",
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
    description: "계속된 연패로 다들 지쳐 있고,\n이번 경기를 끝으로 대부분 로그아웃할 분위기다.\n말수도 줄었고, 분위기도 많이 가라앉은 상황이다.\n이때 내 반응에 가장 가까운 것은?",
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
