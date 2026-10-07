# 개인 페이지 · CV · GitHub 정리

최신 구성 기준: 2026-10-08. 아래 작업 기록은 초기 초안부터의 변경 이력이며, 현재 상태는 이 절을 기준으로 한다.

## 공개 반영 구성

- 홈: 이름과 연락처 → 연구 관심 소개 → Education → Publications → Research & Engineering Experience → Featured Projects. 홈 상단 navigation과 중복 소속 표기는 제거했다.
- 논문 카드: 제목 → 저자 → CoRL 2026 · Spotlight → Project page · Video → 소개글.
- 경험: RAI Lab → Rosota → Sequor Robotics → SNU Robotics Lab. 모든 미디어 캡션을 제거했고, Rosota·Sequor 영상과 SNU 이미지 영역은 최대 폭 420px로 정리했다.
- 프로젝트: SWIVL → LIVerse → K-Startup Challenge → Auto Balancing Case. 수동 스크롤과 6초 간격 자동 이동을 지원한다. K-Startup 소개는 개발을 이끈 역할만 요약하고, 메타 정보에는 Technical Leader와 US$11,000 상금만 표시한다.
- SWIVL, LIVerse, Auto Balancing Case의 상세 페이지는 `draft: true`로 공개 빌드에서 제외한다. 공통 이미지는 `static/projects/`에서 제공한다.
- K-Startup 외 모든 MP4는 실제 오디오 트랙이 없다. K-Startup은 오디오를 유지하며 기본 음소거 자동 재생을 사용한다.
- CV는 기존 LaTeX editor에서 검증한 최신 2페이지 PDF를 두 기존 다운로드 URL에 동일하게 제공한다. Selected Projects·Technical Skills·Research interests 제목·상단 중복 소속은 제거했다.
- 사용하지 않는 새 미디어 12개는 repository 밖 `media-originals/2026-10-08-release-unused/`에 보관했다. 공개 파일에는 현재 사용하는 crop·압축본을 포함한다.
- 공개 배포는 `main` push에 연결된 `.github/workflows/deploy.yml`을 사용한다. Production build는 초안 페이지를 포함하지 않는다.
- CI에서는 `hugo mod graph`로 `go.mod`에 고정한 테마를 가져온다. 기존 `hugo mod get`은 배포 중 테마를 최신 버전으로 올려 Hugo 0.154.5와 호환되지 않는 템플릿을 가져오는 문제가 있어 교체했다.

## 소개 방향

현재 KAIST RAI Lab 석사 과정과 실제 연구 결과를 먼저 보여준다. 전체 소개는 robot learning, control, planning과 real-world robotics를 중심으로 manipulation과 locomotion 모두에 대한 관심을 드러낸다. 연구 제목과 기여를 짧고 구체적으로 설명하고, 논문과 프로젝트를 구분한다.

소개 문구는 기존 CV의 control and planning of dynamic systems 및 physical intelligence through learning을 활용하고, real-world manipulation과 locomotion 모두에 대한 관심으로 마무리한다. 두 번째 문단에는 현재 Prof. Jemin Hwangbo의 KAIST RAI Lab 석사 과정과 과거 Prof. Frank C. Park의 SNU Robotics Lab 학부 연구 인턴 이력을 소개한다. 첫 문단은 author `bio`에서 가져와 중복 편집을 줄인다.

## 확인한 사실

