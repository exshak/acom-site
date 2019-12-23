import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionPageContainer from '../components/common/container/collectionContainer'
import CollectionsOverviewContainer from '../components/common/container/collectionsContainer'
import { fetchCollectionsStart } from '../redux/shop/shopActions'

const ShopPage = ({ fetchCollectionsStart, match }: any) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

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

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
