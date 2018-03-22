import React, {Component} from 'react';
import './app.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seoconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor( (time/1000) %60 );
        const minutes = Math.floor( (time/1000/60) % 60);
        const hours = Math.floor( (time/1000/60/60) % 24);
        const days = Math.floor( (time/1000/60/60/24));

        //console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds)
        this.setState({days, hours, minutes, seconds});
    }



    render() {
        // this.getTimeUntil(this.props.deadline);

        return(
            <div>
                <div className="Clock-Days"> {this.leading0(this.state.days)} Day </div>
                <div className='Clock-Hours'> {this.leading0(this.state.hours)} Hours </div>
                <div className='Clock-Minutes'> {this.leading0(this.state.minutes)} Minutes </div>
                <div className='Clock-Seconds'> {this.leading0(this.state.seconds)} </div>
            </div>
        )
    }
}

export default Clock;
