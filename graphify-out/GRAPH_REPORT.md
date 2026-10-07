# Graph Report - insta-saved-dashboard  (2026-10-07)

## Corpus Check
- 11 files · ~7,956 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 85 nodes · 80 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8c2b53f4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- 유저 반응과 구성안 비교 시뮬레이션 (2026-10-07)
- Savvy: 저장됨 취향 지도
- build-personal.js
- 인스타 저장됨 대시보드 상품화 시뮬레이션 피드백
- 인스타 저장됨 대시보드 상품화 시뮬레이션 피드백
- 대시보드 구성안 4개 (2026-10-07)
- crawl.js
- tools/crawl.js
- 쓰는 법

## God Nodes (most connected - your core abstractions)
1. `Savvy: 저장됨 취향 지도` - 12 edges
2. `인스타 저장됨 대시보드 상품화 시뮬레이션 피드백` - 9 edges
3. `인스타 저장됨 대시보드 상품화 시뮬레이션 피드백` - 9 edges
4. `대시보드 구성안 4개 (2026-10-07)` - 7 edges
5. `유저 반응과 구성안 비교 시뮬레이션 (2026-10-07)` - 7 edges
6. `3라운드: 구성안 비교` - 5 edges
7. `쓰는 법` - 4 edges
8. `items` - 3 edges
9. `ent()` - 2 edges
10. `parse()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "유저 반응과 구성안 비교 시뮬레이션 (2026-10-07)"
Cohesion: 0.15
Nodes (12): 1라운드: 궁금해하는가, 쓰는가, 2라운드: 쟁점 토론, 3라운드: 구성안 비교, 각자 고치고 싶다고 한 것, 결론과 제안, "끝까지 쓸 가능성" 점수 (0~10), 다음에 검증할 것, 순위 (+4 more)

### Community 1 - "Savvy: 저장됨 취향 지도"
Cohesion: 0.17
Nodes (11): Savvy: 저장됨 취향 지도, 개인정보, 내 데이터를 미리 담은 개인용 페이지, 다음에 할 일, 라이선스, 선택 도구, 알려진 한계, 올려서 쓰기 (+3 more)

### Community 2 - "build-personal.js"
Cohesion: 0.20
Nodes (10): cache, clip(), data, fs, get(), html, items, json (+2 more)

### Community 3 - "인스타 저장됨 대시보드 상품화 시뮬레이션 피드백"
Cohesion: 0.20
Nodes (9): 1. 결론 표, 2. 인물별 점수, 3. 전원 또는 다수가 동의한 것, 4. 쟁점별 결론과 소수 의견, 5. 실행안 (제안), 6. 인물들이 확인하고 싶다고 한 것, 7. 한계, 8. 현재 상태와의 대응표 (+1 more)

### Community 4 - "인스타 저장됨 대시보드 상품화 시뮬레이션 피드백"
Cohesion: 0.20
Nodes (9): 1. 결론 표, 2. 인물별 점수, 3. 전원 또는 다수가 동의한 것, 4. 쟁점별 결론과 소수 의견, 5. 실행안 (제안), 6. 인물들이 확인하고 싶다고 한 것, 7. 한계, 8. 현재 상태와의 대응표 (+1 more)

### Community 5 - "대시보드 구성안 4개 (2026-10-07)"
Cohesion: 0.25
Nodes (7): 3라운드 결과, A안. 취향 통계형 (현재 구조), B안. 찾기 우선형, C안. 폴더 탐색형, D안. 유형 카드형 (공유 중심), 공통 바탕 (네 안 모두 동일), 대시보드 구성안 4개 (2026-10-07)

### Community 6 - "crawl.js"
Cohesion: 0.33
Nodes (3): ent(), fs, parse()

### Community 7 - "tools/crawl.js"
Cohesion: 0.40
Nodes (3): ent(), fs, parse()

### Community 8 - "쓰는 법"
Cohesion: 0.50
Nodes (4): 1. 인스타에서 내 데이터 받기, 2. 페이지에서 열기, 3. 분류 규칙 바꾸기, 쓰는 법

## Knowledge Gaps
- **53 isolated node(s):** `fs`, `fs`, `path`, `[src, cachePath = "-", out = "my-saved-map.html"]`, `data` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 66 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Savvy: 저장됨 취향 지도` connect `Savvy: 저장됨 취향 지도` to `쓰는 법`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `쓰는 법` connect `쓰는 법` to `Savvy: 저장됨 취향 지도`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `fs`, `fs`, `path` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._