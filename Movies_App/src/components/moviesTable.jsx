// import React from 'react';
// import Like from './common/like';

// const MoviesTable = (props) => {
//     const { movies, onDelete, onLike, onSort } = props;

//     return (
//         <table className="table">
//                 <thead>
//                     <tr>
//                         <th onClick={() => onSort("title")}>Title</th>
//                         <th onClick={() => onSort("genre.name")}>Genre</th>
//                         <th onClick={() => onSort("numberInStock")}>Stock</th>
//                         <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
//                         <th />
//                         <th />
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {movies.map (movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         {/* <td> <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/> </td> */}
//                         <td> <Like liked={movie.liked} onClick={() => onLike(movie)}/> </td>
//                         {/* <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td> */}
//                         <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//      );
// }

// export default MoviesTable;

// 2nd
// Converting to class component for sorting column
// import React, { Component } from "react";
// import Like from "./common/like";

// class MoviesTable extends Component {

//     raiseSort = path => {
//         const sortColumn = {...this.props.sortColumn};
//         if (sortColumn.path === path)
//             sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
//         else {
//             sortColumn.path = path ;
//             sortColumn.order = "asc";
//         }
//         this.props.onSort(sortColumn);
//     };

//     render() {
//         const { movies, onDelete, onLike } = this.props;

//         return (
//             <table className="table">
//                     <thead>
//                         <tr>
//                             {/* <th onClick={() => onSort("title")}>Title</th>
//                             <th onClick={() => onSort("genre.name")}>Genre</th>
//                             <th onClick={() => onSort("numberInStock")}>Stock</th>
//                             <th onClick={() => onSort("dailyRentalRate")}>Rate</th> */}
//                             <th onClick={() => this.raiseSort("title")}>Title</th>
//                             <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
//                             <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
//                             <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
//                             <th />
//                             <th />
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {movies.map (movie => (
//                         <tr key={movie._id}>
//                             <td>{movie.title}</td>
//                             <td>{movie.genre.name}</td>
//                             <td>{movie.numberInStock}</td>
//                             <td>{movie.dailyRentalRate}</td>
//                             <td> <Like liked={movie.liked} onClick={() => onLike(movie)}/> </td>
//                             <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                         </tr>
//                         ))}
//                     </tbody>
//                 </table>
//          );
//     }
// }

// export default MoviesTable;

// 3rd
// import React, { Component } from "react";
// import TableHeader from './common/tableHeader';
// import Like from "./common/like";
// import TableBody from "./common/tableBody";

// class MoviesTable extends Component {

// columns = [
//     { path: "title", label: "Title" },
//     { path: "genre.name", label: "Genre" },
//     { path: "numberInStock", label: "Stock" },
//     { path: "dailyRentalRate", label: "Rate" },
//     // { key: "like"}, // like
//     // { key: "like", content: <Like />},
//     // { key: "like", content: <Like liked={movie.liked} onClick={() => onLike(movie)}/>},
//     { key: "like", content: movie => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>)},
//     // { key: "delete"}, // delete
//     // { key: "delete", content: <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>},
//     { key: "delete", content: movie => (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>)},
//   ];

//     // raiseSort = path => {
//     //     const sortColumn = {...this.props.sortColumn};
//     //     if (sortColumn.path === path)
//     //         sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
//     //     else {
//     //         sortColumn.path = path ;
//     //         sortColumn.order = "asc";
//     //     }
//     //     this.props.onSort(sortColumn);
//     // };

//     render() {
//         // const { movies, onDelete, onLike } = this.props;

//         // const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

//         const { movies, onSort, sortColumn } = this.props;

//         return (
//             <table className="table">
//                 <TableHeader
//                 columns={this.columns}
//                 sortColumn={sortColumn}
//                 onSort={onSort}
//                 />
//                     {/* <thead>
//                         <tr>
//                             <th onClick={() => this.raiseSort("title")}>Title</th>
//                             <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
//                             <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
//                             <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
//                             <th />
//                             <th />
//                         </tr>
//                     </thead> */}
// <TableBody columns={this.columns} data={movies} />
//                     {/* <tbody>
//                         {movies.map (movie => (
//                         <tr key={movie._id}>
//                             <td>{movie.title}</td>
//                             <td>{movie.genre.name}</td>
//                             <td>{movie.numberInStock}</td>
//                             <td>{movie.dailyRentalRate}</td>
//                             <td> <Like liked={movie.liked} onClick={() => onLike(movie)}/> </td>
//                             <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                         </tr>
//                         ))}
//                     </tbody> */}
//                 </table>
//          );
//     }
// }

// export default MoviesTable;

// 4th
// import React, { Component } from "react";
// import Table from "./common/table";
// import Like from "./common/like";

// class MoviesTable extends Component {
//     columns = [
//         { path: "title", label: "Title" },
//         { path: "genre.name", label: "Genre" },
//         { path: "numberInStock", label: "Stock" },
//         { path: "dailyRentalRate", label: "Rate" },
//         { key: "like", content: movie => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>)},
//         { key: "delete", content: movie => (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>)},
//       ];

//   render() {
//     const { movies, onSort, sortColumn } = this.props;

//     return (
//       <Table
//         columns={this.columns}
//         data={movies}
//         sortColumn={sortColumn}
//         onSort={onSort}
//       />
//     );
//   }
// }

// export default MoviesTable;

//FINALimport React, { Component } from "react";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Table from "./common/table";
// import Like from "./common/like";

// class MoviesTable extends Component {
//   columns = [
//     {
//       path: "title",
//       label: "Title",
//       content: (movie) => (
//         <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
//       ),
//     },
//     { path: "genre.name", label: "Genre" },
//     { path: "numberInStock", label: "Stock" },
//     { path: "dailyRentalRate", label: "Rate" },
//     {
//       key: "like",
//       content: (movie) => (
//         <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
//       ),
//     },
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";
import auth from "../services/authService";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      //   key: "delete",
      //   content: (movie) => (
      //     <button
      //       onClick={() => this.props.onDelete(movie)}
      //       className="btn btn-danger btn-sm"
      //     >
      //       Delete
      //     </button>
      //   ),
    },
  ];
  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };
  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;

//   // constructor() {
//   //   super();
//   //   const user = auth.getCurrentUser();
//   //   if (user && user.isAdmin) this.columns.push(this.deleteColumn);
//   // }

//   render() {
//     const { movies, onSort, sortColumn } = this.props;

//     return (
//       <Table
//         columns={this.columns}
//         data={movies}
//         sortColumn={sortColumn}
//         onSort={onSort}
//       />
//     );
//   }
// }

// export default MoviesTable;
