# Graph Report - insta-saved-dashboard  (2026-10-07)

## Corpus Check
- 8 files · ~11,456 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 92 nodes · 88 edges · 8 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `18df561b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- 유저 반응과 구성안 비교 시뮬레이션 (2026-10-07)
- Savvy: 저장됨 취향 지도
- build-personal.js
- 인스타 저장됨 대시보드 상품화 시뮬레이션 피드백
- build-rules.js
- 대시보드 구성안 4개 (2026-10-07)
- 배포 방식과 시장 반응 확인 시뮬레이션 (2026-10-07)
- 성공·중단 기준 (공개 전에 정함)

## God Nodes (most connected - your core abstractions)
1. `Savvy: 저장됨 취향 지도` - 12 edges
2. `인스타 저장됨 대시보드 상품화 시뮬레이션 피드백` - 9 edges
3. `배포 방식과 시장 반응 확인 시뮬레이션 (2026-10-07)` - 8 edges
4. `성공·중단 기준 (공개 전에 정함)` - 8 edges
5. `대시보드 구성안 4개 (2026-10-07)` - 7 edges
6. `유저 반응과 구성안 비교 시뮬레이션 (2026-10-07)` - 7 edges
7. `3라운드: 구성안 비교` - 5 edges
8. `쓰는 법` - 4 edges
9. `items` - 3 edges
10. `get()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (8 total, 0 thin omitted)

### Community 0 - "유저 반응과 구성안 비교 시뮬레이션 (2026-10-07)"
Cohesion: 0.15
Nodes (12): 1라운드: 궁금해하는가, 쓰는가, 2라운드: 쟁점 토론, 3라운드: 구성안 비교, 각자 고치고 싶다고 한 것, 결론과 제안, "끝까지 쓸 가능성" 점수 (0~10), 다음에 검증할 것, 순위 (+4 more)

### Community 1 - "Savvy: 저장됨 취향 지도"
Cohesion: 0.12
Nodes (15): 1. 인스타에서 내 데이터 받기, 2. 페이지에서 열기, 3. 분류 규칙 바꾸기, Savvy: 저장됨 취향 지도, 개인정보, 내 데이터를 미리 담은 개인용 페이지, 다음에 할 일, 라이선스 (+7 more)

### Community 2 - "build-personal.js"
Cohesion: 0.16
Nodes (11): cache, clip(), data, fs, get(), html, imgs, items (+3 more)

### Community 3 - "인스타 저장됨 대시보드 상품화 시뮬레이션 피드백"
Cohesion: 0.20
Nodes (9): 1. 결론 표, 2. 인물별 점수, 3. 전원 또는 다수가 동의한 것, 4. 쟁점별 결론과 소수 의견, 5. 실행안 (제안), 6. 인물들이 확인하고 싶다고 한 것, 7. 한계, 8. 현재 상태와의 대응표 (+1 more)

### Community 4 - "build-rules.js"
Cohesion: 0.15
Nodes (11): base, FIRST, fs, h, m, p, path, root (+3 more)

### Community 5 - "대시보드 구성안 4개 (2026-10-07)"
Cohesion: 0.25
Nodes (7): 3라운드 결과, A안. 취향 통계형 (현재 구조), B안. 찾기 우선형, C안. 폴더 탐색형, D안. 유형 카드형 (공유 중심), 공통 바탕 (네 안 모두 동일), 대시보드 구성안 4개 (2026-10-07)

### Community 6 - "배포 방식과 시장 반응 확인 시뮬레이션 (2026-10-07)"
Cohesion: 0.22
Nodes (8): 결론 표, 공개 전 체크리스트 (인물들의 요구를 모은 것), 다수가 동의한 것, 릴스 소재 후보 (그로스 인물), 배포 방식과 시장 반응 확인 시뮬레이션 (2026-10-07), 사용자 인물이 말한 깔때기, 첫 2주 (1인 개발자 인물의 4단계), 한계

### Community 7 - "성공·중단 기준 (공개 전에 정함)"
Cohesion: 0.22
Nodes (8): 1단계: 공개 전 관문, 2단계: 노출 확인, 3단계: 14일째 판정, 보정 기록, 성공·중단 기준 (공개 전에 정함), 용어(분모를 고정한다), 이 숫자들이 말해 주는 것, 정하지 않은 것

## Knowledge Gaps
- **69 isolated node(s):** `fs`, `path`, `[src, cachePath = "-", out = "my-saved-map.html", imgPath = "-"]`, `data`, `cache` (+64 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 76 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `fs`, `path`, `[src, cachePath = "-", out = "my-saved-map.html", imgPath = "-"]` to the rest of the system?**
  _69 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Savvy: 저장됨 취향 지도` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._