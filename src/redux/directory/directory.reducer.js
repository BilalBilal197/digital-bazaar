const INITIAL_STATE = {
  sections: [
    {
      title: 'Computers & Accessories',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/computers'
    },
    {
      title: 'TV & Video',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/tvs'
    },
    {
      title: 'Cell Phones & Accessories',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/phones'
    },
    {
      title: 'Photography & Videography',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 4,
      linkUrl: 'shop/photographs'
    },
    {
      title: 'Home Audio',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 5,
      linkUrl: 'shop/audios'
    },
    {
      title: 'Headphones',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 6,
      linkUrl: 'shop/headphones'
    },
    {
      title: 'Musical Instruments',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 7,
      linkUrl: 'shop/musicals'
    },
    {
      title: 'Video Games',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 8,
      linkUrl: 'shop/games'
    },
    {
      title: 'Office Electronics',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 9,
      linkUrl: 'shop/electronics'
    }

  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
