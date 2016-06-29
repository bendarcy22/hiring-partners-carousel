import React from 'react';

class PartnerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPartnerIndex: 0 }
    this.changePartnerIndex = this.changePartnerIndex.bind(this)
  }
  changePartnerIndex() {
    let nextIndex = this.state.selectedPartnerIndex + 1;
    if (nextIndex === (this.props.partners.length - 1)) {
      this.setState({selectedPartnerIndex: 0})
    } else {
      this.setState({selectedPartnerIndex: nextIndex})
    }
  }
  componentDidMount() {
    setInterval(this.changePartnerIndex, 2000);
  }

  render(){
    return (
    <img src={this.props.partners[this.state.selectedPartnerIndex]}/>
    )
  }
}

export default PartnerList;
