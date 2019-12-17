import React from 'react'
import MenuItem from '../menuItem'
import { sections } from './sections'
import './styles.scss'

type Props = {}

type State = {
  sections: Array<Object>
}

class Directory extends React.Component<Props, State> {
  state = { sections }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory
