
import '../Css/Maindashboard.css'; 
import Navbar from '../Components/Navbar.jsx';
import Sidebar from '../Components/Sidebar.jsx';

function Maindashboard(){
    return(
       <div className='maindashboard'>
            <div className="Sidebar">
                <Sidebar />
            </div>

            <div className='Navbar'>
                <Navbar />
            </div>
            <div className='Bodypage'>
            </div>
       </div>
    );
}
export default Maindashboard;