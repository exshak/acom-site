import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../components/collectionsOverview'
import Spinner from '../components/common/spinner'
import { convertCollectionsSnapshotToMap, firestore } from '../firebase/utils'
import { updateCollections } from '../redux/shop/shopActions'
import CollectionPage from './collection'

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview)
const CollectionPageWithSpinner = Spinner(CollectionPage)

type Props = {
  match: any
  updateCollections: any
}

type State = {
  loading: boolean
}

class ShopPage extends React.Component<Props, State> {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
