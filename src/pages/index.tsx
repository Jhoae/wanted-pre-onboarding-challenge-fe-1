import AuthHoc from '../utils/HOC/AuthHoc'

function Home() {
  return <div>auth</div>
}

export default function Auth() {
  const AuthHomepage = AuthHoc(Home)

  return (
    <>
      <AuthHomepage />
    </>
  )
}
