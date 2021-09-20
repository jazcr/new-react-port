import './App.css';
import Grid from '@mui/material/Grid';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import projectData from './components/projectData';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  return (
    <Grid id="main">
      <Grid>
        <Navbar />
      </Grid>
      <Grid>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects}>
            <Projects projectData={projectData} />
          </Route>/
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
          <Route path='/' component={Home} />
        </Switch>
      </Grid>
    </Grid>
  )
}

export default App;