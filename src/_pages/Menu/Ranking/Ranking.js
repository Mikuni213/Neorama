import DailyData from '../../../_data/DailyData.js';
import WeeklyData from '../../../_data/WeeklyData.js';
import SubData from '../../../_data/SubData.js';
import RankingCol from '../../../_components/RankingCol/RankingCol.js'
import NewItems from '../../../_components/NewItems/NewItems.js'
import History from '../../../_components/History/History.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function Ranking() {
    return (
      <div className="App">
          <h1>Ranking</h1>
          <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='Daily' RankingSubTitle='今日の人気動画' />
          <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='Monthly' RankingSubTitle='今月の人気動画' />
          <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='Total' RankingSubTitle='累計再生数ランキング' />
       </div>
    );
  }
  
  export default Ranking;