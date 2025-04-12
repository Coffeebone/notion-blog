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
          alt="Logo"
        />
        <img
          src="Coffeebone.svg"
          height="85"
          width="250"
          alt="name"
        />
        <h1>Coffeebone</h1>
        <h2>
          커피본의 블로그
        </h2>

        <Features />

        <div className="explanation">
          <p>
            아직 개잘중인 블로그 입니다!
            만드는 과정을 아티클로 써보려고 합니다!
          </p>
        </div>
      </div>
    </>
  )
}
