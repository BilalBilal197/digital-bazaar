import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/cvpntL1/jacketss.png',
        id: 1
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/cvpntL1/sneakers.png',
        id: 1
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/cvpntL1/womens.png',
        size: 'large',
        id: 1
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/cvpntL1/mens.png',
        size: 'large',
        id: 1
      }

      ]
    }
  }
  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          ))
        }
      </div>

    );
  }

}

export default Directory;