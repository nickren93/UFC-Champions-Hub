import React, {useState} from'react';
import './Home.css';

function Home() {
  return (
    <>
      <main>
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png"
          alt="UFC Logo"
        />

        <header id="mainTitle">
          <h1>UFC Champions Hub</h1>
        </header>

        <h2>Your Central Source for Current UFC Champions</h2>

        <p>
          UFC Champions Hub provides an easy way for fans to explore up-to-date
          information on current UFC champions across all weight divisions.
          Browse champions by division, view detailed fighter profiles, and stay
          informed on the latest titleholders in the sport.
        </p>

        <p>
          Navigate to the <strong>Champions</strong> section to view the complete
          list of current champions and explore individual fighter details.
        </p>

        <h3>Inside the Octagon: Championship Moments</h3>
        <p>
            A featured highlight showcasing elite championship-level competition
            inside the Octagon.
        </p>

        {/* <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Ojex_kkxPPE"
            title="UFC 314: Volkanovski vs. Lopes | Official Fight Promo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div> */}
        <div className="video-container">
            <iframe 
                width="1396" height="785" src="https://www.youtube.com/embed/p0pnGmKDhKs" 
                title="UFC 308: Ilia Topuria vs Max Holloway Promo" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            />
        </div>
      </main>
    </>
  );
}

export default Home;





// function Home(){

//     const [number, setNumber] = useState(0)
//     const [userInput, setUserInput] = useState("")

//     const onHandleSubmit = (e) => {
//         e.preventDefault();
//         //const updatedNumber = number + userInput.length
//         setNumber(number => number + userInput.length)
//         setUserInput("")
//     }

//     return(
//         <>  
//             <main>
//                 <img id = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png" alt="UFC_Logo"/>
                
//                 <header id="mainTitle">
//                     <h1>UFC Champions Finder</h1>
//                 </header>

//                 <h2>Welcome to the UFC Current Champions Information Finder!</h2>

//                 <p>This app allows users to search and view information about the current UFC 
//                     champions, including their names, age, weight class, fighting record. Click 
//                     on the "Champions" navigation link on top   to view the list of current champions.
//                 </p>

                
//                 <form onSubmit={onHandleSubmit}>
//                     <input value={userInput} placeHolder={"Please enter a word"} onChange={(e)=>{setUserInput(e.target.value)}}/>
//                     <button type={"submit"}> Click Me! </button>
//                 </form>

//                 <p>{number}</p>

//                 <h3>Upcoming UFC Title Fight Event - UFC 314 - April 12th </h3>
//                 <div className="video-container">
//                     <iframe 
//                         /* width="1296" height="729" */
//                         src="https://www.youtube.com/embed/Ojex_kkxPPE" 
//                         title="UFC 314: Volkanovski vs. Lopes - April 12th | Fight Promo" 
//                         frameborder="0" 
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                         referrerpolicy="strict-origin-when-cross-origin" 
//                         allowfullscreen 
//                     />
//                 </div>
                
//             </main> 
//         </>
        
//     )
// }

// export default Home;