import './TheDashTopbar.css'
import { useState ,  ChangeEvent } from "react";
import { IMAGES } from '../../utils/images-dash';
import { FaBars } from 'react-icons/fa';


interface Props {
  toggleSidebar: () => void;
}

const TheDashTopbar: React.FC<Props> = ({ toggleSidebar }) => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
   };
  return (
    <div className="HJ_topbar">
      <div className='HJ-Circle'>< FaBars onClick={toggleSidebar}/></div>
      <div className="HJ_topbar_search">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="HJ_search"
        />
        <img src={IMAGES.search} alt="search" className="HJ_image_search" />
      </div>
      <div className="HJ_topbar_icons">
        <img src={IMAGES.icon_notification} alt="notification" />
        <img src={IMAGES.icon_profile} alt="profile" />
        <h4>Jhon Doe</h4>
      </div>
   
    </div>
    
  )
}

export default TheDashTopbar



