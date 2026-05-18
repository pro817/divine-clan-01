import React, { useMemo, useState } from 'react'
import { Crosshair, Shield, Radio, Users, Share2, Trophy, RotateCcw, ChevronRight, Clock, BarChart3, MonitorSmartphone } from 'lucide-react'

const weaponGroups = {
  스나: ['AWP', '윈체스터', 'MSR-200', '컴벳보우'],
  라이플: ['AK-47', 'NA-94', 'SCAR', 'GAL-1'],
  특수총: ['UAR', 'SG870', 'KRISS'],
}

const axes = ['ATK','DEF','BAK','ORD','BRF','KIL','VAR','CLU','MEN','BAL','BAD']
const axisName = { ATK:'돌파', DEF:'수비', BAK:'백업', ORD:'오더', BRF:'브리핑', KIL:'킬캐치', VAR:'변수', CLU:'클러치', MEN:'멘탈', BAL:'균형', BAD:'주의습관' }

const results = [
  ['강점형','선진입 돌파형','강태오','한서윤','선진입 돌파러','ATK','판을 여는 건 남이 아니라 나다.'],
  ['강점형','첫킬 사냥형','차도윤','윤하린','첫킬 사냥꾼','KIL','첫킬 하나로 라운드 분위기를 바꾼다.'],
  ['강점형','각잡이 수비형','김도현','임서아','고정각 수문장','DEF','여긴 내가 막는다.'],
  ['강점형','전진 수비형','류지후','백하은','전진 압박러','KIL','수비라고 가만히 있으란 법은 없다.'],
  ['강점형','즉시 백업형','남지훈','이서현','즉시 백업러','BAK','소리 들리면 이미 움직이고 있다.'],
  ['강점형','커버 사격형','윤재민','김나윤','커버 장인','BAK','앞사람이 싸우면 나는 뒤에서 완성한다.'],
  ['강점형','라운드 설계형','오현준','송지유','라운드 설계자','ORD','한 판은 들어가기 전부터 시작된다.'],
  ['강점형','상황 판단형','백도윤','강서연','상황 계산러','ORD','지금 필요한 선택이 뭔지 안다.'],
  ['강점형','위치 브리핑형','하민석','이가은','위치 브리핑러','BRF','내가 본 건 팀도 알아야 한다.'],
  ['강점형','사운드 캐치형','고지완','문서희','사운드 감지러','BRF','발소리 하나로 라운드가 보인다.'],
  ['강점형','빈틈 암살형','강이안','윤세아','빈틈 암살자','VAR','상대가 방심하는 순간이 내 타이밍이다.'],
  ['강점형','타이밍 킬형','박지환','서유진','타이밍 킬러','KIL','한 박자 늦게, 그래서 더 아프게.'],
  ['강점형','페이크 운영형','유준영','백서린','페이크 장인','VAR','진짜는 소리 뒤에 숨겨둔다.'],
  ['강점형','역습 전환형','김하준','신다연','역습 전환러','VAR','밀리는 판에서 길을 찾는다.'],
  ['강점형','1대1 집중형','박로운','이채윤','1대1 해결사','CLU','마지막 한 명은 내가 잡는다.'],
  ['강점형','시간 계산형','최서진','강나은','시간 계산러','CLU','급한 건 상대지, 내가 아니다.'],
  ['강점형','분위기 회복형','유태민','김서아','분위기 회복러','MEN','한 판 졌다고 게임이 끝난 건 아니다.'],
  ['강점형','멘탈 방패형','강현우','박예원','멘탈 방패','MEN','말려도 무너지지 않는다.'],
  ['강점형','올라운더형','서지훈','한지민','올라운더','BAL','어디 세워도 기본은 한다.'],
  ['강점형','팀 맞춤형','이현성','임채원','팀 맞춤러','BAL','내 플레이보다 팀에 필요한 플레이를 한다.'],
  ['강점형','폭탄 진입형','박시현','서지안','폭탄 진입러','ATK','폭은 던지는 게 아니라 길을 여는 도구다.'],
  ['강점형','사이트 봉쇄형','장태민','정다은','사이트 봉쇄자','DEF','설치하러 오면 여기서 막힌다.'],
  ['강점형','데미지 공유형','최도겸','정하율','데미지 공유러','BRF','피 정보 하나가 다음 킬을 만든다.'],
  ['강점형','침착 지휘형','주서준','남하린','침착 오더러','ORD','급할수록 짧고 정확하게.'],
  ['강점형','숨은 에이스형','백지호','강리안','숨은 에이스','BAL','티는 안 나도 판은 내가 살린다.'],
  ['양날의 검형','압박 러쉬형','이준서','강유나','압박 러쉬러','ATK','상대가 생각하기 전에 밀어붙인다.'],
  ['양날의 검형','희생 진입형','정우진','오세아','희생 진입러','ATK','내가 먼저 맞아도 팀이 들어가면 된다.'],
  ['양날의 검형','끊어먹기 수비형','서강준','문채린','끊어먹기 수비러','DEF','들어오는 순서대로 정리한다.'],
  ['양날의 검형','후방 안정형','최민재','신예린','후방 안정러','DEF','안 죽는 것도 능력이다.'],
  ['양날의 검형','리벤지 회수형','한도겸','박소율','리벤지 회수러','KIL','우리 팀 잡은 적은 그냥 못 보낸다.'],
  ['양날의 검형','생존 백업형','권도하','조아린','생존 백업러','BAK','죽지 않고 끝까지 도와준다.'],
  ['양날의 검형','진입 타이밍형','신재하','유채원','타이밍 진입러','ORD','들어갈 때와 참을 때를 구분한다.'],
  ['양날의 검형','수비 재배치형','이건우','홍예나','재배치 수비러','ORD','계속 같은 자리에 있으면 읽힌다.'],
  ['양날의 검형','조용한 핵심콜형','서민규','차예림','핵심콜러','BRF','말은 짧게, 정보는 정확하게.'],
  ['양날의 검형','후방 침투형','이도겸','한채아','후방 침투러','VAR','상대 뒤가 비면 이미 늦었다.'],
  ['양날의 검형','각 전환형','정시온','김리아','각 전환러','VAR','방금 본 각에 다시 있진 않는다.'],
  ['양날의 검형','단독 흔들기형','문태오','임유빈','단독 흔들러','VAR','혼자 한쪽을 시끄럽게 만든다.'],
  ['양날의 검형','도박 성공형','한지오','조민아','도박 승부러','VAR','이 판은 내가 뒤집을 수 있다. 물론 망할 수도 있다.'],
  ['양날의 검형','역전 본능형','장우혁','서아린','역전 본능러','CLU','불리할수록 눈이 뜨인다.'],
  ['양날의 검형','냉정 피드백형','이주원','최라희','냉정 피드백러','MEN','감정보다 문제 해결이 먼저다.'],
  ['개선 필요형','혼자 돌진형','강태식','한유라','혼자 돌진러','ATK','백업? 일단 들어가고 생각한다.'],
  ['개선 필요형','무빙 과신형','차민규','서예나','무빙 과신러','VAR','화려한데 결과가 애매하다.'],
  ['개선 필요형','브리핑 실종형','박도윤','김나린','무음 플레이어','BRF','나는 봤다. 하지만 팀은 몰랐다.'],
  ['개선 필요형','사후 오더형','이건호','오서현','사후 오더러','ORD','살아있을 땐 조용했고, 죽고 나서 바빠졌다.'],
  ['개선 필요형','남탓 멘탈형','정민성','임채아','남탓 멘탈러','MEN','라운드가 지면 범인부터 찾는다.'],
  ['개선 필요형','자리 집착형','윤지훈','백하린','자리 붙박이','DEF','내 자리는 끝까지 내 자리다.'],
  ['개선 필요형','백업 지각형','최도하','문가은','늦백업러','BAK','도착하면 이미 상황이 끝나 있다.'],
  ['개선 필요형','폭 컬렉터형','서재민','강서윤','폭 컬렉터','VAR','폭은 인벤토리에 있을 때 가장 빛난다.'],
  ['개선 필요형','에임 기복형','남시우','조예림','오늘만 에이스','KIL','오늘 맞으면 에이스, 안 맞으면 침묵.'],
  ['개선 필요형','입오더형','권태준','신다희','입오더러','ORD','말은 많은데 방향은 흐리다.'],
].map((r,i)=>({id:i+1,group:r[0],type:r[1],male:r[2],female:r[3],title:r[4],axis:r[5],phrase:r[6]}))

