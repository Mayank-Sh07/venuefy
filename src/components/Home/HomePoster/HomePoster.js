import React from "react";
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posterContainer: {
    width: "100%",
    height: "520px",
    backgroundColor: "red",
    [theme.breakpoints.down("sm")]: {
      height: "420px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "620px",
    },
    backgroundImage: `url("imgs/Promotion.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  poster: {
    borderRadius: "2.5em",
    border: "2px solid white",
    backgroundColor: "rgba(255,255,255,0.85)",
    padding: "20px",
    height: "400px",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
    },
  },
  // title: {
  //   padding: "20px 0px",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: "10px",
  //   },
  // },
  // subTitle: {
  //   padding: "15px 60px",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: "5px 40px",
  //   },
  // },
  exploreBtn: {
    margin: "15px",
    backgroundColor: theme.palette.primary.dark,
    color: "#FFFFFF",
    borderRadius: "2em",
    padding: "8px 12px",
    [theme.breakpoints.only("sm")]: {
      margin: "5px",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  largeOnly: {
    [theme.breakpoints.up("lg")]: {
      padding: "60px 70px",
    },
  },
}));

function HomePoster() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.posterContainer} maxWidth={null}>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={0} sm={4} />
          <Grid item xs={0} sm={3} />
          <Grid item xs={12} sm={5}>
            <Paper className={classes.poster}>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
                className={classes.largeOnly}
              >
                <Grid item>
                  <Typography variant='h2' style={{ paddingTop: "50px" }}>
                    Book Now
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h5'
                    align='center'
                    style={{ padding: "10px" }}
                  >
                    discounts on pre-booking
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>Banquets</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>Resorts</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>Vendors</Typography>
                </Grid>
                <Grid item>
                  <Button size='large' className={classes.exploreBtn}>
                    Explore
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePoster;
