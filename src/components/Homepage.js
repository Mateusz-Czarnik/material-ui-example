import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import logo from '../assets/logo.png'
import triangles from '../assets/triangles.svg'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import {AccountCircle, HelpOutline, NavigateBefore, NavigateNext} from '@material-ui/icons';
import ContainerFluid from "./ContainerFluid";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Link from "@material-ui/core/es/Link/Link";
import heroBg from '../assets/hero-bg.jpg'
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FilledInput from "@material-ui/core/FilledInput";
import TablePagination from "@material-ui/core/TablePagination";
import Hidden from "@material-ui/core/Hidden";

const numberOfResults = 12;
const UNSPLASH_ACCESS_KEY = 'c4072e632e948703675a05f2c42f62c78bc3ac1cfb0006626c5aacfee2f0f1e6';
const styles = theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '1em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.3)',
      outline: '1px solid slategrey'
    }
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  pageBackground: {
    backgroundImage: `url(${triangles})`,
    backgroundSize: 'cover',
    backgroundPosition: '7vw -7vw',
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    position: 'relative',
  },
  logo: {
    height: 26,
    marginRight: 'auto'
  },
  search: {
    position: 'relative',
    borderRadius: 200,
    backgroundColor: theme.palette.secondary.main,
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 6,
    color: theme.palette.common.white,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing.unit,
    paddingRight: 15,
    paddingBottom: theme.spacing.unit,
    paddingLeft: 40,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing.unit * 16,
    },
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  logout: {
    color: theme.palette.secondary.main,
    marginLeft: 26,
    cursor: 'pointer',
    flexShrink: 0,
  },
  heroUnit: {
    position: 'relative',
  },
  heroContent: {
    maxWidth: 760,
    padding: '80px 0 60px',
  },
  heroHeadline: {
    fontSize: 64,
    fontFamily: '"Merriweather Sans", serif',
    fontWeight: 'bold',
    lineHeight: '80px',
    marginBottom: 50
  },
  heroInputLabelText: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: theme.spacing.unit,
  },
  heroInputWrapper: {
    display: 'flex',
  },
  heroInputRoot: {
    width: '100%',
  },
  heroInputInput: {
    textIndent: theme.spacing.unit * 2,
  },
  heroInputIconButton: {
    padding: 6,
  },
  heroInputIconAvatar: {
    height: 36,
    width: 36,
    backgroundColor: theme.palette.primary.main,
  },
  heroBg: {
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  sectionHeading: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: '"Merriweather Sans", serif',
    margin: `${theme.spacing.defaultGutter}px 0`
  },
  searchResultsChipRoot: {
    marginRight: 10,
    [theme.breakpoints.up('md')]: {
      marginLeft: 10,
    },
  },
  searchResultsChipIcon: {
    color: theme.palette.common.white,
    fontSize: 20
  },
  searchResultsChipLabel: {
    color: theme.palette.common.white,
  },
  selectWrapper: {
    [theme.breakpoints.down(768)]: {
      flexWrap: 'nowrap',
      flexDirection: 'column',
    },
  },
  formControl: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    marginBottom: 20,
    minWidth: 120,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up(768)]: {
      marginLeft: 20,
    },
  },
  formControlLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
  selectSelect: {
    height: 'auto',
    padding: 0,
    '&:focus': {
      backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.up('sm')]: {
      width: 170,
    },
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  },
  filledInput: {
    backgroundColor: theme.palette.common.white,
    '&:before,&:after': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    }
  },
  card: {
    height: '100%',
    display:
      'flex',
    flexDirection:
      'column',
  },
  cardHeading: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
    fontSize: 20,
    fontWeight: 'bolder',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  paginationWrapper: {
    marginTop: theme.spacing.unit * 6
  },
  paginationCaption: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  recommendedScrollableContainerWrapper: {
    position: 'relative',
  },
  recommendedScrollableContainerButton: {
    position: 'absolute',
    top: '50%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  recommendedScrollableContainerButtonLeft: {
    left: -40
  },
  recommendedScrollableContainerButtonRight: {
    right: -40
  },
  recommendedScrollableContainer: {
    marginBottom: 20,
    overflowX: 'auto',
  },
  recommendedGridItem: {
    flexShrink: 0,
    maxWidth: '100%',
  },
  recommendedScrollableContainerAvatar: {
    height: 56,
    width: 56,
    backgroundColor: theme.palette.common.white,
  },
  footerWrapper: {
    padding: '14px 0',
    background: '#FAFAFA',
  },
  footerCopyright: {
    fontSize: 14,
    color: theme.palette.footer.copyright
  },
});

