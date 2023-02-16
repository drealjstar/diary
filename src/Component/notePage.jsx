import React from "react";
import "./notePage.css";
import Form from "./form";
import Display from "./display";
import { connect } from "react-redux";
import { addItem } from "../Redux/actions";


const Note = (props) => {
  const { addItem, diaryItems } = props;
  return (
    <div className="note">
      <div className="entry">
        <div className="wrapper2">
          <h1 className="header2"> Say Something ! </h1>
        </div>
        <Form addItem={(item) => addItem(item)} />
      </div>
      <div className="display">
        {diaryItems.length > 0 ? (
          diaryItems.map((item) => {
            return (
              <Display item={item} />
            )
          })
        ) : (
          <h1>No Items</h1>
        )}

      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems

})

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))

})

export default connect(mapStateToProps, mapDispatchToProps)(Note);
