import React from 'react';
import AddDeposit from './components/AddDeposit';
import RemoveDeposit from './components/RemoveDeposit';
import Table from './components/Table'
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions/action';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ({ items, allActions }) => {
  
  return (
    <div>
      <div className="app-title">
        <h2>Perficient National Bank</h2>
      </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddDeposit items={items} allActions={allActions} />
        </div>

        <div className="col-md-6">
          <RemoveDeposit items={items} allActions={allActions} />
        </div>
      </div>
      {items.length &&
      <div className="row">
        <Table items={items} allActions={allActions} />
      </div>
      }
    </div>
    </div>
  )
}


const mapStateToProps = state => {
  return { items: state };
}

const mapDispatchToProps = (dispatch) => ({
  allActions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);