 import './Background.css'
import video from '../../assets/vid.mp4'  
import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/img4.jpg'

const Background = ({playStatus,heroCount}) => {
  if(playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted>
            <source src={video} type='video/mp4'/>

        </video>
    )
  }
  else if(heroCount==0){
    return <img src={image1} className='background' alt=""/>
  }
  else if(heroCount==1){
    return <img src={image2} className='background' alt=""/>
  }
  else if(heroCount==2){
    return <img src={image3} className='background' alt=""/>
  }
  else if(heroCount==3){
    return <img src={image4} className='background' alt=""/>
  }
 }
 export default Background