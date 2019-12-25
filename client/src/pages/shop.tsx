import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Spinner from '../components/common/spinner'
import { fetchCollectionsStart } from '../redux/shop/shopActions'

const CollectionsOverviewContainer = lazy(() =>
  // @ts-ignore FIXME:
  import('../components/common/container/collectionsContainer')
)
const CollectionPageContainer = lazy(() =>
  // @ts-ignore FIXME:
  import('../components/common/container/collectionContainer')
)

const ShopPage = ({ fetchCollectionsStart, match }: any) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
