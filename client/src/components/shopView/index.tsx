import React from 'react'
import { withRouter } from 'react-router-dom'
import ShopItem from '../shopItem'
import './styles.scss'

const ShopView = ({ title, items, history, match, routeName }: any) => (
  <div className='shop-view'>
    <h1
      className='title'
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((item: any, idx: any) => idx < 4)
        .map((item: any) => (
          <ShopItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default withRouter(ShopView)
