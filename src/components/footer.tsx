import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>후원해주세요!</span>
        <ExtLink href="https://buymeacoffee.com/coffeebone">
          <img
            src="https://indify.co/widgets/live/button/oVIt19ceMDvSoFh07H1w"
            height={46}
            width={132}
            alt="buy me a coffee!"
          />
        </ExtLink>
        <span>
          or{' '}
          <ExtLink href="https://buymeacoffee.com/coffeebone">
            view source
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
