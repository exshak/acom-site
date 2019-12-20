import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../components/collectionsOverview'
import CollectionPage from './collection'
import './styles.scss'

export const ShopPage = ({ match }: any) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)
