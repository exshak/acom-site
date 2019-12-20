import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directorySelectors'
import MenuItem from '../menuItem'
import './styles.scss'

const Directory = ({ sections }: any) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }: any) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
