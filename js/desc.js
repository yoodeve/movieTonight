/*
설명파일 - 깃플로우전략, 커밋메세지 형태, 코드컨벤션 적어놓은 주석파일
*/

/*
git flow 전략

* master
마스터 브랜치(최상위 브랜치)
모든 기능개발이 완료된 코드 관리
배포 가능한 상태의 코드 저장
운영서버와 연결
* develop
최종개발 통합 브랜치
모든 버그의 수정과 기능이 최종적으로 완료된 시점에 master브랜치로 배포
최종기능 배포에서 최종 테스트가 이루어지는 브랜치
(test브랜치는 어디서 merge?)
* template
package.json, *config.json 등의 설정파일 관리 브랜치
설정파일의 변동이 필요한 경우, template브랜치에서 변경하며 협업자들에게 변경사항 공유
ex) ESLint, Prettier, webpack설정, package설정 등
master, develop 브랜치와는 독립적으로 운영
테스트 이외 목적으로 사용 불가
* feature
기능 개발 메인 브랜치
Jira의 작업 수행 이슈카드의 이슈코드에 따라 생성
개발담당자의 판단에 따라 하위브랜치 생성
develop 브랜치에 merge시, 브랜치 삭제
*/

/*
커밋 메시지 형태

Feat (src) : {메시지}
{본문}

- 타입 종류
Feat: 새로운 기능에 대한 커밋
Fix: 버그 수정에 대한 커밋
Build: 빌드 관련 파일 수정에 대한 커밋
Chore: 그 외 자잘한 수정에 대한 커밋
Docs: 도큐먼트 수정에 대한 커밋
Style: 코드 문법 또는 포멧 수정에 대한 커밋
Refactor: 코드 리팩토링에 대한 커밋
Test: 테스트 코드 수정에 대한 커밋
Template: 라이브러리, dependency 수정에 대한 커밋(커밋-푸시 후 협업자 전체 pull 필요)
 */

/*
코드컨벤션(물음표는 논의 필요)

명명: camelCase
함수명: 동사로 시작, (이벤트에 부착되는 경우 이벤트 명 포함(?))
상수명: SNAKE_CASE
컴포넌트명: PascalCase
컴포넌트가 아닌 ts파일(style.js 등): 파일명 camelCase
recoil atom: "RC_" 등으로 시작 혹은 종료 (?) (ex. RC_shopList 등)
*/

/*
코드포맷팅: prettier 사용
vscode 툴 왼쪽 사각형 네개 아이콘 클릭->"Prettier" 검색해서 설치
ctrl+shift+p => reload검색 => 창 reload 선택
우측하단 Prettier클릭 => .prettierrc파일과 같은 내용이 터미널에 출력되는 지 체크

저장할때마다 prettier가 돌았으면 좋겠다면?
설정 => Format on Save 검색 => 원하는 옵션 체크
설정 => Default Formatter 값이 esbenp.prettier-vscode
*/

/*
javaScript올린 html 작업하기 (서버 띄우기)
좌측 네모 네개 => Live Server 검색, 설치
우측하단 Go Live => 새로고침 시 변경사항 저장됨
*/
