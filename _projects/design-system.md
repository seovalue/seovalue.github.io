---
title: "디자인 시스템 구축 및 컴포넌트 라이브러리 개발"
company: "스타트업 A"
duration: "2020.06 ~ 2021.03"
summary: "일관된 UI/UX 제공을 위한 디자인 시스템 및 React 컴포넌트 라이브러리"
tech_stack:
  - React
  - TypeScript
  - Styled-components
  - Storybook
  - Rollup
order: 1
---

### 기술 선택 이유 및 활용
`TypeScript`로 컴포넌트의 props 타입을 엄격하게 정의하여 개발자 경험을 개선했습니다. `Styled-components`의 테마 기능으로 다크모드를 지원하고, `Storybook`으로 컴포넌트를 문서화하여 디자이너와의 협업을 강화했습니다.

참고 문서: [Storybook 가이드](https://storybook.js.org/docs)

### 구현 내용
`Atomic Design` 방법론을 적용하여 Atoms, Molecules, Organisms 단위로 컴포넌트를 구성했습니다. 모든 컴포넌트는 `Compound Component` 패턴을 활용하여 유연성을 높였고, `Rollup`으로 트리쉐이킹이 가능한 ESM 번들을 생성했습니다.

### 어려움 및 해결
다양한 프로젝트에서 사용할 수 있도록 유연하면서도 일관성 있는 API를 설계하는 것이 어려웠습니다. Render Props, HOC, Hooks 등 다양한 패턴을 시도한 끝에 Compound Component가 가장 적합하다고 판단했습니다. 또한 번들 사이즈 최적화를 위해 사이드 이펙트 제거에 많은 노력을 기울였습니다.

### 성과
전사 7개 프로젝트에 적용, 개발 속도 35% 향상, UI 버그 60% 감소, 디자인 QA 시간 50% 단축
