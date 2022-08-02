// import React, { Component } from 'react';

// class Movies extends Component {
//     state = {  }
//     render() {
//         return (
//             <h2>Movies Component</h2>
//          );
//     }
// }

// export default Movies;

// // 2nd (BUILDING THE MOVIES COMPONENT)
// import React, { Component } from 'react';
// import { getMovies} from '../services/fakeMovieService';

// class Movies extends Component {
//     state = {
//         movies: getMovies()
//      }
//     render() {
//         return (
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Genre</th>
//                         <th>Stock</th>
//                         <th>Rate</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.movies.map(movie => (
//                     <tr>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//          );
//     }
// }

// export default Movies;

// // 2nd (deleting a movie)
// import React, { Component } from 'react';
// import { getMovies} from '../services/fakeMovieService';

// class Movies extends Component {
//     state = {
//         movies: getMovies()
//      }

//     handleDelete = (movie) => {
//         console.log(movie);
//         // const movies = this.state.movies.filter(m => m._id !== movie._id)

//         // this.setState({movies: movies});

//         // if key and values are same , we can remove the repetation.
//         // this.setState({ movies });
//     }

//     render() {
//         return (
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Genre</th>
//                         <th>Stock</th>
//                         <th>Rate</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.movies.map(movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         {/* <td><button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button></td> */}
//                         <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//          );
//     }
// }

// export default Movies;

// 3rd (Conditional Rendering)
// import React, { Component } from 'react';
// import { getMovies} from '../services/fakeMovieService';

// class Movies extends Component {
//     state = {
//         movies: getMovies()
//      }

//     handleDelete = (movie) => {
//         // console.log(movie);
//         const movies = this.state.movies.filter(m => m._id !== movie._id)

//         this.setState({movies: movies});

//         // if key and values are same , we can remove the repetation.
//         // this.setState({ movies });
//     }

//     render() {
//         const { length: count } = this.state.movies;

//         if (count === 0)
//             return <p>There are no movies in the database</p>;

//         // if (this.state.movies.length === 0)
//         //     return <p>There are no movies in the database</p>;
//         return (
//             <React.Fragment>
//                 {/* // go to index.css for padding */}
//             {/* <p>Showing {this.state.movies.length} movies in the databse.</p> */}
//             <p>Showing {count} movies in the databse.</p>

//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Genre</th>
//                         <th>Stock</th>
//                         <th>Rate</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.movies.map(movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         {/* <td><button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button></td> */}
//                         <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </React.Fragment>
//          );
//     }
// }

// export default Movies;

// 4th (Like reusable component)
// import React, { Component } from 'react';
// import Like from './common/like';
// import { getMovies} from '../services/fakeMovieService';

// class Movies extends Component {
//     state = {
//         movies: getMovies()
//      }

//     handleDelete = (movie) => {
//         // console.log(movie);
//         const movies = this.state.movies.filter(m => m._id !== movie._id)

//         this.setState({movies: movies});
//     }

//     // handleLike = () => {
//     //     console.log("Like Clicked");
//     // }

//     // handleLike = (movie) => {
//     //     console.log("Like Clicked", movie);
//     // }

//     handleLike = movie => {
//         const movies = [...this.state.movies];
//         const index = movies.indexOf(movie);
//         movies[index] = { ...movies[index] };
//         movies[index].liked = !movies[index].liked;
//         this.setState({ movies });
//     }

//     render() {
//         const { length: count } = this.state.movies;

