import React, {useState} from "react";
import { MoreContext } from "../contexts/more_context";
import { Coffe } from "./Coffe";

export const DrawerSearch = () => {
  const { showMore, show_more } = React.useContext(MoreContext);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    if (isUpSwipe) {
      showMore("100vh", show_more.item);
    }
    if (isDownSwipe) {
      if (show_more.height === "100vh") showMore("70vh", show_more.item);
      else showMore(0);
    }
  };

  return (
    <section
      className="more"
      style={{ height: show_more.height }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="drawer-btn"><div></div></div>
      <Coffe />
    </section>
  );
};
