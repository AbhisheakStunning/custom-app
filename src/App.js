import logo from './logo.svg';
import './App.css';
import Video from './components/Video.js';
import dataVideo from './data/Data.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Playbutton from './components/Playbutton.js';
import { useState } from 'react';
import Destructure from './components/Destructure.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import AddVideo from './components/AddVideo.js';


let wrapper = 'App-header';

let videos = [

  {
    id: 1,
    bgColor: "blue",
    title: "React JS Tutorial",
    views: "10k",
    time: "1 year ago",
    online: true,

  },

  {
    id: 2,
    bgColor: "Red",
    title: "Angular JS Tutorial",
    views: "100k",
    time: "5 year ago",
    online: true,

  },

  {
    id: 3,
    bgColor: "green",
    title: "Node JS Tutorial",
    views: "50k",
    time: "3 year ago",
    online: true,

  },

  {
    id: 4,
    bgColor: "orange",
    title: "Vue JS Tutorial",
    views: "20k",
    time: "2 year ago",
    online: false,
    playbutton: true

  },





]



function App() {


  const [videos, setVideos] = useState(dataVideo)


  function customaddVideos(video) {

    setVideos([...videos,

    { ...video, id: videos.length + 1 }

    ])


  }



  return (



    <div className="App" >

      <div className={wrapper}>


        <Container>
          <Row>

            <Col xs={12}>

              <h1 style={{ padding: '20px', background: 'red', margin: '20px' }}>Custom APP Videos</h1>

              <AddVideo customaddVideos={customaddVideos}></AddVideo>

            </Col>

            <Col xs={6}>



              {videos.map(video =>

                <Video key={video.id} bgColor={video.bgColor} id={video.id} online={video.online}
                  title={video.title} Playbutton={video.playbutton} views={video.views} time={video.time}>

                  <Playbutton message="play-msg" onplay={() => console.log("play")} onpause={() => console.log("pause")}>Play</Playbutton>


                </Video>

              )}
              {/*<Destructure></Destructure>*/}









            </Col>
            <Col xs={6}>



              {videos.map(video =>

                <Video key={video.id} bgColor={video.bgColor} id={video.id} online={video.online}
                  title={video.title} Playbutton={video.playbutton} views={video.views} time={video.time}>

                  <Playbutton message="play-msg" onplay={() => console.log("play")} onpause={() => console.log("pause")}>Play</Playbutton>


                </Video>

              )}
              {/*<Destructure></Destructure>*/}

            </Col>


            <Col xs={12}>
              <div className="d-grid gap-2">
                <Button variant="danger" size='lg' style={{ padding: '20px', margin: '20px' }} onClick={() => {

                  setVideos([...videos, {
                    id: videos.length + 1,
                    bgColor: "Skyblue",
                    title: "React Native",
                    views: "100k",
                    time: "5 year ago",
                    online: true,

                  }])

                }}>Loads More Videos</Button>

              </div>
            </Col>




          </Row>
        </Container>

      </div>
    </div>
  );
}

export default App;