| 항목 | 반영할 내용 | 근거 |
| --- | --- | --- |
| 현재 소속 | M.S. Student in Mechanical Engineering, RAI Lab, KAIST; Prof. Jemin Hwangbo | 사용자 확인 |
| 석사 시작 | Fall 2026 | 사용자 확인: 현재 1학기 |
| 공개 email | erickun0125@kaist.ac.kr | 사용자 지정 |
| CoRL 논문 | Constraint-Decomposed Impedance Control from Generative Policy for Articulated Object Manipulation | 제공된 camera-ready PDF |
| 저자 순서 | Kyungseo Park, Byeongdo Lim, Jungbin Lim, Minseok Choi, Frank C. Park | camera-ready PDF와 논문 프로젝트 페이지 |
| 논문 표기 | CoRL 2026, Spotlight; accepted와 camera-ready 진행 문구는 표시하지 않음 | 사용자 확인 및 최신 표기 요청 |
| 학사 졸업 | 2026-08-28; ME 및 ECE 복수전공 학위 | 영문·국문 성적증명서 |
| 졸업 성적 | GPA 4.10/4.30; Summa Cum Laude; Ranked 3rd in the department | 영문 성적증명서; 석차 표현은 사용자 요청 반영 |
| RAI Lab 인턴 | Jun 2024-Aug 2024 | 기존 프로젝트 페이지와 CV |
| Sequor Robotics | Jun 2025-Oct 2025 | 기존 페이지와 CV; 최종 날짜는 후속 검토 가능 |
| Rosota 활동 | Mar 2025-May 2026 | 사용자 확인 |
| Frank C. Park Robotics Lab 인턴 | Jul 2025-Jul 2026 | 사용자 확인 |

성적증명서 원본과 개인 식별 정보는 웹 배포 파일에 포함하지 않는다. 논문 affiliation은 연구 당시의 Seoul National University를 유지하고, 개인 profile에 현재 KAIST 소속을 표시한다.

## 실행 단계

| 단계 | 작업 | 현재 상태 |
| --- | --- | --- |
| 1. 자료와 링크 점검 | 기존 CV, camera-ready, 졸업 기록, 미디어, GitHub 목록 확인 | 완료 |
| 2. 페이지 구성 | 소개 → Education → Publications → Research & Engineering Experience → Featured Projects | 로컬 초안 구현 |
| 3. CV 개편 | 새 LaTeX 양식; 학력·논문·연구 경험 중심의 간결한 1페이지 | 로컬 초안 구현 |
| 4. 상세 자료 보강 | Rosota 내용·시각화, 발표 포스터, 선택적 추가 영상 | Rosota 요약·영상·기간 반영; 포스터 대기 |
| 5. GitHub 정리 | 공개 유지 목록 확정, README·description·visibility 정리 | 세부 방침 수령 후 진행 |
| 6. 공개 반영 | 최종 내용과 링크 검증, repository 반영 및 GitHub Pages 배포 | 후속 단계 |

## 페이지 구성과 유지보수 위치

- `data/authors/me.yaml`: 현재 소속, 학력, 경험 카드, 기간과 미디어.
- `data/publications.yaml`: 논문 제목, 저자 순서, venue, Spotlight, teaser와 resource URL. 공개 PDF URL이 정해지면 `paper_url`에 입력한다.
- `data/portfolio.yaml`: Featured Projects의 표시 순서, 요약, 내부 링크와 cover.
- `layouts/_partials/profile-home.html`: 홈 섹션 순서와 구성.
- `layouts/_partials/hooks/head-end/custom-styles.html`: typography와 반응형 레이아웃.
- `content/projects/`: SWIVL, LIVerse, Auto Balancing Case의 간결한 내부 상세 페이지. 기존 URL을 유지한다.
- CV 편집 소스는 인접한 기존 `CV` repository에 저장하고, 검토한 PDF를 `static/uploads/cv_kyungseopark.pdf`에 동기화한다. Hugo menu의 URL 정규화에 맞춰 소문자 경로를 사용하고, 기존 `CV_KyungseoPark.pdf` 주소도 같은 PDF로 유지한다.

경험 카드는 요청된 순서인 RAI Lab → Rosota → Sequor Robotics → Frank C. Park의 Robotics Lab로 표시한다. 각 카드는 역할, 연구 주제, 짧은 기여 설명, 영상·이미지로 구성한다. 홈에서는 경험별 상세 페이지 링크를 사용하지 않는다. 기존 인턴 프로젝트 URL은 이전 링크 호환을 위해 유지한다.

