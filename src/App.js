import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Footer from './components/Footer'
import './App.css';

const searchClient = algoliasearch(
  '4BBC3QS8OY',
  '43f91f658130a524ada2296676545bb9'
);

class App extends Component {
  render() {
    return (
      <>
      <div className="pageContainer">
      <div className="ais-InstantSearch">
        <nav className="navbar navbar-light bg-light">
      <div className="container">
        <h1 className="navbar-brand text-center">
          <a href="https://phbangon.com">Bangon Pilipinas #YouthRisePH</a>
          </h1>
          <p>Relief Efforts for #UlyssesPH Database</p>
      </div>
    </nav>
        <div className="container">
        <InstantSearch indexName="test_DONATIONS" searchClient={searchClient}>
          <div className="left-panel d-none d-md-block">
            <ClearRefinements />
            <h2>Donation Type</h2>
            <RefinementList attribute="Donation Type" />
            <h2>Region</h2>
            <RefinementList attribute="Region" />
            {/* <h2>City</h2>
            <RefinementList attribute="City" /> */}
            <Configure hitsPerPage={6} />
          </div>
          <div className="right-panel">
            <SearchBox searchAsYouType={false}/>
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
        </div>
      </div>
      <Footer />
      </div>
      
      
      </>
    );
  }
}

const Hit = (props) => {
const { Organization, Region, City } = props.hit;
const beneficiaries = props.hit.['Target Beneficiaries']
const link = props.hit.['Link to Post']
const account = props.hit.['Account Details']
const contact = props.hit.['Contact Person']
const inKind = props.hit.['In-Kind Donation Needs']
const drop = props.hit.['Drop-Off Point']
  return (
    <article>
      <h4>
        {Organization}
      </h4>
      <p className="text-center my-0">{Region}</p>
      <p className="text-center mt-0">{City}</p>

      {beneficiaries && <h5>Target Beneficiaries</h5>}
      <p className="enter">{props.hit.['Target Beneficiaries']}</p>

      {contact && <h5>Contact Person</h5>}
      <p className="enter">{props.hit.['Contact Person']}</p>
      
      {account &&  <h5>Account Details</h5>}
      <p className="enter">{props.hit.['Account Details']}</p>

      {inKind && <h5>In-Kind Donation Needs</h5>}
      <p className="enter">{props.hit.['In-Kind Donation Needs']}</p>

      {drop && <h5>Drop-off Point</h5>}
      <p className="enter">{props.hit.['Drop-Off Point']}</p>
      
      {link &&
      <div className="text-center">
      <a href={props.hit.['Link to Post']}><Button variant="primary">More Information</Button></a>
      </div>
      }
      
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
