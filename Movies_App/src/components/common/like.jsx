// import React, { Component } from 'react';

// // Input: liked: boolean
// // Output: onClick

// class Like extends Component {
//     // we dont need state delete it.
//     // state = {  }
//     render() { 
//         return ( <i class="fa fa-heart-o" aria-hidden="true"></i>  );
//     }
// }
 
// export default Like;

// // 2nd
// import React, { Component } from 'react';

// // Input: liked: boolean
// // Output: onClick

// class Like extends Component {
//     render() { 
//         let classes = "fa fa-heart";
//         if (!this.props.liked) classes += "-o"
//         return (
//           <i
//             className={classes}
//             aria-hidden="true"
//           />
//         );
//     }
// }
 
// export default Like;


// 3rd
// import React, { Component } from 'react';

// class Like extends Component {
//     render() { 
//         let classes = "fa fa-heart";
//         if (!this.props.liked) classes += "-o"
//         return (
//           <i 
//           // this is onClick event of the dom element and raise the custom event, that is also onClick event of the dom event, we could call this {this.props.onLikeToggle}, becuase dom event as well as our custom event happended to have the same name.
//             onClick={this.props.onClick}
//             className={classes}
//             aria-hidden="true"
//           />
//         );
//     }
// }
 
// export default Like;

// 5th
// import React, { Component } from 'react';

// class Like extends Component {
//     render() { 
//         let classes = "fa fa-heart";
//         if (!this.props.liked) classes += "-o"
//         return (
//           <i 
//           // this is onClick event of the dom element and raise the custom event, that is also onClick event of the dom event, we could call this {this.props.onLikeToggle}, becuase dom event as well as our custom event happended to have the same name.
//             onClick={this.props.onClick}
//             style={{ cursor: "pointer" }}
//             className={classes}
//             aria-hidden="true"
//           />
//         );
//     }
// }
 
// export default Like;

// 4th (converting to stateless function component)
import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
