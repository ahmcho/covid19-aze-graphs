import {useEffect, useState} from 'react';
import moment from 'moment';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';
import Chart from './Chart';

//Titles
import chartTitles from './chartTitles';
import cardTitles from './cardTitles';
import axios from 'axios';

const App = () => {
  const [chartData, setChartData] = useState([]);

  
  const fetchData = async () => {
    try {
      let response = await axios.get('https://covid19-azerbaijan.ahmcho.com/api/cases/all');
      setChartData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() =>{
    fetchData();
  },[]);

  return(
    <>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="text-center">Azərbaycan üzrə COVID-19 Statistikası</h1> 
        </Jumbotron>
      
    {chartData.length === 0 ? (  <Spinner animation="border" size="md" variant="primary" /> ) : (
        <>
        <CardGroup>
        {
          cardTitles.map((item,index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text as="h4">
                  <Badge pill variant="primary">{chartData[chartData.length-1][item.type]}</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        }
        </CardGroup>
        <small className="text-muted">Son yenilənmə tarixi {moment(chartData[chartData.length-1].report_date).format('DD.MM.YYYY')}</small>
        {
          chartTitles.map((item,index) => (
              <Chart data={chartData} lineName={item.title} lineType={item.type} line_dataKey={item.type} key={index}/>
          ))
        }
        </>
    )}
    </Container>
    </>
  )
}

export default App;
