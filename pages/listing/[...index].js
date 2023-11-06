import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

import Header from "@components/header";
import Parker from "public/assets/parker.jpg";
import {
  allProductsCategory,
  getCategoryWiseProducts,
  getProductByOnlyId,
} from "Actions/action";
import styles from "styles/productbar.module.css";


import { useRouter } from "next/router";

const index = (props) => {
  let router = useRouter();

  console.log( props )
  const [data, setData] = useState({
    page_no:props.page_no,
    total_prd: props.total  ,  
    cat_name: props.cat_name,
    list: props.all_prd,
  });

  useEffect(() => {}, [  ] );

  const { cat_name: category_name } = data ;

  const getSelectedItem = async (model) => {
    try {
  
      let final_redirect_uri =
        "/product/" + model.cat_info._id + "/" + model.prd_id;
      console.log(final_redirect_uri);
      router.push(final_redirect_uri);

    } catch (err) {}
  };

  const paginate = (p_n)=>{

    const [cat_name, _id ] = router.query.index
    let final_url = "/listing/" + data.cat_name + "/" + _id +"/"+p_n;
    console.log(final_url)
    if (final_url) router.push(final_url);

    // (async function(){
    //   try{
    //     const [cat_name, _id ] = router.query.index
    //     let { result, status } = await getCategoryWiseProducts(_id, cat_name,p_n);
    //      setData({
    //        ...data , page_no:p_n , list:result.cat_wise_products
    //     })
    //   }catch(err){
         
    //     alert("some erro occured")
    //   }

    // })()

  }

  const [cat_name, _id , p_n ] = router.query.index
   
console.log(p_n)

  return (
    <>      
   
      <section className="py-5">
        <div className="container">
          <h3 className="mt-2 pb-5 text_black text-center fs-30">
            {props.cat_name}
          </h3>

          <div className="row mt-5">
          
            <div className="col-md-3 col-lg-2 mb-3">
{/* 
              <h3 className="fs-20 mt-4 text_black mb-4">Brand</h3>
              <div className="form-check mb-2">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="parker"
                />
                <label className="form-check-label fs-14" for="parker">
                  Parker <span className="text_lightgrey ">(20)</span>
                </label>
              </div>
              <div className="form-check mb-2 ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="waterman"
                />
                <label className="form-check-label fs-14" for="waterman">
                  Waterman <span className="text_lightgrey ">(20)</span>
                </label>
              </div>
              <div className="form-check mb-2 ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="luxor"
                />
                <label className="form-check-label fs-14" for="luxor">
                  Luxor Schneider <span className="text_lightgrey ">(20)</span>
                </label>
              </div> */}
            </div>



            
            <div className="col-md-8 col-lg-9 mb-3 px-md-4 px-lg-5">
              <ul
                className="nav nav-pills mb-3 border-bottom_black pb-1"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active border bg-transparent rounded-0"
                    id="pills-grid-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-grid"
                    type="button"
                    role="tab"
                    aria-controls="pills-grid"
                    aria-selected="true"
                  >
                    <i className="fa-solid fa-grip text_lightgrey"></i>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link border bg-transparent rounded-0"
                    id="pills-list-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-list"
                    type="button"
                    role="tab"
                    aria-controls="pills-list"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-list-ol text_lightgrey"></i>
                  </button>
                </li>
                   
                {/* navigation  */}

              {p_n && p_n>1 ?
                <ul className="pagination justify-content-center mx-1">
                  <li class="page-item disabled" style={{cursor:"pointer"}}>
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
              </ul> :""
               }
             

                 {   props.total ?  new Array( Math.ceil(props.total/20) ).fill(undefined).map((item, i)=>{
                       
                       
                    return <React.Fragment>
                   <ul className="pagination justify-content-center mx-1 " style={{cursor:"pointer"}}>
                    <li className="page-item" onClick={(e)=> paginate(i+1)  }>
                     <a className={` page-link ${(p_n==(i+1) || (p_n==undefined&& i==0) )?"active":""} `}   >
                    {i+1}</a>
                    
                    </li> 
                  </ul>
                   </React.Fragment>
                 }) :"" }

        {/* {
          p_n && p_n==Math.ceil(props.total/20) ?"": 
          <ul className="pagination justify-content-center mx-1">
          <li className="page-item" style={{cursor:"pointer"}}  > 
      <a className="page-link" onClick={()=> paginate(props.page_no?props.page_no+1:2 )   } >Next</a>
    </li>
    </ul>  
        }
                 */}
                  
                {/* <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                 
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul> */}





              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-grid"
                  role="tabpanel"
                  aria-labelledby="pills-grid-tab"
                >
                  <div className="row mt-4  ">
                    <div className="d-flex flex-wrap m-2">
                      {props.all_prd && props.all_prd.length > 0
                        ? props.all_prd.map((ele) => {
                            let image_file =
                              ele.root_folder_name && ele.file_name
                                ? process.env.NEXT_PUBLIC_BASE_URL +
                                  "/" +
                                  ele.root_folder_name +
                                  ele.file_name
                                : "";
                            return (
                              <>
                                <div
                                  className={`  col-lg-3 col-md-4  mb-3 ${styles["main_prd"]} ${styles['product-list']} `}
                                  onClick={() => {
                                    // console.log(ele)
                                    getSelectedItem({
                                      cat_info: {
                                        _id: ele._id,
                                        category: ele.category_type
                                          ? ele.category_type.category
                                          : ele.marker_category_type
                                          ? ele.marker_category_type
                                              .marker_category
                                          : ele.product_cat_type.name,
                                      },
                                      prd_id: ele.category_type
                                        ? ele.category_type._id
                                        : ele.marker_category_type
                                        ? ele.marker_category_type._id
                                        : ele.product_cat_type._id,
                                    });
                                  }}
                                >
                                  <div className="card shadow border-0 h-100 bg-transparent">
                                    <div className=" card-header border-0 bg-transparent p-3">
                                  <h3 className="fs-20 text_black fw-500">
                                        {" "}
                                        {ele.name}
                                      </h3>
                                      </div>
                                    <div className="card-body  d-flex flex-column justify-content-evenly">
                                      
                                      <div className="">
                                        <Image
                                          width={300}
                                          height={70}
                                          className="img-fluid min_height  h-100 position_static"
                                          src={
                                            image_file != ""
                                              ? image_file
                                              : Parker
                                          }
                                          alt="Products"
                                        />
                                      </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0">
                                      <p className="fs-14 text_black text-center">
                                        {ele.description.slice(0, 50) + "..."}
                                      </p>
                                
                                      <div className="d-flex my-4 justify-content-center gap-4">
                                        <button className="btn border-0">
                                          <i className=" fa-regular fa-bookmark fs-16 text_lightgrey"></i>
                                        </button>
                                        <button className="btn border-0">
                                          <i className=" fa-solid fa-cart-shopping fs-16 text_lightgrey"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })
                        : " No record found "}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-list"
                  role="tabpanel"
                  aria-labelledby="pills-list-tab"
                >
                  <div className="row mt-4">
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="card shadow border-0 h-100 bg-transparent">
                        <div className="card-body d-flex flex-row">
                          <div className="">
                            <Image
                              width={450}
                              height={350}
                              className="img-fluid"
                              src={Parker}
                              alt="Products"
                            />
                          </div>
                          <div className="">
                            <p className="fs-24 text_black ">
                              Parker Jotter Standard Ball Pen Blue Body Color...
                            </p>
                            <p className="fs-18 text_black  fw-600">₹300.00</p>
                            <p className="d-flex my-4 justify-content-start gap-4">
                              <button className="btn border-0">
                                <i className=" fa-regular fa-bookmark fs-18 text_lightgrey"></i>
                              </button>
                              <button className="btn border-0">
                                <i className=" fa-solid fa-cart-shopping fs-18 text_lightgrey"></i>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
        
     

    
    </>
  );
};

export async function getServerSideProps(context) {
 
  let {
    query,
    params: {
      index: [cat_name, _id , page_no ],
    },
  } = context;

  let { result, status } = await getCategoryWiseProducts(_id, cat_name,page_no?page_no:1);

  if (status && result.cat_wise_products.length > 0) {
    return {
      props: {
        total:result?.total,
        all_prd: result?.cat_wise_products,
        page_no:page_no?page_no:1,
        cat_name,
      },
    };
  }

  return {
    props: {
      all_prd: [],
      cat_name,
      // json: json.result
    },
  };
}

export default index;
