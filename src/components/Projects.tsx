import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info.js';
import { itemData } from './itemData';
import LazyLoad from 'react-lazy-load';
import React from 'react';

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
      color: '#6b4aff',
    },
    backgroundDark: {
      backgroundColor: '#3f3d56',
      marginTop: '30px'
    }
  }),
);

export const Projects = () => {
  const classes = useStyles();

  return (
    <div id="divProjects" className={classes.backgroundDark}>
      <h1 className="display-1 text-center text-white">Proyectos Ejecutados</h1>
      <div className={classes.root}>
        <ImageList id="divProjectsList" rowHeight={350} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" style={{ color: 'white' }}></ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem className="listProject" key={item.img}>
              <LazyLoad>
                <img id={item.id} src={item.img} alt={item.title} />
              </LazyLoad>
              <ImageListItemBar
                title={<a className='linkTitle' href={item.link}>{item.title}</a>}
                subtitle={<span>Hecho con: {item.author}</span>}
                actionIcon={
                  <IconButton target="_blank" href={item.link} aria-label={`info about ${item.title}`} className={classes.icon}>
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

