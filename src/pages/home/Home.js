import listIcon from '../../pictures/icons/listIcon.svg';
import mapIcon from '../../pictures/icons/mapIcon.svg';
import userIcon from '../../pictures/icons/userIcon.svg';


import React from "react";
import { NearestCoffeSlider, EconomicalSlider, DenjSlider, OfferSlider, HomeSkeleton, ShowMoreHome, FilterButtonSlider } from "../../components";
import { MoreContext } from "../../contexts/more_context";

import Badge from '@mui/material/Badge';

export const Home = () => {
  const { loading } = React.useContext(MoreContext);

  if (loading) {
    return (
      <HomeSkeleton />
    );
  } 
  
  else {
    return (
      <main>
        <section className="home">
          <section className="head pt-4 d-flex justify-content-around align-items-center text-center">
            <div>
              <Badge badgeContent={1} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: '#f54749' } }}>
                <img src={listIcon} alt="" />
              </Badge>
            </div>
            <div>
              <p className="mb-1 fw-bold">مازندران/ بابل/ شهرک بهزاد...</p>
              <img src={mapIcon} alt="" />
            </div>
            <div>
              <Badge badgeContent={3} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: '#f54749' } }}>
                <img src={userIcon} alt="" />
              </Badge>
            </div>
          </section>

          {/* filter buttons slider */}
          <section className="pt-4 px-3">
            <FilterButtonSlider />
          </section>
          {/* filter buttons slider */}

          {/* nearest coffe slider */}
          <section className="px-3 ps-0">
            <NearestCoffeSlider />
          </section>
          {/* nearest coffe slider */}


          {/* Economical coffe slider */}
          <section className="pe-3 ps-0">
            <EconomicalSlider />
          </section>
          {/* Economical coffe slider */}


          {/* denj coffe slider */}
          <section className="pe-3 ps-0">
            <DenjSlider />
          </section>
          {/* denj coffe slider */}


          {/* off coffe slider */}
          <section className="pe-3 ps-0">
            <OfferSlider />
          </section>
          {/* off coffe slider */}

          {/* show moer */}
          <ShowMoreHome />
          {/* show moer */}
        </section>
      </main>
    );
  }
};
