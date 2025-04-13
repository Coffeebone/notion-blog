import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="RHc.svg"
          height="85"
          width="250"
          alt="Coffeebone Logo"
        />
        <img
          src="Coffeebone.svg"
          height="85"
          width="250"
          alt="Coffeebone"
        />
        <h2>
          커피본의 블로그
        </h2>

        <div className="explanation">
          <p> 
          👋 안녕하세요! 저는 열정적인 작가이자 독자인 '커피본'입니다.<br />
          호기심 많은 저는 코딩, 통계, 투자 등을 독학하고 있으며, 문학, 과학, 철학 등 다양한 주제를 탐구하는 것을 좋아합니다.<br />
          생물학분야 전공으로 대학을 졸업한 후 국립연구기관에서 1년간 연구원으로 일했으며, 현재 벤처 창업을 준비 중입니다.<br />
          이 블로그에서는 제가 관심 있는 분야와 배운 점들, 그리고 다양한 시각을 함께 나누고자 합니다.<br />
          취미로 개잘중인 블로그 입니다! <br /> 
          이것저것을 아티클로 써보려고 합니다! 재미있게 읽어주세요! 😊
          </p>
        </div>
      </div>
    </>
  )
}
