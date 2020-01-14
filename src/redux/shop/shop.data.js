const SHOP_DATA = {
  computers: {
    id: 1,
    title: 'Computers & Accessories',
    routeName: 'computers',
    items: [
      {
        id: 1,
        name: 'New Apple MacBookPro',
        imageUrl: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 2149
      },
      {
        id: 2,
        name: 'Lenovo Ideapad L340',
        imageUrl: 'https://images.unsplash.com/photo-1527434171365-3d9f55f5fb78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 697
      },
      {
        id: 3,
        name: 'HP Touch-Screen Laptop',
        imageUrl: 'https://images.unsplash.com/photo-1565375706404-082d37dd1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 376
      },
      {
        id: 4,
        name: 'Samsung Chromebook 3',
        imageUrl: 'https://images.unsplash.com/photo-1522205987242-8e22924ab42a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 202
      },
      {
        id: 5,
        name: 'Lenovo Thinkpad E590',
        imageUrl: 'https://images.unsplash.com/photo-1527434009951-75a8f7558468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 18
      },
      {
        id: 6,
        name: 'ASUS VivoBook',
        imageUrl: 'https://images.unsplash.com/photo-1531063626275-e6680b864755?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 368
      },
      {
        id: 7,
        name: 'Samsung Chromebook',
        imageUrl: 'https://images.unsplash.com/photo-1522202222206-b75023c48f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 360
      },
      {
        id: 8,
        name: 'Acer Aspire E',
        imageUrl: 'https://images.unsplash.com/photo-1525971977907-20d22da82d6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 379
      },
      {
        id: 9,
        name: 'New Apple Macbook Air',
        imageUrl: 'https://images.unsplash.com/1/work-station-straight-on-view.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 2575
      }
    ]
  },
  tvs: {
    id: 2,
    title: 'TV & Video',
    routeName: 'tvs',
    items: [
      {
        id: 10,
        name: 'Samsung Flat 50 inch 4K UHD',
        imageUrl: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 1347
      },
      {
        id: 11,
        name: 'Samsung Flat 65 inch 4K UHD',
        imageUrl: 'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 1597
      },
      {
        id: 12,
        name: 'TCL 40 Inch 1080 p Smart LED',
        imageUrl: 'https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 1790
      },
      {
        id: 13,
        name: 'LG OLEC B9 Series 55 inches',
        imageUrl: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 1296
      },
      {
        id: 14,
        name: 'VIZIO P-series Quantum 65 inches',
        imageUrl: 'https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 1600
      }
      
    ]
  },
  phones: {
    id: 3,
    title: 'Cell Phones & Accessories',
    routeName: 'phones',
    items: [
      {
        id: 18,
        name: 'Motorole Moto E5',
        imageUrl: 'https://images.unsplash.com/photo-1469316968103-3db8c77142d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 89
      },
      {
        id: 19,
        name: 'Unlocked Samsung Galaxy A20',
        imageUrl: 'https://images.unsplash.com/photo-1534945644675-24836fd2906c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 249
      },
      {
        id: 20,
        name: 'Samsung Galaxy Notes 9 Factory Unlocked',
        imageUrl: 'https://images.unsplash.com/photo-1458862768540-8b091824fe2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 666
      },
      {
        id: 21,
        name: 'Jitterbug Flip Easy to use Cell phone for seniors',
        imageUrl: 'https://images.unsplash.com/photo-1498582801152-3ebe4158143e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 100
      }
    ]
  },
  photographs: {
    id: 4,
    title: 'Photography & Videography',
    routeName: 'photographs',
    items: [
      {
        id: 23,
        name: 'Canon PowerShot 20 MP digital Camera',
        imageUrl: 'https://images.unsplash.com/photo-1455100624998-cbee3a9eab8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 24,
        name: 'Canon PowerShot SX420 Digital Camera ',
        imageUrl: 'https://images.unsplash.com/photo-1470940511639-1068d7764233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 25,
        name: 'Nikon Z6 full Frame Mirrorless Camera',
        imageUrl: 'https://images.unsplash.com/photo-1487004820913-ccbc3ebb15d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      },
      {
        id: 26,
        name: 'Sony Full-Frame Interchangeable-Lens Camera',
        imageUrl: 'https://images.unsplash.com/photo-1497103605554-5c44031f0b1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      }
    ]
  },
  audios: {
    id: 5,
    title: 'Home Audio',
    routeName: 'audios',
    items: [
      {
        id: 30,
        name: 'Audio mixer',
        imageUrl: 'https://images.unsplash.com/photo-1506704998915-13c0ab5bd117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 599
      },
      {
        id: 31,
        name: 'Polk Audio PSW10 10inches Powered Subwoofer',
        imageUrl: 'https://images.unsplash.com/photo-1573096272447-f58103a3fe16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 349
      },
      {
        id: 32,
        name: 'EZVIZ indoor smart home camera',
        imageUrl: 'https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 125
      },
      {
        id: 33,
        name: 'Samsung soundbar',
        imageUrl: 'https://images.unsplash.com/photo-1557376382-e96b6778ffdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 250
      }
    ]
  },
  headphones: {
    id: 6,
    title: 'Headphones',
    routeName: 'headphones',
    items: [
      {
        id: 37,
        name: 'COWIN noise cancelling headphones',
        imageUrl: 'https://images.unsplash.com/photo-1570841398833-43e352b440ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 38,
        name: 'Sony Extra Bass Earbuds',
        imageUrl: 'https://images.unsplash.com/photo-1511300961358-669ca3ad05af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 39,
        name: 'Sony Noise Cancelling Headphones',
        imageUrl: 'https://images.unsplash.com/photo-1553775744-0bae9da7f5e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      },
      {
        id: 40,
        name: 'RHA S500 Universal Earphones',
        imageUrl: 'https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      },
      {
        id: 41,
        name: 'Mpow Bluetooth Headphones',
        imageUrl: 'https://images.unsplash.com/photo-1559743340-53fc2a036984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 45
      },
      {
        id: 43,
        name: 'LETSCOM Bluetooth Headphones',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      }
    ]
  },
  musicals: {
    id: 7,
    title: 'Musical Instruments',
    routeName: 'musicals',
    items: [
      {
        id: 44,
        name: 'RockJam 61-Key Electronic Keyboard Piano',
        imageUrl: 'https://images.unsplash.com/photo-1447160430190-9d1cae0b73db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 129
      },
      {
        id: 45,
        name: 'Jean Paul Flute Fl-290',
        imageUrl: 'https://images.unsplash.com/photo-1567184406952-9f6ba54cb614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 20
      }
      
    ]
  },
  games: {
    id: 8,
    title: 'Video Games',
    routeName: 'games',
    items: [
      {
        id: 51,
        name: 'PlayStation 4',
        imageUrl: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 250
      },
      {
        id: 52,
        name: 'Nintendo Switch',
        imageUrl: 'https://images.unsplash.com/photo-1560278687-2941249fd3d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 53,
        name: 'Gaming PC Controller',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      },
      {
        id: 54,
        name: 'DualShock 4 Wireless controller for PlayStation 4',
        imageUrl: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      }
    ]
  },
  electronics: {
    id: 9,
    title: 'Office Electronics',
    routeName: 'electronics',
    items: [
      {
        id: 58,
        name: 'calculator by Solar power',
        imageUrl: 'https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 15
      },
      {
        id: 59,
        name: 'Logitech MK200 Keyboard',
        imageUrl: 'https://images.unsplash.com/photo-1531772290195-0d46f4200951?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 60,
        name: 'Office Typewriter',
        imageUrl: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 125
      }
    ]
  }
};

export default SHOP_DATA;
