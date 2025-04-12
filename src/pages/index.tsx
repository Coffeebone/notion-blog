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
          <pre> 
            취미로 개잘중인 블로그 입니다!
            이것저것을 아티클로 써보려고 합니다!
          </pre>
        </div>
      </div>
    </>
  )
}
