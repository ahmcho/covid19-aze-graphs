import chartTitles from './chartTitles';
import cardTitles from './cardTitles';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';
import Chart from '../Chart';

const Cases  = ({data}) => {
    return(
        <>
          <CardGroup>
          {
            cardTitles.map((item,index) => (
              <Card key={index}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text as="h4">
                    <Badge pill variant="primary">{data[data.length-1][item.type]}</Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          }
          </CardGroup>
          <small className="text-muted float-right">Son yenilənmə tarixi {moment(data[data.length-1].report_date).format('DD.MM.YYYY')}</small>
            {
              chartTitles.map((item,index) => (
                  <Chart data={data} lineName={item.title} lineType={item.type} line_dataKey={item.type} key={index}/>
              ))
            }
        </>
    )
}

export default Cases;