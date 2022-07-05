import React from 'react';
import './BasicPlate.css';

class BasicPlate extends React.Component {
    render() {
        const Price =  '\xA5'+ this.props.PlateInformation.Price
        return(
            <div>
                <a href='https://viewer-vr-d2e5246b77a8275462f520e673b4a16479c5a133.vercel.app/'>
                <div className='OutlineBasicBox'>
                    <div className='videotitle'>
                        <p className='RankLetter'>{this.props.PlateInformation.Title}</p>
                    </div>
                    <div className='ImageBox'>
                     <img src={this.props.PlateInformation.ImageURL} alt="CardImage"/>
                    </div>
                    <div className='date'>
                        <p>{this.props.PlateInformation.Date}</p>
                    </div>
                    <div className='user'>
                        <p>{this.props.PlateInformation.UserName}</p>
                    </div>
                    <div className='taglist'>
                        <div className='tagsports'>
                            <p>{this.props.PlateInformation.SportsName}</p>
                        </div>
                        <div className='tagteam'>
                            <p>{this.props.PlateInformation.TeamName}</p>
                        </div>
                        {this.props.PlateInformation.taglist.map((tagItem) => {
                        return(
                            <div className='tag'>
                            <p>{tagItem}</p>
                            </div>
                        )
                    })
                    }
                    </div>
                    <div className='explanation'>
                        <p>{this.props.PlateInformation.Explanation}</p>
                    </div>
                </div>
                </a>
            </div>
        );
    }
}
  export default BasicPlate;
