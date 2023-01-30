import authFetch from "../axios";
import { getZonesFailure,getZonesStart,getZonesSuccess,getStateFailure,getStateStart,getStateSuccess ,getRegFailure,getRegStart,getRegSuccess,getLgaFailure,getLgaStart,getLgaSuccess,getCenterFailure,getCenterStart,getCenterSuccess,getOptionFailure,getOptionStart,getSexOptionSuccess,getTypeOptionSuccess,getOrderOptionSuccess,getPlaceOptionSuccess,getSingleRegFailure,getSingleRegStart,getSingleRegSuccess } from "./birthSlice";
// import nc from "../assets/images/nc.png"
// import ne from "../assets/images/nc.png"
// import nw from "../assets/images/nc.png"
// import se from "../assets/images/nc.png"
// import ss from "../assets/images/nc.png"
// import sw from "../assets/images/nc.png"
// import { Dispatch } from "react";
// import { dataOptions } from "../utils";
import { dataOptions } from "../utils";
export const getZones=async(dispatch)=>{
    dispatch(getZonesStart());
    try {
      const res = await authFetch.get("birth-registration/stats/birth-reg-by-geozone");
      const newRes=res.data.map((it,i)=>{
if(it.Geo_Zone_Name ==='North-Central'){
return {...it,img:'/assets/img/nc.png'}
}
if(it.Geo_Zone_Name ==='South-East'){
    return {...it,img:'/assets/img/se.png'}
    }
    if(it.Geo_Zone_Name ==='North-East'){
        return {...it,img:'/assets/img/ne.png'}
        }
        if(it.Geo_Zone_Name ==='North-West'){
            return {...it,img:'/assets/img/nw.png'}
            }
            if(it.Geo_Zone_Name ==='South-South'){
                return {...it,img:'/assets/img/ss.png'}
                }
                if(it.Geo_Zone_Name ==='South-West'){
                    return {...it,img:'/assets/img/sw.png'}
                    }
return it;

      })
      dispatch(getZonesSuccess(newRes));
    } catch (error) {
      dispatch(getZonesFailure());
    console.log(error)
    }
    // clearAlert(dispatch);

}


export const getStates=async(dispatch,id)=>{
    dispatch(getStateStart());
    try {
      const res = await authFetch.get(`birth-registration/stats/birth-reg-by-states/${id}`);

      dispatch(getStateSuccess(res.data));
    } catch (error) {
      dispatch(getStateFailure());
    console.log(error)
    }
    // clearAlert(dispatch);

}


export const getLgas=async(dispatch,id)=>{
  dispatch(getLgaStart());
  try {
    const res = await authFetch.get(`birth-registration/stats/birth-reg-by-lga/${id}`);

    dispatch(getLgaSuccess(res.data));
  } catch (error) {
    dispatch(getLgaFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getCenters=async(dispatch,id)=>{
  dispatch(getCenterStart());
  try {
    const res = await authFetch.get(`birth-registration/stats/birth-reg-by-centre/${id}`);

    dispatch(getCenterSuccess(res.data));
  } catch (error) {
    dispatch(getCenterFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getRegz=async(dispatch,
    search,
    result_per_page,
    page,
    stateId,
            lgaId,
           centerId,
    Sex,
    Age,
    BirthType,
    BirthOrder,
    BirthPlace
    )=>{
    dispatch(getRegStart());
    // console.log(search,
    //     result_per_page,
    //     page,
    //     stateId,
    //         lgaId,
    //        centerId,
    //     Sex,
    //     Age,
    //     BirthType,
    //     BirthOrder,
    //     BirthPlace)
    const data = {
            search: search,
            result_per_page: result_per_page,
            page:  page,
            StateID: stateId,
            LGAID: lgaId,
            CenterId: centerId,
            Sex: Sex,
            Age:  Age,
            BirthType: BirthType,
            BirthOrder: BirthOrder,
            BirthPlace: BirthPlace  
    }
    try {
      const res = await authFetch.get(`birth-registration/`,{
        params: data
      });
//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "search": "",
//   "result_per_page": 20,
//   "page": 1,
//   "StateID": 14,
//   "LGAID": null,
//   "CenterId": null,
//   "Sex": null,
//   "Age": null,
//   "BirthType": null,
//   "BirthOrder": null,
//   "BirthPlace": null
// });

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: data,
//   redirect: 'follow'
// };

// fetch("https://npc-api.dsaved.com/v0/birth-registration", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

      dispatch(getRegSuccess(res.data));
      console.log(res.data)
    } catch (error) {
      dispatch(getRegFailure());
    console.log(error)
    }
    // clearAlert(dispatch);

}








export const getRegs=async(dispatch,id)=>{
  dispatch(getSingleRegStart());
  try {
    const res = await authFetch.get(`birth-registration/${id}`);
    dispatch(getSingleRegSuccess(res.data.data));
    // console.log(res.data.data)
  } catch (error) {

    dispatch(getSingleRegFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}







export const getGender = (g)=>{
let res;
   const ans= dataOptions.gender.filter(item=>g === item.Gender_ID);
res = ans[0].Gender;
// console.log(res);
return res;
}

export const getOrder=(order)=>{
    let res;
    const ans= dataOptions.birthOrder.filter(item=>order === item.Birth_Order);
 res = ans[0].Desc;
//  console.log(res);
 return res;

}

export const getType=(type)=>{
    
}

export const getPlace=(place)=>{
  let res;
  const ans= dataOptions.birthPlace.filter(item=>place === item.BirthPlace_ID);
  // console.log(ans)
res = ans[0].BirthPlace_Desc;
return res;
  
}

export const getSex=async(dispatch)=>{
  dispatch(getOptionStart());
  try {
    await Promise.allSettled([
      authFetch.get(`option/sex`),
      authFetch.get(`option/birth-type`),
      authFetch.get(`option/birth-order`),
      authFetch.get(`option/birth-place`),
    ])
      .then((results) => {
        // const [repos, followers] = results;
        const status = 'fulfilled';
        if (results[0].status === status) {
          const newRes = results[0].value.data.map((item,i)=>{
  
return {label: item.Gender, value: item.Gender_ID}
});
    dispatch(getSexOptionSuccess(newRes));
        }
        if (results[1].status === status) {
          const newRes = results[1].value.data.map((item,i)=>{
  
return {label: item.Description, value: item.Birth_Type_ID}
});
    dispatch(getTypeOptionSuccess(newRes));
        }
        if (results[2].status === status) {
          const newRes = results[2].value.data.map((item,i)=>{
  
return {label: item.Desc, value: item.Birth_Order_ID}
});
    dispatch(getOrderOptionSuccess(newRes));
        }
        if (results[3].status === status) {
          const newRes = results[3].value.data.map((item,i)=>{
  
return {label: item.BirthPlace_Desc , value: item.BirthPlace_ID}
});
    dispatch(getPlaceOptionSuccess(newRes));
        }
        // console.log(results);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    dispatch(getOptionFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}