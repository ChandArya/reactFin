import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { black } from "color-name";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const list=[{
    name:"hdfc",
    type:"Buy",
    exchange:"NSE",
    type:"Limit",
    qnt:"3000",
    price:"870",
    status:"Rejected",
    id:"1000"

  },{
    name:"hdfc",
    type:"Buy",
    exchange:"NSE",
    type:"Limit",
    qnt:"3000",
    price:"870",
    status:"Rejected",
    id:"1000"

  }]
  
  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order Book</h4>
            <p className={classes.cardCategoryWhite}>
              All Order
            </p>
          </CardHeader>
          <CardBody>
          
    {list.map(item => (
      <div>
<div>{item.name}</div>
        <div>{item.exchange}</div>
        <div>{item.status}</div>
        <div>{item.price}</div>
        <div style={{height:"1px",backgroundColor:"black"}}></div>
      </div>
        
     
    ))}
 
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
