import './ExploreContainer.css';

interface ContainerProps { }

 const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
  <div className="container home">
    <img id='logo' alt='' src="assets/logo.gif">
    </img>
  
    <div className='bgSize'>
    <div id="StarterMessage" className="text" ></div>
    </div>
   {/*     <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
       */ }
  </div> 
  

  );
  
};

export default ExploreContainer;
 