---
title: "웹 성능 최적화 프로젝트"
company: "테크 스타트업 A"
duration: "2022.03 ~ 2022.08"
summary: "레거시 웹 애플리케이션의 성능을 대폭 개선한 최적화 프로젝트"
tech_stack:
  - React
  - Webpack
  - Lighthouse
  - Web Vitals
  - Service Worker
order: 3
---

### 기술 선택 이유 및 활용
`Lighthouse`와 `Web Vitals`를 활용하여 성능 지표를 정량적으로 측정하고, `Webpack Bundle Analyzer`로 번들 크기를 분석했습니다. `Service Worker`를 도입하여 캐싱 전략을 구현했습니다.

### 구현 내용
코드 스플리팅, 이미지 최적화, 트리 쉐이킹, 메모이제이션 등 다양한 최적화 기법을 적용했습니다. Critical CSS 추출과 폰트 최적화를 통해 초기 렌더링 성능을 개선했습니다.

### 어려움 및 해결
레거시 코드와의 호환성을 유지하면서 최적화를 진행하는 것이 어려웠습니다. 점진적 마이그레이션 전략을 수립하여 단계적으로 최적화를 적용했습니다.

### 성과
페이지 로딩 속도 60% 개선, Lighthouse 성능 점수 45점 → 92점, 사용자 이탈률 30% 감소
