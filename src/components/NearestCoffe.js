import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F54749",
  },
  "& .MuiRating-iconEmpty": {
    color: "#F54749",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const NearestCoffe = ({bg, name, info, rate}) => {
  return (
    <section className="nearest" style={{backgroundImage: `url(${bg})`}}>
      <div>
        <section>
          <h5>{name}</h5>
          <p>{info}</p>
          <StyledRating
            name="customized-color"
            defaultValue={rate}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            size="small"
            readOnly
          />
        </section>
      </div>
    </section>
  );
};
