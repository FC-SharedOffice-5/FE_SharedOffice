# 🏢 Shared Office

## 📌 개요

### 거점 공유 오피스

'자유로운 근무 형태'가 증가하면서, 새로운 업무 트렌드에 발맞추어, 모바일 앱을 통해 공간 예약, 일정, 커뮤니티 등의 서비스를 통합 제공함으로써 유연한 근무 형태를 지향하는 직장인들의 업무 효율성을 높이고 자유로운 근무 환경을 지원하는 것이 목표입니다.

- 배포 사이트:
  https://www.officemile.site/

## 🤍 팀원

|                    FE                    |                      FE                      |                   FE                   |
| :--------------------------------------: | :------------------------------------------: | :------------------------------------: |
|                  강노아                  |                    김소은                    |                 한은지                 |
| [@Knoa0405](https://github.com/Knoa0405) | [@silver0108](https://github.com/silver0108) | [@ovoxiix](https://github.com/ovoxiix) |

## 💡 컨벤션

### 커밋 규칙

- 타입

```
- feat
- fix
- style
- docs
- chore
- refactor
- test
```

- 작성 규칙

```
type(#issue num): subject
body ( option )
```

### 브랜치 전략

```
main - develop - feat/(#issue num)
```

### 이슈 및 PR 생성

- 이슈

```
### Feat

- 작업 내용


### Bug

- 어디서 발생되는지
- 어떻게 해결했는지 간단히 한두줄 요약
```

- PR

```
## PR

close #이슈번호

- 작업 내용
- 유의할 점 및 ETC (Optional)
- 스크린샷 (Optional)
```

### 폴더 구조

```
└─ src
    └─ actions -> 서버 액션
    └─ apis -> api 관련
    └─ app
      └─ (page) -> 경로 그룹
            └─ _components
            └─ page
                └─ page.tsx
            └─ layout.tsx

    └─ assets -> 아이콘
    └─ components -> 공통 컴포넌트
    └─ hooks -> 전반적으로 사용되는 훅
    └─ mocks -> MSW
    └─ stores -> 전역 상태 관리
    └─ types -> 타입 관리
    └─ utils -> 전반적으로 사용되는 기능과 관련된 코드

```

## 🛠️ 기술 스택

<div style="display:flex; gap:2px">
  <img src="https://img.shields.io/badge/Next-000?style=flat&logo=nextdotjs" alt="nextjs" /><br/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="typescript" /><br/>
  <img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="tailwindcss" /><br/>
  <img src="https://img.shields.io/badge/Vercel-000?style=flat&logo=Vercel&logoColor=white" alt="vercel" /><br/>
  <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat&logo=ReactQuery&logoColor=white" alt="react-query" /><br/>
  <img src="https://img.shields.io/badge/zustand-FF9E0F?style=flat&logo=zustand&logoColor=white" alt="zustand" />
</div>
