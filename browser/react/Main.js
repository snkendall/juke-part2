import React from 'react';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';
import AllAlbums from './AllAlbums.js';
import axios from 'axios';

axios.get('api/albums')
.then(response => {
  return response.data;
})
.then(data => {
  console.log('success');
  console.log(data);
})
.catch(err => {
  console.error('error');
  console.error(err);
});

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //greeting: ':D' // Tom's law here dataType
           albums: [
                {
                  name: 'Abbey Road',
                  id: 1,
                  imageUrl: 'http://fillmurray.com/300/300',
                  songs: [
                    {
                      id: 1,
                      name: 'Romeo & Juliette',
                      artists: [
                        { name: 'Bill' }
                      ],
                      genre: 'Funk',
                      audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                    },
                    {
                      id: 2,
                      name: 'White Rabbit',
                      artists: [
                        { name: 'Bill' },
                        { name: 'Alice' }
                      ],
                      genre: 'Fantasy',
                      audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                    },
                    {
                      id: 3,
                      name: 'Lucy in the Sky with Diamonds',
                      artists: [
                        { name: 'Bob' }
                      ],
                      genre: 'Space',
                      audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                    }
                  ]
                },
                {
                  name: 'Yellow Submarine',
                  id: 2,
                  imageUrl: 'http://fillmurray.com/300/300',
                  songs: [
                    {
                      id: 4,
                      name: 'London Calling',
                      artists: [
                        { name: 'Bill' }
                      ],
                      genre: 'Punk',
                      audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                    }
                  ]
                }
              ]
        };
    }
    render() {
        return (
            <div id="main" className="container-fluid">
                <Sidebar />
                <AllAlbums albums = {this.state.albums} />
                <Footer />
            </div>
        );
    }
}
