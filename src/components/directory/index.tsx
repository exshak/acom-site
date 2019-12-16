import React from 'react'
import MenuItem from '../menuItem'
import { sections } from './sections'
import './styles.scss'

type MyProps = {}

type MyState = {
  sections: Array<Object>
}

class Directory extends React.Component<MyProps, MyState> {
  state = { sections }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }: any) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory
