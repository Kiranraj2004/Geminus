import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './main.css';
import { Context } from '../../context/Context';
function Body() {
  const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);
  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  return (
    <div className='Main'>
          <div className="nav" >
            <p >Geminus</p>
            <img src={assets.user_icon} alt="" />
          </div>

              <div className="main-container">
                { !showResults ?
                  <>
                    <div className="greet">
                      <p><span>Hello, kiran</span></p>
                      <p>How can I help you today?</p>
                    </div>

                    <div className="cards">
                      <div className="card" onClick={() =>
                        handleCardClick("Suggest Some Place To Visit In Kerala")
                      }>
                        <p>Suggest beatiful places to see on an upcoming road trip </p>
                        <img src={assets.compass_icon} alt="" />
                      </div>
                      <div className="card" 
                      onClick={() =>
                        handleCardClick("Briefly summarize this concept: urban planning")
                      }
                      
  
                      >
                        <p>Briefly summarize this concept: urban planning </p>
                        <img src={assets.bulb_icon} alt="" />
                      </div>
                      <div className="card" 
                       onClick={() =>
                        handleCardClick(
                          "Brainstorm team bonding activities for our work retreat"
                        )
                      }>
                        <p>Brainstorm team bonding activities for our work retreat </p>
                        <img src={assets.message_icon} alt="" />
                      </div>
                      <div className="card"
                      onClick={() =>
                        handleCardClick("Tell me about React js and React native")
                      }>
                        <p>Tell me about React js and React native</p>
                        <img src={assets.code_icon} alt="" />
                      </div>
                    </div>
                  </>
              :<>
              <div className='result'>
                <div className="result-title">
                  <img src={assets.user_icon} alt="" />
                  <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                  <img src={assets.gemini_icon} alt="" />
                  {loading?
                  <div className='loader'>
                    <h2></h2>
                    <h2></h2>
                    <h2></h2>
                  </div>:
                  <p>{resultData}</p>
                  }
                  
                </div>

              </div>


              </>}
              </div>

            <div className="main-bottom">
              <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a promt here' />
                  <div >
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img src={assets.send_icon} alt="" onClick={() => onSent()} />:null}
                    
                  </div>
              </div>

            </div>
     </div>
        )
}

        export default Body
