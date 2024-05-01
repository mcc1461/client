import "./App.css"
import volendam from "./img/Volendam.jpg"


function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src={volendam} alt="Volendam windmill"/>
        <div className="emoji-container">
          <div className="emoji">
            <p className='heart'>♥️</p>    
            <div className="comment-block">
              <p className='comment'>💬</p>   
              <p>10</p>
            </div>
            <div className="visit-block">
              <p className='visited'>👀</p>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text'>
        <h2> Welcome to Mcc-Blog </h2>
        <p className='info'>
          <a className="author">mcc</a>
          <time>10-04-2024 15:30</time>
        </p>
        <p className='summary'>The Volendam Windmill, situated in the picturesque village of Volendam in the Netherlands, serves as a striking symbol of Dutch heritage and traditional engineering. This windmill is not just a scenic attraction but also a testament to the Netherlands' long history of utilizing wind power for land drainage and milling processes. Volendam, known for its quaint houses, colorful wooden boats, and vibrant cultural scene, uses the windmill as a focal point that draws tourists and photography enthusiasts from around the world.
        </p>
      </div>
    </div>
  );
}

export default Post;
