import React from 'react'
import './css/Components/greet.css'
// import greet from '../json/greet'
import rajesh from '../assets/rajesh.png'
const Button = () => {
  return (
    <div className="greet">
   
    <div className='greet-text'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sit nobis incidunt beatae laudantium cum error quae facere laboriosam ea, quidem eligendi. Delectus nobis aspernatur saepe dolor aliquid rerum officiis, dolorem, praesentium alias eveniet assumenda asperiores reprehenderit ea, veritatis dolores ad et itaque repellendus mollitia provident! Odit fugiat minus ratione?</p>
      <div className="btn-portfolio">
        <button className='portfolio-btn'>
            <span className='txt'>download button</span>
            <span className='icon'>▶</span>
        </button>
        <button className='btn-projects'>
            projects
        </button>
      </div>
    </div>
      <div className="greet-image">
        <div className='bg-desighn'></div>
        <div className='greet-img'>
          {/* {greet.map((e)=>(<img src={e.greet_image} alt="" />))} */}
                    {/* <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg" alt="" /> */}
                  <img src={rajesh} alt="" />

        </div>
        <span className='label ui-ux'>properties</span>
        <span className='label developer'>Projects</span>
    </div>
    </div>
  )
}

export default Button
