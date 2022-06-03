var maxCount = 2; // 카운트 최대값은 2
var count = 0; // 카운트, 0으로 초기화 설정

function CountChecked(field) {
  // field객체를 인자로 하는 CountChecked 함수 정의
  if (field.checked) {
    // 만약 field의 속성이 checked 라면(사용자가 클릭해서 체크상태가 된다면)
    count += 1; // count 1 증가
  } else {
    // 아니라면 (field의 속성이 checked가 아니라면)
    count -= 1; // count 1 감소
  }

  if (count > maxCount) {
    // 만약 count 값이 maxCount 값보다 큰 경우라면
    alert("최대 2개까지만 선택가능합니다!"); // alert 창을 띄움
    field.checked = false; // (마지막 onclick한)field 객체의 checked를 false(checked가 아닌 상태)로 만든다.
    count -= 1; // 이때 올라갔던 카운트를 취소처리해야 하므로 count를 1 감소시킨다.
  }
}
