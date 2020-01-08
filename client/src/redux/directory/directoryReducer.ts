const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=500&q=80&crop=focalpoint&fp-y=.35',
      size: 'large',
      id: 4,
      linkUrl: 'shop/mens'
    },
    {
      title: 'womens',
      imageUrl:
        'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=500&q=80&crop=focalpoint&fp-x=.50&fp-y=.30&fp-z=2',
      size: 'large',
      id: 5,
      linkUrl: 'shop/womens'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
