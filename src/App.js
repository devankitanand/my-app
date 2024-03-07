
import './App.css';
import Breadcrumb from './component/Breadcrumb';
import Navbar from './component/Navbar';
import Bitcoinstats from './component/Bitcoinstats';
import Getstarted from './component/Getstarted';
import TrendingCoins from './component/TrendingCoins';
import Sentiment from './component/Sentiment';
import Performance from './component/Performance';
import TradingViewWidget from './component/TradingViewWidget';
 

function App() {
  return (
    <>
    <div className='mainbody'>
      <Navbar />
      <div className='maincontent'>
        <Breadcrumb/>
        <div className='stats'>
          <div className='leftsection'>
            <Bitcoinstats/>
            <Sentiment/>
            <Performance/>
            <TradingViewWidget/>
          </div>
          <div className='rightsection'>

            <Getstarted/>
            <TrendingCoins/>

          </div>
        </div>
        </div>
      </div>
    
    </>
  );
}

export default App;
