import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Pally_Home } from "..y/pally_Home/pally_home";
import { BsListUl } from "react-icons/fa";
import SmileOutlined from '@ant-design/icons/SmileOutlined';
export function PallyIndex (){
    return(
        <BrowserRouter>
        <div class="home">
            <header>
                <nav>
                    <div className="palfig"><Link to="home"><img src="favicon.ico" width="70px" height="50px"/></Link></div>
                    <div><span><BsListUl/></span></div>
                    <div>{SmileOutlined}</div>
                    <span>v2.3.2</span>
                </nav>
            </header>
        </div>
        
        <Routes>
             <Route path="/" element={<Pally_Home/>}/>
            <Route path="home" element={<Pally_Home/>} />
        </Routes>
        
 
        </BrowserRouter>
    )
}