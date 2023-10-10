import "./List.scss";
import Card from "../components/Card/Card";
import useFetched from "../hook/useFetched";
import { useState, useEffect } from "react";

const List = ({ data, filter, max, sort }) => {
  //  let updateData
  //  //filter by filter
  //   filter ? (updateData = data.filter(it => it.subCategories.includes(filter) )) : updateData = data
  // //filter by max
  // updateData =   updateData.filter(it=> it.newPrice < max)
  // //filter by price
  // updateData = sort === "asc" ?  updateData.sort((a,b)=>a.newPrice - b.newPrice) : updateData.sort((a,b)=>b.newPrice - a.newPrice) 
  const [update,setUp] = useState([])
  useEffect(()=>{
    const getUpdate = async ()=>
    {
      let update
        update =await filter.length > 0 ? data.filter(it => filter.some(iter => it.subCategories.includes(iter))) : data.filter(it=>it)
        //filter by max price
        update = await max !== 50 ? update.filter(it => it.newPrice < max)  : update
        //filter by asc or dsc
        update = await sort === "asc" ? update.sort((a,b)=>a.newPrice - b.newPrice ): update.sort((a,b)=>b.newPrice - a.newPrice )
        setUp(update)
    }
    getUpdate()
  },[filter,sort,max])
 
  console.log(max)
  return (
    <div className="list">
      {update?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;

// import "./List.scss";
// import Card from "../components/Card/Card";
// import useFetched from "../hook/useFetched";

// const List = ({ params, sort, max, filter }) => {
//   const { data, error, loading } = useFetched(
//     `/products?populate=*&[filters][categories][title][$eq]=${params}${filter.map(
//       (item) => `&[filters][sub_categories][title][$eq]=${item}`
//     )}&[filters][price][$lt]=${max}&sort=price:${sort}`
//   );
//    return (
//     <div className="list">
//       {error ? "something is wrong!" : loading ? "loading" : data.map((item) => (
//          <Card item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };
