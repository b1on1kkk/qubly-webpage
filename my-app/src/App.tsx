import "./App.css";

import Welcome from "./main_components/Welcome/Welcome";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";

import MainContent from "./main_components/Content/Content";
import Offers from "./components/Offers/Offers";

import ForProductTeams from "./main_components/ForProductTeams/ForProductTeams";
import Companies from "./components/Companies/Companies";

import ForEngeneeringTeams from "./main_components/ForEngeneeringTeams/ForEngeneeringTeams";
import Engeneering from "./components/Engeneering/Engeneering";

import Testimanial from "./main_components/Testimanial/Testimanial";
import Testimanials from "./components/Testimanials/Testimanials";

function App() {
  return (
    <>
      <Welcome>
        <Navigation />
        <Content />
      </Welcome>
      <MainContent>
        <Offers />
      </MainContent>
      <ForProductTeams>
        <Companies />
      </ForProductTeams>
      <ForEngeneeringTeams>
        <Engeneering />
      </ForEngeneeringTeams>
      <Testimanial>
        <Testimanials></Testimanials>
      </Testimanial>
    </>
  );
}

export default App;
