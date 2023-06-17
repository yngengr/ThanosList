# 타노스 리스트

이 투두리스트는 filter, map, reduce를 실습하기 위한 투두리스트로, 전혀 실용적인 기능따위 없습니다.

기능은 다음과 같습니다.

### 현재 구현된 기능

- [x] 투두리스트 메모리 저장 
- [ ] 투두리스트 localStorage 저장
- [ ] 타노스 랜덤 날리기

## 1. 랜덤 삭제하기
투두리스트 중에 랜덤으로 절반을 삭제하되, 다음 형태로 삭제 됩니다.

- 전체 투두리스트의 끝 절반이 날아감
- 짝수번째 투두가 날아감
- 홀수번째 투두가 날아감
- 해당 투두리스트의 문자열 길이가 5개보다 짧은 것들이 날아감
    - (단, 전체 배열의 길이의 절반만큼의 요소 갯수를 지웠을 경우 다음 5보다 짧은 문자열은 삭제되지 않습니다.)

## 2. 저장하기
저장은 2가지 방식으로 합니다.

첫번째는 메모리에 합니다. 그냥 변수에 때려 넣는겁니다. 가장 기본적인 저장입니다.

두번째는 localStorage에 저장합니다. 영구적으로 저장하되, 사용자가 직접 삭제할 수 있습니다.

세번째는 쿠키에 저장합니다. 타노스는 달달한 쿠키를 싫어해서 1시간마다 이를 닦습니다. 그래서 쿠키에 저장한 것은 한 시간 이후에 모두 삭제됩니다.


## 3. 이 프로젝트의 목표
뭐겠어요. 배열 메서드와 브라우저 저장방식을 공부하는 거지.