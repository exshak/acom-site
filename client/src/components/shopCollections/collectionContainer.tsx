import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import CollectionPage from '../../pages/collection'
import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors'
import WithSpinner from '../common/spinner/withSpinner'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