class Homepage extends Component {

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_KEY}&per_page=${numberOfResults}`)
      .then(res => res.json())
      .then(data => this.setState({unsplashImages: data}))
      .catch(err => console.log('Error happened during fetching!', err));
  }

  state = {
    age: '12',
    activityType: 'all',
    location: 'Warsaw',
    unsplashImages: []
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.pageBackground}>
        <CssBaseline/>

        <AppBar position="static" className={classes.appBar}>
          <ContainerFluid maxWidth={1440} className={classes.container}>
            <Toolbar disableGutters>
              <img src={logo} alt="Logo" className={classes.logo}/>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon/>
                </div>
                <Hidden smDown>
                  <InputBase
                    placeholder="SZUKAJ ZAJĘĆ"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </Hidden>
              </div>
              <Hidden smUp>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                  <MenuIcon/>
                </IconButton>
              </Hidden>
              <Hidden xsDown>
                <IconButton aria-label="Help">
                  <HelpOutline color={"secondary"}/>
                </IconButton>
                <IconButton aria-label="Profile">
                  <AccountCircle color={"primary"} fontSize={"small"}/>
                </IconButton>
                <Link
                  color={"secondary"}
                  onClick={() => {
                    alert("Logged out.");
                  }}
                  aria-label="Logout"
                  className={classes.logout}
                >Wyloguj się</Link>
              </Hidden>
            </Toolbar>
          </ContainerFluid>
        </AppBar>

        <main>
          <div className={classes.heroUnit}>
            <ContainerFluid maxWidth={1440} className={classes.container}>
              <div className={classes.heroContent}>
                <Typography
                  component="h2"
                  variant={"h2"}
                  align="left"
                  color="textPrimary"
                  className={classes.heroHeadline}
                >
                  Zajęcia dla dzieci <br/>
                  w całej Polsce
                </Typography>
                <InputLabel>
                  <Typography className={classes.heroInputLabelText}>
                    Przeszukaj zajęcia
                  </Typography>
                  <Paper className={classes.heroInputWrapper} elevation={1}>
                    <InputBase
                      placeholder="Wpisz miejscowość lub nazwę zajęć"
                      classes={{
                        root: classes.heroInputRoot,
                        input: classes.heroInputInput,
                      }}
                    />
                    <IconButton className={classes.heroInputIconButton} aria-label="Search">
                      <Avatar className={classes.heroInputIconAvatar}>
                        <SearchIcon/>
                      </Avatar>
                    </IconButton>
                  </Paper>
                </InputLabel>
              </div>
            </ContainerFluid>
            <div className={classes.heroBg}/>
          </div>

          <ContainerFluid maxWidth={1440} className={classes.container}>
            <Typography
              component="h3"
              className={classes.sectionHeading}
            >
              Wyniki wyszukiwania dla
              <Hidden mdUp>
                <br/>
              </Hidden>
              <Chip
                classes={{
                  root: classes.searchResultsChipRoot,
                  deleteIcon: classes.searchResultsChipIcon,
                  label: classes.searchResultsChipLabel,
                }}
                color="primary"
                label={"warszawa"}
                onDelete={() => alert('You clicked delete.')}
              />
              <Chip
                classes={{
                  root: classes.searchResultsChipRoot,
                  deleteIcon: classes.searchResultsChipIcon,
                  label: classes.searchResultsChipLabel,
                }}
                color="primary"
                label={"skrzypce"}
                onDelete={() => alert('You clicked delete.')}
              />
            </Typography>
            <Grid
              container
              justify="flex-end"
              className={classes.selectWrapper}
            >
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel className={classes.formControlLabel} htmlFor="filled-age-native-simple">Wiek
                  dziecka</InputLabel>
                <Select
                  classes={{
                    select: classes.selectSelect
                  }}
                  native
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  input={<FilledInput className={classes.filledInput} name="age" id="filled-age-native-simple"/>}
                >
                  <option value=""/>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel className={classes.formControlLabel} htmlFor="filled-activity-type-native-simple">Typ
                  zajęć</InputLabel>
                <Select
                  classes={{
                    select: classes.selectSelect
                  }}
                  native
                  value={this.state.activityType}
                  onChange={this.handleChange('activityType')}
                  input={<FilledInput className={classes.filledInput} name="activityType"
                                      id="filled-activity-type-native-simple"/>}
                >
                  <option value="all">Wszystkie</option>
                  <option value="football">Piłka nożna</option>
                  <option value="piano">Pianino</option>
                  <option value="violin">Skrzypce</option>
                </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel className={classes.formControlLabel}
                            htmlFor="filled-location-native-simple">Lokalizacja</InputLabel>
                <Select
                  classes={{
                    select: classes.selectSelect
                  }}
                  native
                  value={this.state.location}
                  onChange={this.handleChange('location')}
                  input={<FilledInput className={classes.filledInput} name="location"
                                      id="filled-location-native-simple"/>}
                >
                  <option value=""/>
                  <option value="Warsaw">Warszawa</option>
                  <option value="Cracow">Kraków</option>
                  <option value="Poznan">Poznań</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={24}>
              {this.state.unsplashImages.map(item => (
                <Grid item key={item.id} sm={6} md={4}>
                  <Card className={classes.card}>
                    <Grid container justify="space-between" wrap="nowrap">
                      <Grid item>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.cardHeading}>
                          Nauka gry na skrzypcach
                        </Typography>
                        <CardActions>
                          <Button size="small" color="primary">
                            Warszawa
                          </Button>
                          <Button size="small" color="secondary">
                            Muzyka
                          </Button>
                        </CardActions>
                      </Grid>
                      <Grid item style={{flexShrink: 0}}>
                        <Typography
                          variant="h5"
                          component="h2"
                          className={classes.cardHeading}
                          style={{marginBottom: 0}}
                        >
                          30 zł
                        </Typography>
                        <Typography component="span">za zajęcia</Typography>
                      </Grid>
                    </Grid>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.urls.small}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus tellus, sed pretium
                        nisl porttitor feugiat. In sagittis malesuada orci, dictum vulputate lacus congue eu. Morbi
                        porta velit lorem, eget bibendum purus faucibus nec. Praesent sem tortor, suscipit ac euismod
                        non, porttitor sed leo.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Paper className={classes.paginationWrapper}>
              <TablePagination
                classes={{
                  caption: classes.paginationCaption
                }}
                component="div"
                rowsPerPageOptions={[10, 15, 30]}
                colSpan={3}
                count={93}
                rowsPerPage={15}
                page={0}
                labelRowsPerPage={"Wyników na stronę"}
                SelectProps={{
                  native: true,
                }}
                onChangePage={() => {
                }}
              />
            </Paper>
          </ContainerFluid>

          <ContainerFluid maxWidth={1440} className={classes.container}>
            <Typography
              component="h3"
              className={classes.sectionHeading}
            >
              Polecane
            </Typography>
            <div className={classes.recommendedScrollableContainerWrapper}>
              <IconButton
                className={`
                  ${classes.recommendedScrollableContainerButton}
                  ${classes.recommendedScrollableContainerButtonLeft}
                `}
                aria-label="Navigate before"
              >
                <Avatar className={classes.recommendedScrollableContainerAvatar}>
                  <NavigateBefore color={"primary"}/>
                </Avatar>
              </IconButton>
              <Grid
                container
                wrap={"nowrap"}
                spacing={24}
                className={classes.recommendedScrollableContainer}
              >
                {this.state.unsplashImages.map(item => (
                  <Grid item key={item.id} sm={6} md={4} className={classes.recommendedGridItem}>
                    <Card className={classes.card}>
                      <Grid container justify="space-between" wrap="nowrap">
                        <Grid item>
                          <Typography gutterBottom variant="h5" component="h2" className={classes.cardHeading}>
                            Nauka gry na skrzypcach
                          </Typography>
                          <CardActions>
                            <Button size="small" color="primary">
                              Warszawa
                            </Button>
                            <Button size="small" color="secondary">
                              Muzyka
                            </Button>
                          </CardActions>
                        </Grid>
                        <Grid item style={{flexShrink: 0}}>
                          <Typography
                            variant="h5"
                            component="h2"
                            className={classes.cardHeading}
                            style={{marginBottom: 0}}
                          >
                            30 zł
                          </Typography>
                          <Typography component="span">za zajęcia</Typography>
                        </Grid>
                      </Grid>
                      <CardMedia
                        className={classes.cardMedia}
                        image={item.urls.small}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tellus tellus, sed
                          pretium
                          nisl porttitor feugiat. In sagittis malesuada orci, dictum vulputate lacus congue eu. Morbi
                          porta velit lorem, eget bibendum purus faucibus nec. Praesent sem tortor, suscipit ac euismod
                          non, porttitor sed leo.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <IconButton
                className={`
                  ${classes.recommendedScrollableContainerButton}
                  ${classes.recommendedScrollableContainerButtonRight}
                `}
                aria-label="Navigate next"
              >
                <Avatar className={classes.recommendedScrollableContainerAvatar}>
                  <NavigateNext color={"primary"}/>
                </Avatar>
              </IconButton>
            </div>
          </ContainerFluid>

        </main>
        <footer>
          <Paper className={classes.footerWrapper} square>
            <ContainerFluid maxWidth={1440} className={classes.container} style={{display: 'flex'}}>
              <Typography className={classes.footerCopyright} component="small" inline>
                &copy; Copyright 2018 <Hidden xsDown>Wszelkie prawa zastrzeżone</Hidden>
              </Typography>
              <Typography component="span" inline style={{marginLeft: 'auto'}}>
                made in <b>Promate</b>
              </Typography>
            </ContainerFluid>
          </Paper>
        </footer>
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles)
)(Homepage);