//         if (count === 0)
//             return <p>There are no movies in the database</p>;
//         return (
//             <React.Fragment>
//             <p>Showing {count} movies in the databse.</p>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Genre</th>
//                         <th>Stock</th>
//                         <th>Rate</th>
//                         <th />
//                         <th />
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.movies.map(movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         {/* <td> <Like liked={false}/> </td> */}
//                         {/* <td> <Like liked={movie.liked} /> </td> */}
//                         {/* <td> <Like liked={movie.liked} onClick={this.handleLike}/> </td> */}
//                         <td> <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/> </td>
//                         <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </React.Fragment>
//          );
//     }
// }

// export default Movies;

// 5th ( Pagination - component interface)
// import React, { Component } from 'react';
// import Like from './common/like';
// import Pagination from './common/pagination';
// import { getMovies} from '../services/fakeMovieService';

// class Movies extends Component {
//     state = {
//         movies: getMovies(),
//         pageSize: 4,
//      }

//     handleDelete = (movie) => {
//         const movies = this.state.movies.filter(m => m._id !== movie._id)

//         this.setState({movies: movies});
//     }

//     handleLike = movie => {
//         const movies = [...this.state.movies];
//         const index = movies.indexOf(movie);
//         movies[index] = { ...movies[index] };
//         movies[index].liked = !movies[index].liked;
//         this.setState({ movies });
//     }

//     handlePageChange = page => {
//         console.log(page);
//     };

//     render() {
//         const { length: count } = this.state.movies;

//         if (count === 0)
//             return <p>There are no movies in the database</p>;
//         return (
//             <React.Fragment>
//             <p>Showing {count} movies in the databse.</p>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Genre</th>
//                         <th>Stock</th>
//                         <th>Rate</th>
//                         <th />
//                         <th />
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.movies.map(movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         <td> <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/> </td>
//                         <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <Pagination
//             // itemsCount={this.state.movies.length}
//             itemsCount={count}
//             pageSize={this.state.pageSize}
//             // pageSize={10}
//             onPageChange={this.handlePageChange} />
//             </React.Fragment>
//          );
//     }
// }

// export default Movies;

// 6th
// Handling Page Changes
// import React, { Component } from 'react';
// import Like from './common/like';
// import Pagination from './common/pagination';
// import { getMovies} from '../services/fakeMovieService';
// import {paginate} from '../utils/paginate'

// class Movies extends Component {
//     state = {
//         movies: getMovies(),
//         currentPage: 1,
//         pageSize: 4,
//      }

//     handleDelete = (movie) => {
//         const movies = this.state.movies.filter(m => m._id !== movie._id)

//         this.setState({movies: movies});
//     }

//     handleLike = movie => {
//         const movies = [...this.state.movies];
//         const index = movies.indexOf(movie);
//         movies[index] = { ...movies[index] };
//         movies[index].liked = !movies[index].liked;
//         this.setState({ movies });
//     }

//     handlePageChange = page => {
//         // console.log(page);
//         this.setState({ currentPage: page });
//     };

//     render() {
//         const { length: count } = this.state.movies;
//         // const { pageSize, currentPage } = this.state;
//         // const { pageSize, currentPage, movies } = this.state;
//         const { pageSize, currentPage, movies: allMovies } = this.state;
//         if (count === 0)
//             return <p>There are no movies in the database</p>;
//         // const movies = paginate(this.state.movies);
//         // const movies = paginate(movies);
//         // const movies = paginate(movies, currentPage, pageSize);
//         const movies = paginate(allMovies, currentPage, pageSize);

//         return (
//             <React.Fragment>
//             <p>Showing {count} movies in the databse.</p>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Genre</th>
//                         <th>Stock</th>
//                         <th>Rate</th>
//                         <th />
//                         <th />
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* {this.state.movies.map(movie => ( */}
//                     {movies.map (movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         <td> <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/> </td>
//                         <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {/* <Pagination
//             itemsCount={count}
//             pageSize={this.state.pageSize}
//             currentPage={this.state.currentPage}
//             onPageChange={this.handlePageChange} /> */}
//             <Pagination
//             itemsCount={count}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange} />
//             </React.Fragment>
//          );
//     }
// }

// export default Movies;

// 7th
// FILTERING COMPONENT INTERFACE
// import React, { Component } from 'react';
// import Like from './common/like';
// import ListGroup from "./common/listGroup";
// import Pagination from './common/pagination';
// import { getMovies} from '../services/fakeMovieService';
// import { getGenres } from "../services/fakeGenreService";
// import {paginate} from '../utils/paginate'

// class Movies extends Component {
//     state = {
//         // movies: getMovies(),
//         movies: [],
//         currentPage: 1,
//         genres: [],
//         pageSize: 4,
//         selectedGenre: null,
//      }

//      componentDidMount() {
//         const genres = [{ name: "All Genres" }, ...getGenres()];
//         // this.setState({ movies: getMovies(), genres: getGenres() });
//         this.setState({ movies: getMovies(), genres: genres });
//       }

//     handleDelete = (movie) => {
//         const movies = this.state.movies.filter(m => m._id !== movie._id)

//         this.setState({movies: movies});
//     }

//     handleLike = movie => {
//         const movies = [...this.state.movies];
//         const index = movies.indexOf(movie);
//         movies[index] = { ...movies[index] };
//         movies[index].liked = !movies[index].liked;
//         this.setState({ movies });
//     }

//     handlePageChange = page => {
//         this.setState({ currentPage: page });
//     };

//     handleGenreSelect = genre => {
//         // console.log(genre);
//         // this.setState({ selectedGenre: genre});
//         this.setState({ selectedGenre: genre, currentPage: 1 });
//     };

//     render() {
//         const { length: count } = this.state.movies;
//         // const { pageSize, currentPage, movies: allMovies } = this.state;
//         const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;
//         if (count === 0)
//             return <p>There are no movies in the database</p>

//         // we have to apply filter before paginating.
//         // const filtered = selectedGenre ? allMovies.filter(m =>
//         //     m.genre._id === selectedGenre._id) : allMovies;

//         // if both are truthy
//         const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m =>
//             m.genre._id === selectedGenre._id) : allMovies;

//         // const movies = paginate(allMovies, currentPage, pageSize);
//         const movies = paginate(filtered, currentPage, pageSize);

//         return (
//             // <React.Fragment>
//             <div className="row">
//               {/* <div className="col-2"> */}
//               <div className="col-3">
//               <ListGroup
//             items={this.state.genres}
//             onItemSelect={this.handleGenreSelect}
//             selectedItem={this.state.selectedGenre}
//             // textProperty="name"
//             // valueProperty="_id"
//           />
//               </div>
//               <div className="col">
//               {/* <p>Showing {count} movies in the databse.</p> */}
//               <p>Showing {filtered.length} movies in the databse.</p>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Genre</th>
//                         <th>Stock</th>
//                         <th>Rate</th>
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
//                         <td> <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/> </td>
//                         <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <Pagination
//             // itemsCount={count}
//             itemsCount={filtered.length}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange} />
//         </div>

//         </div>
//             // </React.Fragment>
//          );
//     }
// }

// export default Movies;

// 8th
// SORTING - EXTRACTING MOVIES TABLE
import React, { Component } from "react";
// import Like from './common/like';
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./SearchBox";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//import deleteMovie
class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    genres: [],
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    // const genres = [{ name: "All Genres" }, ...getGenres()];
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id != movie.id);
    //const movies = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({ movies: movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("this movie has been deleted ");
      this.setState({ movies: originalMovies });
    }
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  // handleGenreSelect = (genre) => {
  //   this.setState({ selectedGenre: genre, currentPage: 1 });
  // };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  // handleSort = path => {
  //     // console.log(path);

  //     // this.setState({ sortColumn: { path: path, order: 'asc' } })

  //     // const sortColumn = {...this.state.sortColumn};
  //     // if (sortColumn.path === path)
  //     //     sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //     // else {
  //     //     sortColumn.path = path ;
  //     //     sortColumn.order = "asc";
  //     // }
  //     this.setState({ sortColumn });
  // }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  // getPagedData = () => {
  //   const {
  //     pageSize,
  //     currentPage,
  //     sortColumn,
  //     selectedGenre,
  //     movies: allMovies,
  //   } = this.state;

  //   const filtered =
  //     selectedGenre && selectedGenre._id
  //       ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
  //       : allMovies;

  //   const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  //   const movies = paginate(sorted, currentPage, pageSize);

  //   return { totalCount: filtered.length, data: movies };
  // };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  // render() {
  // const { length: count } =
  // this.state.movies;
  // const { pageSize, currentPage,
  // sortColumn, searchQuery } =
  // this.state;
  render() {
    const { length: count } = this.state.movies;
    const { user } = this.props;

    // const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;
    // const { pageSize, currentPage, sortColumn } = this.state;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;

    // const result = this.getPagedData();
    // const {totalCount, data} = this.getPagedData();
    const { totalCount, data: movies } = this.getPagedData();

    // const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m =>
    //     m.genre._id === selectedGenre._id) : allMovies;

    // const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // // const movies = paginate(filtered, currentPage, pageSize);

    // const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>

        <div className="col">
          {user && (
            <Link
              to="/movies/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
          )}
          <p>Showing {totalCount} movies in the databse.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          {/* <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {movies.map (movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td> <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/> </td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table> */}
          <Pagination
            // itemsCount={filtered.length}
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
