import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from "../../context/Context"; 
import { useContext, useState } from "react";


function Sidebar() {
  const [extended, setExtended] = useState(false); // Correct state declaration

  // Function to toggle sidebar open/close
  const toggleSidebar = () => {
    setExtended(!extended);
  };
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPreviousPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};

  return (
    <div className={`sidebar ${extended ? 'extended' : 'collapsed'}`}>
      <div className="top">
        <img className='menus' src={assets.menu_icon} alt="Menu" onClick={toggleSidebar} />
        <div className="new_chat">
          <img src={assets.plus_icon} alt="New Chat"  onClick={()=>{
                        newChat()
                    }} />
          {extended && <p>New chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recenttitle">Recent</p>
            {prevPrompts.map((item, index) => {
							return (
								<div onClick={()=>{
                                    loadPreviousPrompt(item)
                                }} className="recent_entry">
									<img src={assets.message_icon} alt="" />
									<p>{item.slice(0, 18)}...</p>
								</div>
							);
						})}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom_item">
          <img src={assets.question_icon} alt="Help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom_item">
          <img src={assets.history_icon} alt="Activity" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom_item">
          <img src={assets.setting_icon} alt="Settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