const Q = (q,a,b,c,d) => ({q, options:[a,b,c,d]})
const questions = [
  Q('공격 시작 직후 나는 보통?', ['롱 쪽 픽이나 자리 싸움을 먼저 본다',{KIL:2}], ['숏이나 중통 쪽으로 라플 각을 잡는다',{ATK:2}], ['팀 진입 타이밍에 맞춰 뒤에서 커버한다',{BAK:2}], ['상대 수비 배치를 보고 천천히 운영한다',{ORD:2}]),
  Q('숏 진입 상황에서 나는?', ['먼저 몸으로 각을 열어준다',{ATK:2}], ['두 번째로 따라가며 교전을 받아준다',{BAK:2}], ['뒤에서 빠지는 적을 잡는다',{KIL:2}], ['상대 백업 위치를 계산한다',{ORD:2}]),
  Q('중통 쪽 정보가 필요할 때 나는?', ['빠르게 얼굴 내밀고 확인한다',{ATK:1,KIL:1}], ['폭이나 소리로 반응을 본다',{VAR:2}], ['팀원과 같이 체크한다',{BAK:2,BRF:1}], ['무리하지 않고 다른 라인 정보와 비교한다',{ORD:2}]),
  Q('폭을 들고 공격할 때 나는?', ['진입 전에 바로 던지고 들어간다',{ATK:2}], ['팀원이 들어갈 때 맞춰서 던진다',{BAK:2}], ['상대가 나올 만한 곳에 견제용으로 쓴다',{VAR:1,DEF:1}], ['끝까지 들고 있다가 후반에 쓴다',{CLU:1,BAD:1}]),
  Q('공격 때 우리 팀이 멈칫하면?', ['내가 먼저 들어가서 흐름을 만든다',{ATK:2}], ['한 명 더 붙으라고 하고 같이 들어간다',{BAK:2}], ['브리핑 다시 정리하고 맞춰 들어간다',{BRF:2}], ['진입 말고 다른 라인으로 전환한다',{ORD:2,VAR:1}]),
  Q('설치 상황에서 나는?', ['설치각 열리면 바로 들어가서 길을 만든다',{ATK:2}], ['설치하는 팀원을 몸으로 커버한다',{BAK:2}], ['설치 후 빠질 자리와 적 백업 루트를 본다',{DEF:1,ORD:1}], ['시간 계산해서 설치/페이크를 판단한다',{CLU:2,ORD:1}]),
  Q('설치 후 내가 선호하는 플레이는?', ['전진해서 오는 적을 먼저 끊는다',{KIL:2,ATK:1}], ['설대 주변에서 안정적으로 막는다',{DEF:2}], ['팀원 위치에 맞춰 교차각을 잡는다',{BAK:2}], ['시간 끌면서 상대를 급하게 만든다',{CLU:2}]),
  Q('공격 때 내가 가장 답답한 상황은?', ['아무도 먼저 안 들어가는 상황',{ATK:2}], ['각을 안 지우고 우르르 들어가는 상황',{DEF:1,ORD:1}], ['백업 없이 한 명씩 죽는 상황',{BAK:2}], ['오더 없이 계속 같은 곳만 가는 상황',{ORD:2}]),
  Q('내가 공격에서 잘하는 역할은?', ['첫 진입',{ATK:2}], ['두 번째 진입',{BAK:1,ATK:1}], ['후방 커버',{BAK:2}], ['라운드 운영',{ORD:2}]),
  Q('공격 때 상대가 수비적으로만 버티면?', ['과감하게 한쪽을 뚫는다',{ATK:2}], ['폭으로 자리 빼고 들어간다',{ATK:1,VAR:1}], ['팀원과 동시 진입을 맞춘다',{BAK:2}], ['페이크로 백업을 흔든다',{VAR:2,ORD:1}]),
  Q('공격 때 내가 자주 하는 실수는?', ['혼자 먼저 들어가다 잘린다',{BAD:2,ATK:1}], ['각을 너무 오래 보다가 타이밍을 놓친다',{BAD:1,DEF:1}], ['백업 위치가 애매하다',{BAD:2,BAK:1}], ['운영을 생각하다가 진입이 늦어진다',{BAD:1,ORD:1}]),
  Q('수비 시작 직후 나는?', ['전진해서 먼저 정보나 킬을 노린다',{ATK:1,KIL:2}], ['맡은 자리에 고정해서 안정적으로 본다',{DEF:2}], ['뚫릴 만한 라인에 백업 대기한다',{BAK:2}], ['상대 첫 움직임 보고 수비 배치를 바꾼다',{ORD:2}]),
  Q('롱 수비를 맡으면 나는?', ['스나나 대기각으로 먼저 픽을 본다',{KIL:2}], ['들어올 때까지 안정적으로 각을 잡는다',{DEF:2}], ['팀원 콜 들리면 바로 빠져서 백업 간다',{BAK:2}], ['상대가 롱을 자주 오면 자리 변화를 준다',{ORD:1,VAR:1}]),
  Q('숏 수비를 맡으면 나는?', ['전진해서 먼저 끊어먹는다',{KIL:2,ATK:1}], ['기본각 잡고 확실히 막는다',{DEF:2}], ['뚫리기 전에 백업 콜을 빠르게 한다',{BRF:2,BAK:1}], ['상대 폭 타이밍 보고 빠지거나 재진입한다',{ORD:2}]),
  Q('중통 쪽 소리가 들리면?', ['바로 피킹해서 확인한다',{KIL:1,ATK:1}], ['내 각 유지하면서 기다린다',{DEF:2}], ['위치 브리핑하고 백업을 부른다',{BRF:2}], ['다른 라인 페이크 가능성까지 본다',{ORD:2}]),
  Q('수비 중 한쪽이 뚫렸다.', ['바로 리벤지하러 간다',{KIL:1,BAD:1}], ['내 자리 유지하고 추가 진입을 막는다',{DEF:2}], ['빠르게 백업 가서 교차각을 만든다',{BAK:2}], ['인원수 보고 리테이크 타이밍을 정한다',{ORD:2,CLU:1}]),
  Q('내가 수비에서 가장 잘하는 건?', ['첫 픽 따기',{KIL:2}], ['한 자리 버티기',{DEF:2}], ['빠른 백업',{BAK:2}], ['수비 재배치',{ORD:2}]),
  Q('상대가 계속 같은 쪽으로 온다.', ['내가 먼저 나가서 흐름을 끊는다',{KIL:2,VAR:1}], ['그 자리를 더 단단하게 막는다',{DEF:2}], ['백업 인원을 빨리 붙인다',{BAK:2}], ['일부러 비워 보이게 해서 낚는다',{VAR:2,ORD:1}]),
  Q('리테이크 상황에서 나는?', ['먼저 들어가서 한 명 끊어본다',{KIL:2}], ['각 하나씩 지우면서 천천히 간다',{DEF:1,CLU:1}], ['팀원과 동시에 맞춰 들어간다',{BAK:2}], ['시간, 폭, 위치 보고 순서를 정한다',{CLU:2,ORD:1}]),
  Q('적을 봤는데 못 잡았다.', ['다시 피킹해서 잡으려 한다',{KIL:2}], ['빠지고 각을 유지한다',{DEF:2}], ['바로 위치와 방향을 브리핑한다',{BRF:2}], ['팀원 위치 보고 협공을 콜한다',{ORD:2,BAK:1}]),
  Q('내가 브리핑할 때 주로 말하는 건?', ['한 명 봄 정도만 말한다',{BRF:1,BAD:1}], ['위치 위주로 짧게 말한다',{BRF:2}], ['위치, 인원, 피, 이동방향까지 말한다',{BRF:3}], ['다음 행동까지 같이 말한다',{ORD:2,BRF:1}]),
  Q('팀원이 교전 중이면 나는?', ['내가 볼 수 있는 적이면 바로 같이 싸운다',{KIL:1,BAK:1}], ['내 자리를 버리면 안 되는지 먼저 본다',{DEF:2}], ['바로 백업 가거나 커버각을 잡는다',{BAK:3}], ['팀원 위치 기준으로 누가 가야 할지 말한다',{ORD:2}]),
  Q('죽고 나서 나는?', ['아쉬워서 말이 많아진다',{BAD:3}], ['조용히 다음 라운드 준비한다',{MEN:1}], ['내가 본 정보만 짧게 말한다',{BRF:2}], ['살아있는 팀원이 필요한 판단만 말한다',{ORD:2}]),
  Q('오더가 없을 때 나는?', ['그냥 내가 먼저 움직인다',{ATK:2}], ['기본 자리 기준으로 플레이한다',{DEF:2}], ['팀원 위치 보면서 맞춘다',{BAK:2}], ['내가 간단하게 방향을 정한다',{ORD:2}]),
  Q('팀이 말렸을 때 나는?', ['내가 킬로 풀려고 한다',{KIL:2}], ['무리하지 말고 기본만 하자고 한다',{DEF:1,MEN:1}], ['분위기 안 깨지게 말해준다',{MEN:2}], ['왜 말리는지 짚고 운영을 바꾼다',{ORD:2}]),
  Q('팀원이 실수했을 때 나는?', ['바로 뭐가 문제인지 말한다',{BAD:1,ORD:1}], ['일단 넘어가고 다음 판 한다',{MEN:1}], ['괜찮다고 하고 분위기를 잡는다',{MEN:2}], ['반복되면 조용히 개선점을 말한다',{ORD:1,MEN:1}]),
  Q('클랜전에서 내가 가장 중요하다고 보는 건?', ['첫킬',{KIL:2}], ['자리 유지',{DEF:2}], ['백업과 브리핑',{BAK:1,BRF:1}], ['라운드 운영',{ORD:2}]),
  Q('팀원이 같이 가자고 하면?', ['바로 앞장선다',{ATK:2}], ['뒤에서 각을 봐준다',{BAK:1,DEF:1}], ['타이밍 맞춰 같이 나간다',{BAK:2}], ['어디로 갈지 먼저 정리한다',{ORD:2}]),
  Q('내가 클랜에서 맡기 좋은 역할은?', ['선봉',{ATK:2}], ['수비 고정',{DEF:2}], ['백업',{BAK:2}], ['오더',{ORD:2}]),
  Q('내가 잘하는 판은 보통?', ['초반에 내가 한 명 따는 판',{KIL:2}], ['상대가 내 자리로 와주는 판',{DEF:2}], ['팀원이랑 합이 잘 맞는 판',{BAK:2}], ['상대 패턴이 읽히는 판',{ORD:2}]),
  Q('내가 가장 찔리는 말은?', ['또 혼자 갔네',{BAD:3,ATK:1}], ['왜 말을 안 해',{BAD:3,BRF:-1}], ['백업 너무 늦어',{BAD:3,BAK:-1}], ['죽고 나서 말 많네',{BAD:3,ORD:1}]),
  Q('나는 죽었을 때 보통?', ['왜 안 따라왔냐고 생각한다',{BAD:2,MEN:-1}], ['내가 본 걸 말 안 하고 넘어간다',{BAD:2,BRF:-1}], ['아까운 장면을 계속 생각한다',{BAD:1,MEN:-1}], ['살아있는 사람에게 계속 말한다',{BAD:3}]),
  Q('내 브리핑 문제에 가까운 건?', ['싸우느라 말할 시간이 없다',{BAD:2,ATK:1}], ['뭐라고 말해야 할지 모른다',{BAD:2}], ['말은 하는데 늦다',{BAD:2,BAK:-1}], ['너무 많이 말해서 헷갈리게 한다',{BAD:2,ORD:1}]),
  Q('내가 폭을 못 쓰는 이유는?', ['진입하느라 던질 타이밍을 놓친다',{BAD:1,ATK:1}], ['아끼다가 결국 못 쓴다',{BAD:3}], ['어디에 던져야 할지 애매하다',{BAD:2}], ['팀원 타이밍과 안 맞는다',{BAD:2,BAK:-1}]),
  Q('내가 오더를 하면 생기는 문제는?', ['내가 먼저 죽어서 오더가 끊긴다',{BAD:2,ATK:1}], ['너무 안정적으로만 하게 된다',{DEF:1}], ['팀원이 못 따라오면 짜증난다',{BAD:2,MEN:-1}], ['말이 많아서 팀이 헷갈린다',{BAD:3,ORD:1}]),
  Q('내가 수비에서 가장 위험한 순간은?', ['먼저 따려고 나갔다가 죽을 때',{BAD:2,KIL:1}], ['자리만 보다가 다른 곳이 다 뚫릴 때',{BAD:2,DEF:1}], ['백업 가는 길에 늦거나 잘릴 때',{BAD:2,BAK:1}], ['상황 판단하다가 타이밍 놓칠 때',{BAD:1,ORD:1}]),
  Q('내가 공격에서 가장 위험한 순간은?', ['혼자 먼저 진입할 때',{BAD:3,ATK:1}], ['너무 오래 대기할 때',{BAD:1,DEF:1}], ['팀원 위치 안 보고 움직일 때',{BAD:2,BAK:-1}], ['페이크하다가 팀과 따로 놀 때',{BAD:2,VAR:1}]),
  Q('에임이 안 맞는 날 나는?', ['그래도 계속 싸워서 풀려고 한다',{BAD:2,KIL:1}], ['뒤에서 버티는 쪽으로 바꾼다',{DEF:2}], ['백업과 브리핑 위주로 바꾼다',{BAK:1,BRF:1}], ['오더나 운영으로 기여하려 한다',{ORD:2}]),
  Q('팀 분위기가 안 좋을 때 나는?', ['답답해서 말이 세진다',{BAD:3,MEN:-1}], ['그냥 조용해진다',{MEN:1}], ['일부러 분위기를 풀어준다',{MEN:2}], ['다음 판 운영을 정리한다',{ORD:2}]),
  Q('내 클랜전 스타일을 한마디로 말하면?', ['내가 열어야 한다',{ATK:2}], ['내가 막아야 한다',{DEF:2}], ['내가 맞춰줘야 한다',{BAK:2}], ['내가 정리해야 한다',{ORD:2}]),
]

