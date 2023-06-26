// test images
import search1 from "../../pictures/test/search1.png";
import search2 from "../../pictures/test/search2.png";
import search3 from "../../pictures/test/search3.png";

import searchIcon from "../../pictures/icons/searchIcon.svg"
import scanIcon from "../../pictures/icons/scanIcon.svg"
import { HiArrowLeft } from "react-icons/hi";

import React from "react";
import { FilterButtonSlider, SearchItem, SearchSkeleton, Drawer, Coffe } from "../../components";
import { MoreContext } from "../../contexts/more_context";
import { Link } from "react-router-dom";

export const Search = () => {
  const { loading } = React.useContext(MoreContext);

  if (loading) {
    return <SearchSkeleton />
  }

  else {
    return (
      <main>
        <section className="search px-4">
          <div className="position-relative d-flex justify-content-center align-items-center">
            <h5 className="page-title py-4">جست و جو</h5>
            <Link to="/home" className="back"><HiArrowLeft /></Link>
          </div>
          {/* search section */}
          <section className="search-section">
              <div className="search-box">
                  <input className="form-input form-control" type="text" placeholder="جست و جو کنید" />
                  <img src={searchIcon} alt="" />
              </div>
              <div className="scan-box"><img src={scanIcon} alt="" /></div>
          </section>
          {/* search section */}
          
          {/* filter buttons slider */}
          <section className="pt-3 mb-4">
            <FilterButtonSlider />
          </section>
          {/* filter buttons slider */}
  
          {/* search content */}
         <div className="row m-0">
          <SearchItem bg={search1} rate={4} name={"کافه رستوران دنج نشین"} foods={"فست فود ، پیتزا ، کنتاکی ، نوشیدنی گرم و..."} delivery={"8,000"} address={"مازندران/ بابل/روبه روی دانشگاه نوشیروانی ساختمان پولونیوم..."} />
          <SearchItem bg={search2} rate={3} name={"کباب سرای دنج نشین"} foods={"انواع کباب همراه با برنج و نان تازه"} delivery={"12,000"} address={"مازندران/ بابل/روبه روی دانشگاه نوشیروانی ساختمان پولونیوم..."} />
          <SearchItem bg={search3} rate={3} name={"کباب سرای دنج نشین"} foods={"انواع کباب همراه با برنج و نان تازه"} address={"مازندران/ بابل/روبه روی دانشگاه نوشیروانی ساختمان پولونیوم..."} />
         </div>
          {/* search content */}


        </section>
        {/* drawer */}
        <Drawer><Coffe /></Drawer>
        {/* drawer */}
      </main>
    );
  }
};
