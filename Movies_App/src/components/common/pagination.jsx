// import React from 'react';

// const Pagination = (props) => {
//     return null;
// }
 
// export default Pagination;

// 2nd
// nav>ul.pagination>li.page-item>a.page-link
// delete href, because, we are going to use onclick event.
// import React from 'react';
// import _ from 'lodash';

// const Pagination = (props) => {
//     // [1, 2, 3].map()
//     // [1 ... pagesCount].map()
//     const { itemsCount, pageSize } = props;
//     const pagesCount = itemsCount / pageSize;

//     return <nav>
//         <ul className="pagination">
//             <li className="page-item">
//                 <a href="" className="page-link">1</a>
//             </li>
//         </ul>
//     </nav>
// }
 
// export default Pagination;

// 3rd (implemting lodash)
// import React from 'react';
// import _ from 'lodash';

// const Pagination = (props) => {
//     const { itemsCount, pageSize } = props;

//     // const pagesCount = itemsCount / pageSize;
//     // const pages = _.range(1, pagesCount + 1);

//     // const pagesCount = itemsCount / pageSize;
//     // console.log(pagesCount);
//     // if (pagesCount === 1) return null;
//     // const pages = _.range(1, pagesCount + 1);

//     const pagesCount = Math.ceil(itemsCount / pageSize);
//     if (pagesCount === 1) return null;
//     const pages = _.range(1, pagesCount + 1);


//     return <nav>
//         <ul className="pagination">
//             {pages.map(page => (
//             <li key={page} className="page-item">
//                 <a className="page-link">{page}</a>
//             </li>
//             ))}
//         </ul>
//     </nav>
// }
 
// export default Pagination;

// 4th
// Handling page changes
import React from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';

const Pagination = (props) => {
    // const { itemsCount, pageSize, onPageChange } = props;
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    console.log(currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return <nav>
        <ul className="pagination">
            {pages.map(page => (
            <li key={page} 
            className={page === currentPage ? "page-item active" : "page-item"}>
                {/* <li key={page} 
            className="page-item"></li> */}
                <a className="page-link"
                // onClick={() => props.onPageChange(page)}
                onClick={() => onPageChange(page)}
                >{page}</a>
            </li>
            ))}
        </ul>
    </nav>
}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
 
export default Pagination;

// Final
// import React from "react";
// import PropTypes from "prop-types";
// import _ from "lodash";

// const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   if (pagesCount === 1) return null;
//   const pages = _.range(1, pagesCount + 1);

//   return (
//     <nav>
//       <ul className="pagination">
//         {pages.map(page => (
//           <li
//             key={page}
//             className={page === currentPage ? "page-item active" : "page-item"}
//           >
//             <a className="page-link" onClick={() => onPageChange(page)}>
//               {page}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired
// };

// export default Pagination;
