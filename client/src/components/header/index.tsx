import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as LogoName } from '../../assets/icons/logo-full.svg'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { signOutStart } from '../../redux/user/userActions'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import CartDropdown from '../cartDropdown'
import CartIcon from '../cartIcon'
import './styles.scss'

const Header = ({ currentUser, hidden, signOutStart }: any) => (
  <div className='header'>
    <Link aria-label='Visit Apex Apparel' className='logo-container' to='/'>
      <LogoName className='logo-name' />
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch: any) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
