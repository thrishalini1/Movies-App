// import React, { Component } from "react";

// class TableBody extends Component {
  
//   render() {
//     const { data, columns } = this.props;

//     return (
//         // tbody>tr>td
//       <tbody>
//         {data.map(item => 
//           <tr>
//             {columns.map(column => <td> </td>)}
//           </tr>
//         )}
//       </tbody>
//     );
//   }
// }

// export default TableBody;

// 2nd
// import React, { Component } from "react";

// class TableBody extends Component {
  
//   render() {
//     const { data, columns } = this.props;

//     return (
//         // tbody>tr>td
//       <tbody>
//         {data.map(item => 
//           <tr>
//             {columns.map(column => <td> </td>)}
//           </tr>
//         )}
//       </tbody>
//     );
//   }
// }

// export default TableBody;

// 3rd
// import React, { Component } from "react";
// import _ from 'lodash';

// class TableBody extends Component {

//   renderCell = (item, column) => {
//     if (column.content) return column.content(item);

//     return _.get(item, column.path);
//   };
  
//   render() {
//     const { data, columns } = this.props;

//     return (
//         // tbody>tr>td
//       <tbody>
//         {data.map(item => 
//           <tr>
//             {/* {columns.map(column => <td>{item[column.path]}</td>)} */}
//             {/* {columns.map(column => <td>{_.get(item, column.path)}</td>)} */}
//             {columns.map(column => <td>{this.renderCell(item, column)}</td>)}
//           </tr>
//         )}
//       </tbody>
//     );
//   }
// }

// export default TableBody;


// 4th (FINAL)
import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
        // tbody>tr>td
      <tbody>
        {/* {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => 
              <td key={item._id + (column.path || column.key)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr> */}
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
