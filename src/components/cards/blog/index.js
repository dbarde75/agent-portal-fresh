import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
// import ShareIcon from '@mui/icons-material/Share';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { makeStyles } from '@mui/styles';
// import IconButton from 'components/@extended/IconButton';
// import ButtonComponent from '../../button/Index'
const useStyles = makeStyles({
  img: {
    borderRadius: 0,
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
  },
  marginBottom: {
    marginBottom: '16px',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: '8px',
  },
});

export default function Index({ title, content, author, lastUpdated, imgSrc }) {
  const classes = useStyles()
  return (
    <Card>
      <img className={`${classes.img} card-img rounded-0 img-fluid`} src={imgSrc} alt="Card cap" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={classes.marginBottom}>
          Last updated {lastUpdated}
        </Typography>
        <Typography variant="h5" component="div" className={classes.marginBottom}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={classes.marginBottom}>
          {content}
        </Typography>
        <div className={classes.flexCenter} >
          <Avatar src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="profile" />
          <Typography variant="body2" color="text.secondary" className={classes.marginLeft}>
            {author}
          </Typography>
          {/* <IconButton><ShareIcon /></IconButton>
          <IconButton><ThumbUpIcon /></IconButton> */}
        </div>
      </CardContent>
    </Card>
  )
}
