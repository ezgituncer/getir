import React from 'react';
import {
  Card, Col, Row, Container,
  CardBody
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Sorting from './Sorting/Sorting';
import VirtualizedList from './Basket/Basket';
import Brands from './Filter/Brands/Brands';
import Tags from './Filter/Tags/Tags';
import Sections from './Section/Section';

const useStyles = makeStyles({
  root: {
    margin: '0 0 10px 0',
    backgroundColor: '#0D0C20',
    paddingBottom: '0',
    borderRadius: '15px',
  },
  card: {
    display: 'grid',
    width: '100%',
    paddingBottom: '30px',
    height:' 100%'
  },
  cardList: {
  },
  body: { 
    marginRight: '30px',
    alignItems: 'center',
    cursor: 'pointer',
    display: 'grid',
    flex: '0 0 auto',
    justifyContent: 'center',
    margin: ' 0px 8px',
    padding: '0px !important',
    transition: 'all 0.2s ease 0s',

  },
  bodyHeader: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'content',
    flex: '0 0 auto',
    justifyContent: 'center',
    transition: 'all 0.2s ease 0s',
  },
});


const Main = () => {
  const classes = useStyles();
  

  return (
    <Container>
      <Row>
        <Col lg={3} md={12} sm={12} sx={12}>
          <Card className={classes.card}>
            <CardBody className={classes.bodyHeader}>
            <Sorting />
            <Brands />
            <Tags></Tags>
            </CardBody>
          </Card>
        </Col>
        <Col lg={6} md={12} sm={12} sx={12}>
              <Sections />
        </Col>
        <Col lg={3} md={12} sm={12} sx={12}>
          <Card className={classes.card}>
            <CardBody className={classes.bodyHeader}>
            <VirtualizedList />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default (Main);
