import React, { Component } from 'react';


export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state={
            members: [],
        }
    }

    componentDidMount() {
        this.setState({
            members: this.props.members,
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.filterStr !== prevProps.filterStr) {
            let filteredList = this.props.members.filter(item => (item.name.toUpperCase().includes(this.props.filterStr.toUpperCase()) ||
                item.location.toUpperCase().includes(this.props.filterStr.toUpperCase()) || item.joinedGroupOn.toUpperCase().includes(this.props.filterStr.toUpperCase())));
            console.log(filteredList);
            this.setState({
                members: filteredList,
            });
        }
    }

    renderMemberItem(member, index) {
        return (
            <li className={index % 2 === 0 ? "member-item bkg-light-blue" : "member-item"} key={index}>
                <div>
                    <h3>Nome:</h3>
                    <span>{member.name}</span>
                </div>
                <div>
                    <h3>Cidade:</h3>
                    <span>{member.location}</span>
                </div>
                <div>
                    <h3>Entrou em:</h3>
                    <span>{member.joinedGroupOn}</span>
                </div>
            </li>
        );
    }

    render() {
        if(this.state.members.length === 0) {
            return (
                <div>
                    <span style={{"font-size": "40px"}}>
                        Sem resultados
                    </span>
                </div>
            );
        }

        const items = this.state.members.map((member, index) => this.renderMemberItem(member, index));
        return (
          <ul className="members-list">
              {items}
          </ul>
        );
    }


}