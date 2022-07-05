import TopPageIllustration from '../../_components/TopPageIllustration/TopPageIllustration'
import DailyData from '../../_data/DailyData.js';
import WeeklyData from '../../_data/WeeklyData.js';
import SubData from '../../_data/SubData.js';
import RankingCol from '../../_components/RankingCol/RankingCol.js'
import NewItems from '../../_components/NewItems/NewItems.js'
import History from '../../_components/History/History.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function Home() {
  return (
    <div className="App">
      <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='人気動画' RankingSubTitle='　' link="/FavoriteVideo" continue="true"/>
      <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='人気チーム' RankingSubTitle='　' link="/FavoriteTeam" continue="true"/>
      <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='急上昇ワード' RankingSubTitle='　' link="/CardReccomend" />
      <div className='flex'>
        <NewItems RankingData = {SubData} RankingTitle='ITEMS' RankingSubTitle='新着商品' link="/CardPrice"/>
        <NewItems RankingData = {SubData} RankingTitle='NEWS' RankingSubTitle='新着情報' link="/CardPrice"/>
      </div>
      <History RankingTitle='History' RankingSubTitle='更新情報'/>
    </div>
  );
}

export default Home;