최신 경험 문구: RAI Lab은 sparse rewards에 대응하는 4-step reward curriculum과 motor-aware hard constraints 위반을 penalize하는 log-barrier rewards를 설명한다. Rosota 역할은 Early Crew Member, 제목은 RCM-Aware Imitation Learning for Laparoscopic Suturing이며, surgeon demonstrations·instrument sensing·digital twin feasibility checks·trocar-adaptive diffusion policies를 요약한다. Sequor 직함은 AI & Robotics Engineer Intern이며, 설명에는 reinforcement learning을 풀어 쓰고 학습된 policy의 sim-to-real deployment pipeline 구축을 강조한다. SNU 카드에서는 `titles`로 Screw-Wrench Informed Impedance Variable Learning과 Constraint-Decomposed Impedance Control from Generative Policy를 각각 나누어 표시하며, 요약 문단은 넣지 않는다. CoRL 이미지 캡션에도 같은 연구 제목을 사용한다. 소개 헤더의 ROBOT LEARNING · CONTROL · PLANNING 보조 문구는 제거한다.

Featured Projects는 SWIVL, LIVerse, Auto Balancing Case 세 개만 표시한다. 상세 페이지는 요약 → 접근 방법 → 이미지·영상 → 발표 포스터 형식으로 확장한다. 현재 자료를 발표 포스터로 오인해서 표시하지 않는다.

## CV 편집 방향

- 이름, 현재 소속, 연락처와 연구 관심사를 짧게 표시한다.
- Education → Publications → Research & Engineering Experience → Selected Projects → Leadership & Service → Honors & Awards → Technical Skills 순서로 배치한다.
- 논문은 CoRL 2026과 Spotlight만 표시한다. accepted 및 camera-ready 진행 문구는 넣지 않는다.
- 소개는 robot learning, control, planning과 real-world robotics를 중심으로 manipulation과 locomotion 모두를 언급한다. 개별 연구의 구체적인 방법 설명은 유지한다.
- SNU 학사 졸업일과 최종 성적을 사용하고, 기존의 진행 중 학부생 표현을 교체한다.
- CV에는 사용자 요청에 따라 Aegis AI의 Technical Leader 경험(Jan 2023-Dec 2023, competition prize US$11,000)과 CoRL 2025 Student Volunteer(Sep 2025)를 Leadership & Service에 복원한다. Honors & Awards에는 Imgwang Scholarship과 이전 CV의 수상 4개를 복원한다. 군복무, 숙련도 별점과 긴 플랫폼 목록은 제외한다.
- 대학원 입학 초기인 현재에 맞춰, 장황한 포부보다 논문과 구체적인 연구 경험에 지면을 배분한다.

## 후속 자료

1. 필요 시 추가할 Rosota 영상·이미지. 연구 요약과 대표 영상은 전달받은 PPT의 26-36페이지를 기반으로 반영했다.
2. SWIVL, LIVerse, Auto Balancing Case 발표 포스터 원본과 대표 영상.
3. 논문 PDF의 최종 공개 링크 또는 공개 가능한 camera-ready 버전.
4. 공개로 유지할 GitHub repository의 최종 목록과 fork 처리 방침.

Rosota 자료 반영: RCM-aware laparoscopic imitation learning, surgeon demonstration sensing, digital twin feasibility checks, trocar 위치에 적응하는 diffusion policy를 중심으로 요약한다. 33페이지 왼쪽 위 영상(`slide33.xml`의 `media25.webm`)은 전체 길이, 오른쪽 아래 영상(`media26.mp4`)은 사용자 요청에 따라 0–32초 구간을 웹용 H.264 MP4로 저장했다. 원본 전체 영상은 제공된 PPT에 보존되어 있다. PPT의 연구 진행 중인 수치와 임상 성능을 소개 카드의 성과로 사용하지 않는다.

미디어 구성: Rosota 카드 2개 영상(digital twin, instrument sensing)은 데스크톱에서 가로로 나란히 배치하고, 작은 모바일 화면에서는 한 열로 표시한다. Sequor Robotics 카드 4개 영상(recovery 및 locomotion의 simulation/real 조합)은 데스크톱에서 2×2, 작은 모바일 화면에서는 한 열로 표시한다. Recovery simulation은 원본 2초부터의 별도 클립 `recovery_sim_from_2s.mp4`를 사용하며 원본은 유지한다. SNU 연구 카드는 SWIVL reference twist field와 CoRL 연구 overview를 함께 표시하고 원본 이미지로 연결한다. Featured Projects는 각각 2개 이미지로 구성한다: SWIVL architecture + manipulation snapshots, LIVerse world model + MPC, Auto Balancing Case Isaac Sim simulation + real hardware demo. Auto Balancing Case의 두 데모는 기존 프로젝트 페이지의 animated GIF를 사용한다.

