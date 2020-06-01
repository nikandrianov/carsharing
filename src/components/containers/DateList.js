import React, { Component } from 'react';
import x from '../../assets/image/x.svg';

let date = new Date();
let a = date.getMonth();
let month = a + 1;
let now = date.getDate(0) + '.' + month + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

class DateList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h4 className="dop__options title">Дата аренды</h4>
                    <form className="form-rent">
                        <div className="form-rent__date">
                            <label>C</label>
                            <input className="form-rent__input" defaultValue={now} type="datelocal" name="start-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                        <div className="form-rent__date">
                            <label>По</label>
                            <input className="form-rent__input" type="datetime-local" onChange={this.props.inputChange} name="end-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                    </form>
            </div>
        )
    }
}

export default DateList;