import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './CardMaterial.css';

const useStyles = makeStyles({
  root: {
    width:"300px",
    height:"260px",
    margin: '40px',
    borderRadius:"4%",
    background: 'linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',

  },
});

export default function ImgMediaCard({countrywise}) {
  const{Country, NewConfirmed,TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered}=countrywise;
  const classes = useStyles();
  return (
   <div className="cardcontainer">
    <Card className={classes.root} >
      <CardActionArea>
      <div className="circle">
          <div className="circle-inner"></div>
      </div>
        <CardContent>
              <div className="headercontainer">
                     {Country}
             </div>
          <Typography variant="body2" color="textSecondary">
           <div className="cardrow">
              New Confirmed :      {NewConfirmed}
           </div>
           <div className="cardrow">
              Total Confirmed :    {TotalConfirmed}
           </div>
           <div className="cardrow">
              New Deaths:          {NewDeaths}
           </div>
           <div className="cardrow">
            Total Deaths:         {TotalDeaths}
           </div>
           <div className="cardrow">
              New Recovered:      {NewRecovered}
           </div>
           <div className="cardrow">
              Total Recovered:    {TotalRecovered}
           </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </div>
  );
}
