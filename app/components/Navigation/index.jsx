import React, {Component} from 'react';
import { IndexLink  } from 'react-router';
import NavLink from './navLink';
/*
 * @class Navigation `导航`组件
 */
export default class Navigation extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div>
                <ol>
                    <li>
                        <NavLink to="/">全部<span>{this.props.allMemos}</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/todo">新建事项<span>{this.props.todoNumber}</span></NavLink>

                    </li>
                    <li>
                        <NavLink to="/doing">正在进行<span>{this.props.doingNumber}</span></NavLink>

                    </li>
                    <li>
                        <NavLink to="/done">已完成<span>{this.props.doneNumber}</span></NavLink>

                    </li>
                </ol>
            </div>
        )
    }
}
