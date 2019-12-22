import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionPageContainer from '../components/common/container/collectionContainer'
import CollectionsOverviewContainer from '../components/common/container/collectionsContainer'
import { fetchCollectionsStartAsync } from '../redux/shop/shopActions'

type Props = {
  match: any
  updateCollections: any
  fetchCollectionsStartAsync: any
}

type State = {}

class ShopPage extends React.Component<Props, State> {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props

    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          // @ts-ignore FIXME:
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // @ts-ignore FIXME:
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)
