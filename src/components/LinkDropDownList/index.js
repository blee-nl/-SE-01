import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import DropDownListBox from "./DropDownListBox";

const LinkDropDownList = ({
  isShow,
  items,
  title,
  isOverlay,
  getDisplayLabel,
}) => {
  const hasItems = isShow && items && items.length > 0;
  return (
    <DropDownListBox
      className={classNames({ show: hasItems, overlay: isOverlay })}
    >
      {title && hasItems && <div className="title">{title}</div>}
      <ul>
        {hasItems &&
          items.map((item) => {
            const { name, link, id } = item;
            return (
              <li key={id ? id : name}>
                <Link
                  to={
                    link
                      ? link
                      : {
                          pathname: `/${title}/${name.replace(/\s+/g, "-")}`,
                        }
                  }
                >
                  {getDisplayLabel ? getDisplayLabel(item) : name}{" "}
                </Link>
              </li>
            );
          })}
      </ul>
    </DropDownListBox>
  );
};
LinkDropDownList.propTypes = {
  isShow: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ),
  title: PropTypes.string,
  isOverlay: PropTypes.bool,
  getDisplayLabel: PropTypes.func,
};
export default LinkDropDownList;
