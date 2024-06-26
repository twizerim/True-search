import {LinkOutlined} from "@ant-design/icons"
import {EnvironmentOutlined} from "@ant-design/icons"
import {ZoomInOutlined} from "@ant-design/icons"
import {MoonOutlined} from "@ant-design/icons"
import {SunOutlined} from "@ant-design/icons"
import {TwitterOutlined} from "@ant-design/icons"
import {ReconciliationOutlined} from "@ant-design/icons"
import github from "../lightmode/assents/Snwebgit.png"
import "../lightmode/indexmode.css"
import "../lightmode/dark-mode.css"
import { useState,useEffect } from "react"
// import datas from "../lightmode/assents/datas.json";

const datas = require("../lightmode/assents/datas.json")


interface Myobject {
  id: number;
  firstname: string;
  lastname: string;
  information:string,
  subinf:string,
  image:string,
  flower:string,
  flowing:string,
  repos:string,
  city:string

}

export default function Whitemode(){

  const [dataresult,setdataresult]=useState(true)
  const [nodaresult,setnodatresult]=useState(false)
  // const [staticresult,setstaticresult]=useState(false)


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(datas);
    } else {
      const results = datas.filter((obj:Myobject) =>
        obj.firstname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    }
  }, [searchTerm]);
  
   const notanydatas = () =>{
      setdataresult(false)
      setnodatresult(true)
   }

   const backanydata = () =>{
         setdataresult(true)
         setnodatresult(false)
   }
 

    const [white,setwhite]=useState(true)
    const [worker,setwork]=useState(false)
    const [reverse,setreverse]=useState(true)

    const changes = () =>{
        setwhite(false)
        setwork(true)
        setreverse(false)
    }
    const nochange = () =>{
        setwhite(true)
        setwork(true)
        setreverse(true)
    }
      return (
        <>

        {/* {staticresult && (
           <div className={white===true?"inter-cardwite":"inter-card"}>
           <div className="heard-pathwite ">
             <p className={white===true?"witeb":"witebp"}>divfinder</p>
              <div className="hindura">
               {reverse && (
                    <h1 className={white===true?"witebx":""}>DARK<i><MoonOutlined  onClick={changes}/></i></h1>
               )}
              
              {worker &&(
               <h1 className={white===true?"witebx":""}>LIGHT<i><SunOutlined onClick={nochange}/></i></h1>
              )}
              
              </div>
           </div>
           <form action="" className={white===true?"searchwite":"search"}>
              <label htmlFor="" className={white===true?"witec":""}><ZoomInOutlined className="search-icon"/><input type="text"  className={white===true?"wited":""}  placeholder="Search Github username"/></label>
               <button>Search</button>
           </form>
           
          <div className={white===true?"content-cardwite":"content-card"}>
           
              <div className={white===true?"contentwite":"content"}>
                   <div className="contin-image">
                   <img src={github} alt="github" />
                   <div className={white===true?"firstdivwite":"firstdiv"}>
                   <div className={white===true?"leftwite":"left"}>
                       <h1 className={white===true?"octoswite":"octos"}>The octocact</h1>
                       <p className="linkss">octocat</p>
                       </div>
                       <div className={white===true?"rigthwite":"rigthh"}>Joined 25 Jan 2011</div>
                      </div>
                   </div>
                   <span className={white===true?"witee":"witeespan"}>This profile has no bio</span>
                  <div className={white===true?"numberwite":"number"}>
                      <li className={white===true?"witef":""}>Repos<p>3</p></li>
                      <li className={white===true?"witef":""}>Followers<p>3589</p></li>
                      <li className={white===true?"witef":""}>Followings<p>9</p></li>
                  </div>
                  <div className="local-link">
                      <div className={white===true?"topwite":"top"}>
                          <p className={white===true?"lineewite":"linee"}><EnvironmentOutlined /><span className={white===true?"lineewite":""}>San Francisco</span></p>
                          <p className={white===true?"lineewite":"linee"}><TwitterOutlined /><span className={white===true?"lineewite":""}>Not available</span></p>
                      </div>
                      <div className={white===true?"bottomwite":"bottom"}>
                      <p className={white===true?"lineewite":"linee"}><LinkOutlined /><span className={white===true?"lineewite":""}>https://gitihub.blog</span></p>
                      <p className={white===true?"lineewite":"linee"}><span className={white===true?"lineewite":""}>agithub</span></p>
                      </div>
                  </div>
                 
              </div>
          </div>
        </div>
        )}  */}
        

        

          {nodaresult && (
            <div className={white===true?"inter-cardwite":"inter-card"}>
            <div className="heard-pathwite ">
              <p className={white===true?"witeb":"witebp"}>divfinder</p>
               <div className="hindura">
                {reverse && (
                     <h1 className={white===true?"witebx":""}>DARK<i><MoonOutlined  onClick={changes}/></i></h1>
                )}
               
               {worker &&(
                <h1 className={white===true?"witebx":""}>LIGHT<i><SunOutlined onClick={nochange}/></i></h1>
               )}
               
               </div>
            </div>
            <form action="" className={white===true?"searchwite":"search"}>
               <label htmlFor="" className={white===true?"witec":""}><ZoomInOutlined className="search-icon"/><input type="text"  className={white===true?"wited":""}  placeholder="Search Github username"/></label>
                <div className="noyresult">
                  <p>No results</p>
                <button onChange={backanydata}>Search</button>
                </div>
            </form>
            
           <div className={white===true?"content-cardwite":"content-card"}>
            
               <div className={white===true?"contentwite":"content"}>
                    <div className="contin-image">
                    <img src={github} alt="github" />
                    <div className={white===true?"firstdivwite":"firstdiv"}>
                    <div className={white===true?"leftwite":"left"}>
                        <h1 className={white===true?"octoswite":"octos"}>The octocact</h1>
                        <p className="linkss">octocat</p>
                        </div>
                        <div className={white===true?"rigthwite":"rigthh"}>Joined 25 Jan 2011</div>
                       </div>
                    </div>
                    <span className={white===true?"witee":"witeespan"}>Lorem ipsum dolar sit amet, consecteture adipiscing </span>
                    <span className={white===true?"witee":"witeespan"}>elit.donec ad.Quisque volutpot mattis eros</span>
                   <div className={white===true?"numberwite":"number"}>
                       <li className={white===true?"witef":""}>Repos<p>3</p></li>
                       <li className={white===true?"witef":""}>Followers<p>3589</p></li>
                       <li className={white===true?"witef":""}>Followings<p>9</p></li>
                   </div>
                   <div className="local-link">
                       <div className={white===true?"topwite":"top"}>
                           <p className={white===true?"lineewite":"linee"}><EnvironmentOutlined /><span className={white===true?"lineewite":""}>San Francisco</span></p>
                           <p className={white===true?"lineewite":"linee"}><TwitterOutlined /><span className={white===true?"lineewite":""}>Not available</span></p>
                       </div>
                       <div className={white===true?"bottomwite":"bottom"}>
                       <p className={white===true?"lineewite":"linee"}><LinkOutlined /><span className={white===true?"lineewite":""}>https://gitihub.blog</span></p>
                       <p className={white===true?"lineewite":"linee"}><span className={white===true?"lineewite":""}>agithub</span></p>
                       </div>
                   </div>
                  
               </div>
           </div>
         </div>
         )}

        {dataresult && (
           <div className={white===true?"inter-cardwite":"inter-card"}>
           <div className="heard-pathwite ">
             <p className={white===true?"witeb":"witebp"}>divfinder</p>
              <div className="hindura">
               {reverse && (
                    <h1 className={white===true?"witebx":""}>DARK<i><MoonOutlined  onClick={changes}/></i></h1>
               )}
              
              {worker &&(
               <h1 className={white===true?"witebx":""}>LIGHT<i><SunOutlined onClick={nochange}/></i></h1>
              )}
              
              </div>
           </div>
           <form action="" className={white===true?"searchwite":"search"}>
              <label htmlFor="" className={white===true?"witec":""}><ZoomInOutlined className="search-icon"/><input type="text"  
              onChange={(event)=>{setSearchTerm(event.target.value)}} className={white===true?"wited":""}
                   placeholder="Search Github username"/></label>
               <div className="noyresult">
               <button onChange={notanydatas}>Search</button>
               </div>
           </form>
        
                <div className={white===true?"content-cardwite":"content-card"}>
                {filteredData.slice(-1).map((val:Myobject) => (
                          <div  className={white===true?"contentwite":"content"}>
                          <div className="contin-image">
                          <img src={github} alt="github" />
                          <div className={white===true?"firstdivwite":"firstdiv"}>
                          <div className={white===true?"leftwite":"left"}>
                              <h1 className={white===true?"octoswite":"octos"}>{val.firstname}</h1>
                              <p className="linkss">{val.lastname}</p> 
                              </div>
                              <div className={white===true?"rigthwite":"rigthh"}>Joined 25 Jan 2011</div>
                             </div>
                          </div>
                          <span className={white===true?"witee":"witeespan"}>{val.information}</span>
                          <span className={white===true?"witee":"witeespan"}>{val.subinf}</span>
                         <div className={white===true?"numberwite":"number"}>
                             <li className={white===true?"witef":""}>Repos<p>{val.repos}</p></li>
                             <li className={white===true?"witef":""}>Followers<p>{val.flower}</p></li>
                             <li className={white===true?"witef":""}>Followings<p>{val.flowing}</p></li>
                         </div>
                         <div className="local-link">
                             <div className={white===true?"topwite":"top"}>
                                 <p className={white===true?"lineewite":"linee"}><EnvironmentOutlined /><span className={white===true?"lineewite":""}>{val.city}</span></p>
                                 <p className={white===true?"lineewite":"linee"}><TwitterOutlined /><span className={white===true?"lineewite":""}>Not available</span></p>
                             </div>
                             <div className={white===true?"bottomwite":"bottom"}>
                             <p className={white===true?"lineewite":"linee"}><LinkOutlined /><span className={white===true?"lineewite":""}>https://gitihub.blog</span></p>
                             <p className={white===true?"lineewite":"linee"}><span className={white===true?"lineewite":""}>agithub</span></p>
                             </div>
                         </div>
                        
                     </div> 
                ))}
            
                
            </div>
          
          
        </div> 
        )}
                            
        </>
      )
}