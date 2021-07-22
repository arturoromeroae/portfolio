import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info.js';
import { itemData } from './itemData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '',
    },
    imageList: {
      width: 'auto',
      height: 'auto',
    },
    icon: {
      color: 'rgba(205, 205, 25, 0.54)',
    },
  }),
);

export const Projects = () => {
  const classes = useStyles();

  return (
    <div className="mt-5 bg-info">
      <h1 className="display-1 text-center text-white">Projects</h1>
      <div className={classes.root}>
        <ImageList rowHeight={350} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" style={{ color: 'white' }}></ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>created with: {item.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

