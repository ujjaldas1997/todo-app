import React from "react";
import { VISIBILITY_FILTERS } from "../constants";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import "./VisibilityFilter.css";

const VisibilityFilters = ({ activeFilter, setFilter }) => (
  <div>
    {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
      const currentFilter = VISIBILITY_FILTERS[filterKey];
      let btnStyle = currentFilter === activeFilter ? "btn active" : "btn";
      return (
        <button
          key={`visibility-filter-${currentFilter}`}
          className={btnStyle}
          onClick={() => {
            setFilter(currentFilter);
          }}
        >
          {currentFilter}{" "}
        </button>
      );
    })}
  </div>
);

const mapStateToProps = (state) => ({ activeFilter: state.visibilityFilter });

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
