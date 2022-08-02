// type imr
// import React from "react";
// // type sfc
// const ListGroup = () => {
//     return null;
// };

// export default ListGroup;

// 2nd
// import React from "react";

// const ListGroup = (props) => {
//     // const {items} = props;
//     const {items, textProperty, valueProperty} = props;

//     return (
//             <ul className="list-group">
//               {items.map(item => (
//                 <li
//                 //   key={item._id}
//                 key={item[valueProperty]}
//                   className={
//                     "list-group-item"
//                   }
//                 >
//                   {/* {item.name} */}
//                   {item[textProperty]}
//                 </li>
//               ))}
//             </ul>
//           );
// };

// export default ListGroup;


// 3rd
import React from "react";

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    return (
            <ul className="list-group">
              {items.map(item => (
                <li
                onClick={() => onItemSelect(item)}
                key={item[valueProperty]}
                className={
                    item === selectedItem ? "list-group-item active" : "list-group-item"
                  }
                >
                  {item[textProperty]}
                </li>
              ))}
            </ul>
          );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;

// FINAL
// import React from "react";

// const ListGroup = ({
//   items,
//   textProperty,
//   valueProperty,
//   selectedItem,
//   onItemSelect
// }) => {
//   return (
//     <ul className="list-group">
//       {items.map(item => (
//         <li
//           onClick={() => onItemSelect(item)}
//           key={item[valueProperty]}
        //   className={
        //     item === selectedItem ? "list-group-item active" : "list-group-item clickable"
        //   }
//         >
//           {item[textProperty]}
//         </li>
//       ))}
//     </ul>
//   );
// };

// ListGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id"
// };

// export default ListGroup;
