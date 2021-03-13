//Boilerplate and installed packages
import {useEffect, useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import axios from 'axios';

//Components
import Cases from './components/Cases/Cases';
import Vaccines from './components/Vaccines/Vaccines';

const App = () => {
  const [caseData, setCaseData] = useState([]);
  const [vaccineData, setVaccineData] = useState([]);
  const [showInfo, setShowInfo] = useState(true);
  const [online, setOnline] = useState(true);
  
  //Get case data from API
  const fetchCaseData = async () => {
    try {
      let response = await axios.get('https://covid19-azerbaijan.ahmcho.com/api/cases/all');
      setCaseData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //Get vaccine data from API
  const fetchVaccineData = async () => {
    try {
      let response = await axios.get('https://covid19-azerbaijan.ahmcho.com/api/vaccines/all');
      setVaccineData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(!navigator.onLine){
      setOnline(false);
    } else {
      setOnline(true);
    }
  },[]);
  
  useEffect(() =>{
    fetchCaseData();
    fetchVaccineData();
  },[]);

  return(
    <>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="text-center">Azərbaycan üzrə COVID-19 Statistikası</h1>
        </Jumbotron>
        { showInfo && (<Alert variant="primary" style={{textAlign: "center"}} onClose={() => setShowInfo(false)} dismissible>Bütün məlumatlar <Alert.Link target="_blank" href="https://covid19-azerbaijan.ahmcho.com/">buradan</Alert.Link> alınır.</Alert> )}
        { online ? [
          caseData.length === 0 || vaccineData.length === 0 ? (  <Spinner style={{ display: "flex",margin: "0 auto" }} animation="border" size="md" variant="primary" /> ) : (
            <>
              <Tabs defaultActiveKey="cases" fill>
                <Tab eventKey="cases" title="Xəstəlik statistikası">
                  <Cases data={caseData}/>
                </Tab>
                <Tab eventKey="vaccines" title="Vaksin statistikası">
                  <Vaccines data={vaccineData} />
                </Tab>
              </Tabs>
            </>
          )
        ]: (<Alert variant="danger" style={{textAlign: "center"}}>İnternetlə əlaqə kəsilib. Əlaqəni bərpa edib tətbiqi <Alert.Link href="/">yeniləyin</Alert.Link></Alert>)}
        
    </Container>
    </>
  )
}

export default App;
