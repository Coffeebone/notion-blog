import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>후원해주세요!</span>
        <ExtLink href="https://buymeacoffee.com/coffeebone">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
        <span>
          or{' '}
          <ExtLink href="https://github.com/ijjk/notion-blog">
            view source
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
