// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Products = () => {
  const authentication = Cookies.get('jwt_tokenValue')
  if (authentication === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="Products-App">
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </div>
  )
}
export default Products