function App(){
  const [screen,setScreen]=useState('start')
  const [nick,setNick]=useState('')
  const [gender,setGender]=useState('male')
  const [weapon,setWeapon]=useState('')
  const [idx,setIdx]=useState(0)
  const [answers,setAnswers]=useState(Array(questions.length).fill(null))

  const scores = useMemo(()=>{
    const s=Object.fromEntries(axes.map(a=>[a,0]))
    answers.forEach((ans,i)=>{
      if(ans===null) return
      const delta=questions[i].options[ans][1]
      Object.entries(delta).forEach(([k,v])=>s[k]=(s[k]||0)+v)
    })
    return s
  },[answers])

  const result = useMemo(()=>{
    const bad=scores.BAD||0
    const pool = results.filter(r => bad>=22 ? r.group==='개선 필요형' : bad>=13 ? r.group==='양날의 검형' : r.group==='강점형')
    return [...pool].sort((a,b)=>(scores[b.axis]||0)-(scores[a.axis]||0))[0] || results[0]
  },[scores])

  const topScores = Object.entries(scores).filter(([k])=>k!=='BAD').sort((a,b)=>b[1]-a[1]).slice(0,5)
  const progress = Math.round((answers.filter(v=>v!==null).length/questions.length)*100)
  const name = gender==='female' ? result.female : result.male
  const groupTone = result.group==='개선 필요형' ? 'danger' : result.group==='양날의 검형' ? 'warn' : 'good'

  function choose(i){ const next=[...answers]; next[idx]=i; setAnswers(next) }
  function next(){ if(idx<questions.length-1) setIdx(idx+1); else setScreen('result') }
  function reset(){ setScreen('start'); setNick(''); setGender('male'); setWeapon(''); setIdx(0); setAnswers(Array(questions.length).fill(null)) }

  if(screen==='start') return <main className="site hero">
    <header className="nav"><div className="brand"><span className="logo">A</span> 에이보급창고</div><nav><a>테스트 소개</a><a>유형 소개</a><a>랭킹</a><a>커뮤니티</a><button><Share2 size={17}/> 공유하기</button></nav></header>
    <section className="hero-body">
      <div className="copy">
        <h1>에이보급창고<br/><span>클랜전 스타일 테스트</span></h1>
        <h2>너는 클랜전에서 어떤 타입인가?</h2>
        <p>A-보급창고에서 펼쳐지는 클랜전. 당신의 플레이 성향과 스타일을 분석해 드립니다.</p>
        <div className="features">
          <div><Crosshair/><b>성향 분석</b><small>플레이 스타일 분석</small></div>
          <div><Shield/><b>유형 판별</b><small>클랜전 타입 진단</small></div>
          <div><Trophy/><b>전략 추천</b><small>승리 전략 가이드</small></div>
          <div><Share2/><b>결과 공유</b><small>친구와 공유하기</small></div>
        </div>
      </div>
      <section className="start-panel">
        <div className="field nick"><label>닉네임</label><input value={nick} onChange={e=>setNick(e.target.value)} placeholder="닉네임 입력" /></div>
        <div className="field"><label>성별</label><div className="gender"><button className={gender==='male'?'active':''} onClick={()=>setGender('male')}>♂<span>남자</span></button><button className={gender==='female'?'active female':''} onClick={()=>setGender('female')}>♀<span>여자</span></button></div></div>
        <div className="field weapon"><label>선호 무기</label><div className="weapon-grid">{Object.entries(weaponGroups).map(([g,items])=><div className="weapon-box" key={g}><b>{g}</b>{items.map(w=><label className="radio" key={w}><input type="radio" checked={weapon===w} onChange={()=>setWeapon(w)}/><span>{w}</span></label>)}</div>)}</div></div>
      </section>
      <button className="start-btn" disabled={!nick.trim()||!weapon} onClick={()=>setScreen('quiz')}>» 테스트 시작 »</button>
    </section>
    <footer className="foot"><span><Clock size={16}/> 약 3~5분 소요</span><span><BarChart3 size={16}/> 50가지 유형</span><span><MonitorSmartphone size={16}/> 모바일 / PC 가능</span></footer>
  </main>

  if(screen==='quiz') return <main className="quiz-page"><div className="quiz-card"><div className="quiz-top"><b>{idx+1} / {questions.length}</b><div className="bar"><span style={{width:`${progress}%`}} /></div><b>{progress}%</b></div><h2>Q{idx+1}. {questions[idx].q}</h2><div className="choices">{questions[idx].options.map((o,i)=><button key={o[0]} className={answers[idx]===i?'selected':''} onClick={()=>choose(i)}><b>{String.fromCharCode(65+i)}</b>{o[0]}</button>)}</div><div className="quiz-actions"><button onClick={()=>setIdx(Math.max(0,idx-1))} disabled={idx===0}>이전</button><button onClick={next} disabled={answers[idx]===null}>{idx===questions.length-1?'결과 보기':'다음'} <ChevronRight size={16}/></button></div></div></main>

  const max = Math.max(...topScores.map(x=>x[1]),1)
  return <main className="result-page"><section className="result-card"><div className="result-head"><span className={`pill ${groupTone}`}>{result.group}</span><span className="pill">{weapon}</span><span className="pill">{nick||'익명'}</span><h1>{name}형 {weapon} {result.title}</h1><h2>“{result.phrase}”</h2></div><div className="result-body"><article><h3>결과 설명</h3><p>{result.type}은 에이보급창고 클랜전에서 <b>{axisName[result.axis]}</b> 성향이 강하게 드러나는 타입이다. 선택한 주무기 <b>{weapon}</b> 기준으로 플레이 스타일이 반영되었다.</p><div className="advice"><div><h4>강점</h4><ul><li>자기 역할이 비교적 명확하다.</li><li>팀 조합에 따라 강점이 크게 살아난다.</li><li>반복 플레이보다 성향을 알고 운용하면 효율이 올라간다.</li></ul></div><div><h4>주의점</h4><ul><li>에이보급창고는 백업과 브리핑이 늦으면 바로 무너진다.</li><li>강점만 밀면 상대에게 읽힐 수 있다.</li><li>결과가 개선 필요형이면 습관 교정이 우선이다.</li></ul></div></div><div className="share-box">나는 <b>{name}형 {weapon} {result.title}</b><br/>“{result.phrase}”<br/>너도 해봐.</div></article><aside><h3>성향 점수</h3>{topScores.map(([k,v])=><div className="score" key={k}><span>{axisName[k]}</span><b>{v}</b><i><em style={{width:`${v/max*100}%`}} /></i></div>)}<button className="again" onClick={reset}><RotateCcw size={16}/> 다시 하기</button></aside></div></section></main>
}

export default App
