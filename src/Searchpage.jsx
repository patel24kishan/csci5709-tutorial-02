import Navigationbar from "./Navigationbar";
import CustomSearch from "./CustomSearch";
import Header from "./Header";

import {Navbar,Container, Row, Col } from 'react-bootstrap';

function Searchpage() {
  return (
    <>
    <Header></Header>
    <br />
    <CustomSearch></CustomSearch>
    </>
  );
}

export default Searchpage;
