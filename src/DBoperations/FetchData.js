// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:2000/")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
//   // data / fetch;
//   return (
//     <>
//       {/* <div>
//         <h1>Data from "alt" Table</h1>
//         {data.map((item) => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>Category: {item.category}</p>
//             <p>Price: {item.price}</p>
//             <p>Description: {item.desc}</p>
//             <img
//               src={`http://localhost:2000/${item.img}`}
//               alt={`http://localhost:2000/${item.img}`}
//             />
//           </div>
//         ))}
//       </div> */}

//       <div className="section-center">
//         {data.map((item) => {
//           // const { id, title, img, desc, price } = menuItem;
//           return (
//             <article key={item.id} className="menu-item">
//               <img
//                 src={`http://localhost:2000/${item.img}`}
//                 alt={item.title}
//                 className="photo"
//               />
//               <div className="item-info">
//                 <header>
//                   <h4>{item.title}</h4>
//                   <h4 className="price">${item.price}</h4>
//                 </header>
//                 <p className="item-text">{item.desc}</p>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default FetchData;
//latest up
import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:2000/data/fetch")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:2000/data/delete/${id}`)
      .then((response) => {
        console.log("Data deleted successfully!");
        fetchData(); // Fetch updated data after deletion
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="section-center">
      {data.map((item) => (
        <article key={item.id} className="menu-item">
          <img
            src={`http://localhost:2000/${item.img}`}
            alt={item.title}
            className="photo"
          />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">${item.price}</h4>
            </header>
            <p className="item-text">{item.desc}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FetchData;
// latest final
