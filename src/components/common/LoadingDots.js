import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {frame: 1};
  }

  // // Life cycle
  // componentWillMount() {
  // }

  componentDidMount() {
    console.log("componentDidMount ... ");
    let self = this;
    this.ItemsInterval = setInterval(() => {
      self.setState({
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.ItemsInterval);
  }

  /*componentWillReceiveProps(nextProps) {
    // props, và từ đó bạn có thể khởi tạo các dịch vụ khác.
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Hàm này thực hiện khi state và props thay đổi
    // Hàm này sẽ trả về kết quả true/false, bạn sẽ cần sử dụng đến hàm này để xử lý xem có cần update component không
  }

  componentWillUpdate(nextProps, nextState) {
    // Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
    // Nếu hàm trên trả về false, thì React sẽ không gọi hàm này
  }

  componentDidUpdate(prevProps, prevState) {
    // Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
  }

  //// MOUNTING: componentWillMount => render => componentDidMount
  //// UPDATING: componentWillReceiveProps => shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate
*/
  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let txtDots = '';

    while (dots > 0) {
      txtDots += '.';
      dots--;
    }

    return <span {...this.props}>{txtDots}&nbsp;</span>;
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default LoadingDots;
