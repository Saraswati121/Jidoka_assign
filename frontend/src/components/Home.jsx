import React from 'react'
import './style.css'
import { useNavigate} from "react-router-dom";

export const Home = () => {
    const nav = useNavigate()
  return (
    <div>
        <div className="nav">
        <div>
          <img
            src="https://www.shutterstock.com/image-vector/welcome-lettering-sign-handwritten-modern-600w-1452185639.jpg"
            alt=""
            width="250px"
            height="53px"
            style={{marginTop:"2px"}}
          />
        </div>
        <div>
          <button className="btn" onClick={()=>nav('/') }>Logout</button>
        </div>
      </div>

      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1QOA3WZ2c3rQ5a0UbVQ3rSUEoXEc1MI5mg&usqp=CAU" alt="" />
      </div>
    </div>
  )
}
