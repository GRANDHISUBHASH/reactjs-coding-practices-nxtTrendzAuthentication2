// Write your JS code here
// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Cart = () => {
  const authentication = Cookies.get('jwt_tokenValue')
  if (authentication === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="Products-App">
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </div>
  )
}
export default Cart
