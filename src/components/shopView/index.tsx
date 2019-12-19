import React from 'react'
import ShopItem from '../shopItem'
import { shopData } from './shopData'
import './styles.scss'

const ShopView = ({ title, items }: any) => (
  <div className='shop-view'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        // @ts-ignore FIXME:
        .filter((item, idx) => idx < 4)
        .map((item: any) => (
          <ShopItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

type Props = {
  props?: any
}

type State = {
  collections: Array<Object>
}

class Shopping extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      collections: shopData
    }
  }

  render() {
    const { collections } = this.state

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }: any) => (
          <ShopView key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default Shopping
