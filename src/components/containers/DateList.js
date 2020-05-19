import React, { Component } from 'react';
import x from '../../assets/image/x.svg';

let date = new Date();
let a = date.getMonth();
let month = a + 1;
let now = date.getDate() + '.' + month + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

export default class DateList extends Component {
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
                            <input className="form-rent__input" type="datetime-local" name="end-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                    </form>
            </div>
        )
    }
}
