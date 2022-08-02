// import React from 'react';
// import LoginForm from '../loginForm';
// const Input = ({type,name, label, value, onChange,error}) => {
//     return ( 
//         <div className="form-group">
//             <label htmlFor={name}>{label}</label>
//             <input
//               value={value}
//               onChange={onChange}
//               name={name}
//               id={name}
//               type={type}
//               className="form-control"
//             />
//            {error&& <div className="alert alert-danger">{error}</div>}
//            </div>
//      );
// };
 
// export default Input ;
// import React from 'react';

// const Input = ({ type, name, label, value, error, onChange}) => {
//     return ( 
//         <div className="form-group">
//             <label htmlFor={name}>{label}</label>
//             <input
//               value={value}
//               onChange={onChange}
//               name={name}
//               id={name}
//               // type="text"
//               type={type}
//               className="form-control"
//             />
//             {/* div.alert.alert-danger */}
//             {error && <div className="alert alert-dange">{error}</div>}
//           </div>
//      );
// };
 
// export default Input ;
import React from 'react';

const Input = ({ type, name, label, value, error, onChange}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
              value={value}
              onChange={onChange}
              name={name}
              id={name}
              // type="text"
              type={type}
              className="form-control"
            />
            {/* div.alert.alert-danger */}
            {error && <div className="alert alert-dange">{error}</div>}
          </div>
     );
};
 
export default Input ;

