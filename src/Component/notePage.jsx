import React from "react";
import "./notePage.css";
import Form from "./form";
import Display from "./display";
import { connect } from "react-redux";
import { addItem, deleteItem } from "../Redux/actions";
import { Link } from "react-router-dom";

const Note = (props) => {
  const { addItem, diaryItems, deleteItem } = props;
  return (
    <div className="note">
      <div className="entry">
        <Link to="/" className="homeLink">
          <p className="homeLinked">Back to Home</p>
        </Link>
        <div className="wrapper2">
          <h1 className="header2"> Say Something ! </h1>
        </div>
        <Form addItem={(item) => addItem(item)} />
      </div>
      <div className="display">
        {diaryItems.length > 0 ? (
          diaryItems.map((item) => {
            return (
              <Display
                deleteItem={(id) => deleteItem(id)}
                item={item} />
            )
          })
        ) : (
          <h1 className="noItem">No Items</h1>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems

})

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (id) => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note);
