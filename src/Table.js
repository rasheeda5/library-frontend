import { useEffect } from "react";
import axios from "axios";

const Table = () => {
  useEffect(() => {
    const url = "http://localhost:8080/books";
    axios.get(url).then((response) => console.log(response.data));
  }, []);

  //   const res = axios.get(url);
  //   console.log(res);
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

// function Table() {
//     state = {
//         loading: true,
//         person: null
//       };

//       componentDidMount = async function () {
//         const url = "http://localhost:8080/books";
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({ books: data.results[0], loading: false });
//       }

//       render() {
//         if (this.state.loading) {
//           return <div>loading...</div>;
//         }

//         // if (!this.state.person) {
//         //   return <div>didn't get data</div>;
//         // }

//         return (
//             console.log(data.results)
//         //   <div>
//         //     <div>{this.state.person.name.title}</div>
//         //     <div>{this.state.person.name.first}</div>
//         //     <div>{this.state.person.name.last}</div>
//         //     <img src={this.state.person.picture.large} />
//         //   </div>
//         );
//       }

export default Table;
