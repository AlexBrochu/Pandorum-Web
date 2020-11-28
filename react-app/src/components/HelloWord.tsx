import * as React from "react";
import { getHelloWord } from "../services/HelloWordService";

type MyProps = { };
type MyState = { message: string };

export default class HelloWord extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    const fetchMsg = async () => {
      const response = await getHelloWord();
      console.log(response)
      this.setState({
        message : response.message
      });
    };
    fetchMsg();
  }

  render() {
    return (
      <div>
        <h1>Message</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}