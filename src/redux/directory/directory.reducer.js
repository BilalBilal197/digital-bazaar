const INITIAL_STATE = {
  sections: [
    {
      title: 'Computers & Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1549921296-bc643ead1e65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 1,
      linkUrl: 'shop/computers'
    },
    {
      title: 'TV & Video',
      imageUrl: 'https://images.unsplash.com/photo-1575556262165-7cd5034265d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1251&q=80',
      id: 2,
      linkUrl: 'shop/tvs'
    },
    {
      title: 'Cell Phones & Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1566411278699-a9ad7d67939c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 3,
      linkUrl: 'shop/phones'
    },
    {
      title: 'Photography & Videography',
      imageUrl: 'https://images.unsplash.com/photo-1563298258-c9b0371b55cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 4,
      linkUrl: 'shop/photographs'
    },
    {
      title: 'Home Audio',
      imageUrl: 'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      id: 5,
      linkUrl: 'shop/audios'
    },
    {
      title: 'Headphones',
      imageUrl: 'https://images.unsplash.com/photo-1567928513899-997d98489fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 6,
      linkUrl: 'shop/headphones'
    },
    {
      title: 'Musical Instruments',
      imageUrl: 'https://images.unsplash.com/photo-1562826668-51258810ccfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      id: 7,
      linkUrl: 'shop/musicals'
    },
    {
      title: 'Video Games',
      imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      id: 8,
      linkUrl: 'shop/games'
    },
    {
      title: 'Office Electronics',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441__340.jpg',
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
