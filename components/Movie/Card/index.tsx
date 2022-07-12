import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  colors,
} from "@mui/material";
import StartIcon from "@mui/icons-material/Star";

import { Props } from "./types";

const MovieCard = (props: Props) => {
  const {
    movie: { image, title, rank, year, crew, imDbRating },
  } = props;

  const cover = image.replaceAll("128", "400").replaceAll("176", "560");

  return (
    <Card elevation={6}>
      <Grid flexDirection={{ xs: "column-reverse", sm: "row" }} container>
        <Grid
          item
          sm={7}
          sx={{ zIndex: 1, boxShadow: "-55px 54px 35px 105px #fff" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontWeight={900}
              minHeight={70}
              marginTop={2}
            >
              {title} ({year})
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <StartIcon color="warning" />
              <Typography component="span" fontWeight={900} marginLeft={1}>
                {imDbRating}
              </Typography>
            </Box>
            <Typography variant="caption" component="p" marginTop={2}>
              {crew}
            </Typography>
          </CardContent>
        </Grid>
        <Grid position="relative" sm={5} item>
          <Typography
            component="span"
            position="absolute"
            color="#fff"
            fontWeight={900}
            top={0}
            right={0}
            padding={1}
            sx={{ backgroundColor: colors.pink.A400 }}
          >
            #{rank}
          </Typography>
          <CardMedia component="img" height={300} image={cover} alt={title} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default MovieCard;
