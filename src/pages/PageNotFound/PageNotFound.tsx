import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div className="not_found">
        <h1>PAGE NOT FOUND</h1>
        <Link to="/">Home page</Link>
        <img src="https://www.happy-beez.net/wp-content/uploads/2018/09/erreur404.png" alt="not found" />
      </div>
    </>
  )
}
export { PageNotFound }
