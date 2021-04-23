import React,{
  Component
} from 'react'
import SiderDemo from "./SiderDemo";

class Chip extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
        <div>
          <SiderDemo></SiderDemo>
        </div>
    );
  }
}
export default Chip