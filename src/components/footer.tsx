// import ExtLink from './ext-link' // ExtLink는 더 이상 사용되지 않으므로 주석 처리하거나 삭제합니다.

export default function Footer() {
  return (
    <>
      <footer>
        <span>후원해주세요!</span>
        <iframe
          src="https://indify.co/widgets/live/button/GSUUhCgQrbSjtyf0ObVa" // 제공된 Indify 위젯 URL
          style={{
            border: '0', // iframe 테두리 제거
            width: '210px', // 위젯의 기본 너비 (필요시 조절)
            height: '50px', // 위젯의 기본 높이 (필요시 조절)
            display: 'block', // 가운데 정렬 등을 위해 block 요소로 만듬 (선택사항)
            margin: '0 auto'   // 위젯을 가운데 정렬 (선택사항, 원치 않으면 제거)
          }}
          title="Indify Widget Button" // 접근성을 위한 제목
        ></iframe>
      </footer>
    </>
  )
}