Featured Projects 이미지 배치: 프로젝트 세 개에 동일한 4:5 비율의 공통 프레임을 사용한다. 이미지 사이에는 16px, 프레임 내부에는 8px 여백을 두고 연한 배경으로 서로 다른 이미지임을 구분한다. 두 행을 같은 크기로 배정하고 `object-fit: contain`으로 전체 이미지를 표시한다. 이미지 영역과 프로젝트 제목의 시작 위치가 동일하게 맞춰진다.

## Featured Projects 소개 검토

2026-10-07 사용자 요청에 따라 세 repository의 README, 핵심 구현과 기존 상세 페이지를 확인하고 홈 카드 및 내부 상세 페이지의 소개를 갱신했다. 기존 이미지와 내부 링크 구성은 유지한다.

| 프로젝트 | 확인한 근거 | 소개에 반영한 핵심 |
| --- | --- | --- |
| [SWIVL](https://github.com/erickun0125/SWIVL) | README, `se2_screw_decomposed_impedance.py`, 기존 프로젝트 페이지; commit `2649f045a98ff1ce0cd609c10fceaf8d027015ae` | Learned motion plans → reference twist field → wrench-adaptive RL impedance modulation. Internal motion은 joint articulation, bulk motion은 object transport로 구분한다. BiarT planar simulation 평가 맥락을 명시한다. |
| [LIVerse](https://github.com/erickun0125/LIVerse) | README, `world_model.py`, `planning/planner.py`, `planning/reward.py`, 기존 프로젝트 페이지; commit `8df48c1d7042cb2e9d8bfb873d231335f2a9a347` | RSSM dynamics와 LIV semantic embedding 예측, text/image goal 기반 CEM MPC, incremental similarity를 사용하는 delta-score reward와 sequential subtask planning. 별도 정책 학습 없이 목표를 바꾸는 설명은 MPC에 적용한다. |
| [Auto Balancing Case](https://github.com/erickun0125/Auto_Balancing_Case) | README와 contributor 표, hardware bridge, 기존 프로젝트 페이지; commit `bd0573bd612e996270df797f1ca3945a2cc4937b` | Mass-shifting upper body, Isaac Lab PPO 학습과 실제 하드웨어 제어. 본인 기여는 simulation environment, RL training, sim-to-real bridge로 명시한다. |

카드에는 방법과 기여를 약 35단어로 요약하고, 평가 환경과 구현 세부는 상세 페이지에 둔다. SWIVL의 simulation 결과를 real-robot 성과로 표현하거나 Auto Balancing Case의 wrist torque 감소를 정량적으로 입증된 결과로 표현하지 않는다.

소개 갱신 검증: Hugo minified build와 Pagefind 성공. 세 상세 페이지의 갱신 문구 및 로컬 이미지 경로를 확인했다. 데스크톱에서 세 미디어 프레임은 모두 296×370px이며, 390px 모바일에서 가로 넘침이 없다. 브라우저에서 네 경험 카드의 시작·종료 연도 표시도 확인했다.

## 디자인 검토와 개선

2026-10-07 브라우저 코멘트를 기준으로 정보 흐름, 글의 길이, 미디어 가독성, 정렬, 반응형 구성을 점검했다.

| 확인한 문제 | 반영한 개선 | 확인 기준 |
| --- | --- | --- |
| 프로젝트별 이미지 영역 높이와 제목 위치가 다름 | 공통 4:5 프레임과 16px 간격 | 세 프레임 크기 및 제목 시작점 일치 |
| 경험 카드의 미디어가 작고 글 아래 빈 공간이 큼 | 넓은 한 행에 설명과 미디어를 나누어 배치 | 미디어 폭, 불필요한 내부 여백 |
| Rosota 설명과 영상 배치가 과도하게 길어짐 | 한 문장 요약, 데스크톱에서 가로 영상 두 개 | 카드 높이, 전체 영상 및 컨트롤 표시 |
| SNU 카드에서 CoRL 연구가 빠져 있음 | SWIVL 이미지 교체 및 CoRL overview 추가 | 두 연구를 구분하는 캡션과 원본 링크 |
| 소개·경험 설명이 반복됨 | 현재 역할은 헤더에, 기여는 짧은 요약에 배치 | 주요 사실 및 연구 맥락 유지 |
| 메뉴와 본문 섹션 이름·순서가 다름 | About → Education → Publications → Experience → Projects → CV | 메뉴 anchor 및 CV 링크 |
| 바깥 레이아웃과 테마 블록의 좌우 여백이 겹침 | 테마 블록의 추가 padding 제거 | 모바일의 사용 가능한 너비 |
| 논문 영상 영역이 원본 비율과 다름 | 원본 16:9 비율 적용 | 영상 crop 없이 표시 |
| 모바일 메뉴를 키보드로 조작할 수 없음 | 메뉴 버튼 역할·상태 안내, Enter/Space 조작, Escape로 닫기 | 메뉴 열림·닫힘 및 초점 복원 |

미디어 배치는 `data/authors/me.yaml`의 `media_layout`으로 지정한다. `stack`은 세로 배치이며, 여러 미디어의 기본값은 두 열이다. 모바일에서는 읽기와 영상 재생에 필요한 폭을 먼저 확보한다. 영상은 `preload="none"`, 이미지는 lazy loading을 유지하고, 고정 비율의 프로젝트 프레임 및 연구 이미지 크기 속성으로 로딩 중의 배치 이동을 줄인다.

RAI Lab recovery 영상은 `media_size: compact`로 최대 폭을 400px로 줄여 미디어 열 안에 가운데 배치한다. 16:9 비율을 유지하고, 좁은 화면에서는 사용 가능한 폭에 맞춘다. Publications 제목 옆의 보조 문구는 표시하지 않는다.

검증 결과: Hugo minified build와 Pagefind 성공, 홈 및 프로젝트 목록의 내부 링크·미디어 파일 확인. 데스크톱에서 프로젝트 이미지 프레임 세 개의 크기와 제목 시작점이 일치한다. SNU의 SWIVL·CoRL 이미지 두 개가 정상 로드된다. 390px 모바일과 768px 태블릿에서 가로 넘침이 없고, 모바일 메뉴의 Enter 열기·Escape 닫기·초점 복원을 확인했다. 후속 코멘트에 따라 Rosota 영상은 다시 가로 두 열로 조정하고, instrument sensing은 32초로 종료한다. Sequor recovery simulation 클립은 원본의 앞 2초를 제외했다.

기관 링크: 사용자가 제공한 RAI Lab, SNU Robotics Lab, Rosota, Sequor Robotics의 공식 URL을 경험 카드 기관명에 연결한다. RAI Lab과 SNU Robotics Lab은 소개에도 연결하고, RAI Lab은 현재 학력에도 연결한다. 외부 링크는 새 탭에서 연다.

최신 소개·논문 표기 검증: 페이지 소개, author bio·관심사, SEO metadata와 CV 소개를 robot learning, control, planning 및 real-world manipulation·locomotion으로 일치시켰다. 페이지와 CV의 CoRL 논문에서 accepted와 camera-ready 진행 문구를 제거했다. 재생 검토에서 Rosota instrument sensing 길이 32초, Sequor recovery simulation의 2초 이후 클립 길이 15.133초를 확인했다. 390px 모바일 소개에 가로 넘침이 없고, 갱신한 CV는 1페이지로 렌더링한 뒤 두 다운로드 URL에 동일하게 동기화했다.

후속 기간 갱신: Rosota Mar 2025-May 2026, SNU Robotics Lab 인턴 Jul 2025-Jul 2026을 페이지와 열려 있는 CV 소스에 반영했다. 앱 내 compiler의 실행 경로 오류로 이번 CV 기간 수정의 PDF 검증·다운로드 파일 동기화는 아직 완료되지 않았다. 현재 문서 편집 흐름을 유지하라는 요청에 따라 별도의 PDF를 생성하지 않는다.

기간 표기는 같은 연도라도 시작·종료 연도를 모두 표시한다(예: Jun 2024 - Aug 2024). 홈, 기존 프로젝트 상세 페이지와 현재 CV에 같은 원칙을 적용한다.

CV 복원 후 소스 검증: Leadership & Service의 Aegis AI(US$11,000 competition prize)·CoRL 2025 Student Volunteer와 Honors & Awards를 복원했다. 10pt 글자 크기를 유지하며 문단·섹션 여백과 기존 중복 설명을 줄였다. `pdflatex -draftmode`로 소스 오류·overfull box 없이 1페이지 구성을 확인했다. 이 검사는 PDF를 생성하거나 갱신하지 않으며, 앱 내 compiler 오류가 해결되기 전까지 현재 PDF preview와 다운로드 파일에는 복원 항목이 반영되지 않는다.

## GitHub와 배포

2026-10-07 사용자 지침: 현재 페이지에 소개된 작업은 public이어도 괜찮고, 상세 공개 방침은 추후 제공한다. 이번 초안에서는 visibility를 변경하지 않는다.

계정 inventory: repository 63개 중 public 33개, private 30개. Public repository 중 직접 만든 repository는 9개, fork는 24개다. 이 수치는 이번 점검 시점의 snapshot이다.

| 공개 repository | 후속 정리 시 다룰 범위 |
| --- | --- |
| `erickun0125.github.io` | 개인 페이지의 source와 배포 |
| `constraint-decomposed-impedance` | 논문 프로젝트 페이지와 배포 |
| `constraint-decomposed-impedance-control` | 논문 코드 공개 방침과 프로젝트 페이지의 Code 링크 |
| `SWIVL`, `LIVerse`, `Auto_Balancing_Case` | Featured Projects의 README·description과 공개 방침 |
| `isaac-rl-quad-humanoid` | Sequor Robotics 작업 소개와 코드 공개 방침 |
| `isaac-unitree-lab`, `raibo_recovery` | 공개 유지 여부와 다른 작업과의 관계 |
| Public fork 24개 | 수정·기여가 있는 fork와 단순 보관용 fork를 구분하여 정리 |

개인 페이지와 논문 프로젝트 페이지는 각각 별도의 GitHub Pages repository에서 서비스된다. visibility를 바꾸기 전 현재 Pages 설정과 배포 조건을 점검한다. 논문 코드와 논문 프로젝트 페이지도 구분한다. 비공개 전환 후보는 최종 유지 목록을 기준으로 정하고, Featured Projects의 내부 페이지를 통해 코드 공개 여부와 관계없이 연구 소개를 유지한다.

검증 범위: production build, 내부 링크·미디어 파일, 경험 및 프로젝트 표시 순서, desktop·mobile layout, CV 페이지 수·텍스트·PDF 렌더링. 원본 논문과 증명서는 직접 공개하지 않는다.

초기 초안 검증 기록: Hugo minified build 및 Pagefind 성공; 콘텐츠 7페이지의 로컬 링크·미디어·anchor 확인; 경험 카드 4개와 내부 프로젝트 카드 3개 확인; 390px viewport에서 가로 넘침 없음; 당시 LaTeX PDF 1페이지 생성 및 렌더링 확인. 이후 사용자가 열려 있는 LaTeX editor에서 계속 편집하도록 지정한 뒤에는 별도 PDF를 생성하지 않으며, 최신 CV 검증·동기화 상태는 위의 후속 기록을 따른다.

## 2026-10-08 Featured Projects 갱신

- SWIVL, LIVerse, Auto Balancing Case에 K-Startup Challenge: Detection of Generative Images를 추가했다. Aegis AI의 Technical Leader 역할, 이미지 특성에 따른 전처리와 neural detector 구성, US$11,000 competition prize를 사용자 자료와 현재 CV에 맞춰 소개한다.
- 홈과 `/projects/`는 같은 가로 캐러셀을 사용한다. 6초 간격 자동 이동, 이전/다음 버튼, Pause/Play, 가로 스크롤, 키보드 방향키를 지원한다. 마우스 hover, 카드 영역의 키보드 focus, 숨겨진 탭에서는 자동 이동을 멈춘다. Reduced motion 설정에서는 수동 이동을 기본으로 한다.
- 제공된 `K-startup-presentation.mp4` 전체 90초를 1280×720, 30fps H.264/AAC로 저장했다. 약 32.2 MB 원본은 그대로 두고, 약 8.8 MB 웹용 파일과 실제 영상 프레임 poster를 `static/media/aegis-ai/`에서 제공한다. 이 영상도 음소거 자동 재생과 반복 재생을 사용한다.
- 사용자 요청에 따라 카드의 제목·미디어·본문에 상세 페이지 링크를 넣지 않는다. 기존 세 상세 페이지의 Markdown은 `draft: true`로 보관하고 공개 빌드에서 제외한다. 카드 및 SNU 경험에서 사용하는 이미지 7개는 `static/projects/`에서 기존 주소로 제공한다.
- Production build에서 세 상세 페이지 HTML이 생성되지 않는 것을 확인했다. 미리보기는 `hugo server --disableFastRender --renderToMemory --bind 127.0.0.1 --port 1313`으로 실행해 이전 `public/` 파일이 다시 노출되지 않게 한다. 세 상세 경로는 404이며, 갤러리·이미지·새 영상은 200이다.

## 2026-10-08 Sequor 영상 및 오디오 갱신

- 경험 카드의 Sequor 영상 네 개는 `static/media/sequor/`의 960×540 H.264 파일과 해당 프레임 poster를 사용한다. 원본은 `content/projects/sim2real-pipeline/`에 보관한다. 로봇의 이동 범위를 검토해 화면을 crop하고, 16:9 칸의 좌우 여백을 제거했다. 네 파일의 합계 용량은 약 40.6 MB에서 7.4 MB로 줄었다.
- Recovery simulation은 기존 앞 2초 제외 클립의 454프레임에서 마지막 90프레임을 제거해 364프레임(12.133초)으로, locomotion simulation은 1673프레임에서 마지막 90프레임을 제거해 1583프레임(52.767초)으로 저장했다. 둘 다 30fps이며 후반 3초만 추가로 제거했다.
- K-Startup 영상만 오디오 트랙을 유지한다. 기본 상태는 `muted` 및 `defaultMuted = true`이며 사용자가 원하면 소리를 켤 수 있다. 그 외 모든 사이트 영상 파일에는 오디오 트랙이 없어야 한다. 이번에 audio가 있던 Rosota instrument sensing 파일은 영상 재인코딩 없이 오디오 트랙을 제거했다. 원본은 사이트 밖의 `/home/eric/eric_asset/Eric CV & Page/media-originals/2026-10-08-audio/`에 보관한다.
- FFprobe로 사이트 소스 영상 18개 중 K-Startup 외 17개의 audio track 수가 0인 것을 확인했다. Hugo minified build 성공, 실제 제공되는 Rosota 무음 파일의 SHA-256 일치, 페이지를 새로 열었을 때 아홉 영상의 자동 재생 및 기본 음소거를 확인했다.

## 2026-10-08 Rosota 영상 crop 및 크기 조정

- Digital twin은 사용자 수정 요청에 따라 시뮬레이션·실제 기구 카메라·검증 그래프를 모두 유지한다. 바깥쪽 OS 메뉴와 여백만 제거(`crop=1232:692:48:24`)하고 960×540으로 저장했다. Instrument sensing은 모니터와 실제 조작 기구가 함께 보이는 범위(`crop=1120:630:72:90`)를 사용하고 704×396으로 저장했다.
- 원본 파일은 그대로 보관하고 `static/media/rosota/laparoscopic-digital-twin-overview.mp4`와 `laparoscopic-instrument-sensing-focused.mp4` 및 해당 poster를 경험 카드에서 사용한다. 둘 다 30fps H.264, 오디오 트랙 없음, faststart 형식이다. 전체 재생 길이 약 82.6초와 32초를 유지한다.
- Rosota도 `media_size: dense`를 적용해 미디어 영역 최대 폭을 420px로 줄였다. 데스크톱 두 영상은 각각 약 206×116px로 표시된다. 좁은 화면에서는 기존 반응형 배치를 따른다.
- 합계 용량은 8,904,156 bytes에서 4,420,843 bytes로 약 50% 줄었다. 장면별 프레임 검토, FFprobe 길이·오디오 검사, Hugo minified build, 브라우저에서 두 영상의 새 파일 로드·자동 재생·기본 음소거를 확인했다.
