import React, { useEffect, useState } from "react";
import "./hotdealscontent.scss";
import hotDealsImage from "../../assets/newsimg1.jpg";
import { HotdealsData } from "../../CustomData/Slider";
import Sortcontainer from "../CustomComponents/Sortcontainer";
import rectShape from "../../assets/submenuRect.png";
import { useTitle } from "../Routes/TitleContext";
// import { Pagination } from "flowbite-react";
import { Pagination } from "@mantine/core";
import usePagination from "../CustomComponents/Pagination";
import PaginationComp from "./PaginationComp";

const HotdealsContent = () => {
  const itemsPerPage = 6;
  const [dealsPackage, setDealsPackage] = useState(HotdealsData);
  const totalPages = Math.ceil(dealsPackage.length / itemsPerPage);

  const { currentPage, nextPage, prevPage, goToPage, getPageNumbers } =
    usePagination(totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, dealsPackage.length);

  // Slice the array to get the items for the current page
  const itemsToShow = dealsPackage.slice(startIndex, endIndex);

  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Hot Deals");
  }, [setTitle]);

  const prices = [
    { value: "1000", label: "NPR 1000" },
    { value: "2000", label: "NPR 2000" },
    { value: "3000", label: "NPR 3000" },
  ];
  const defaultVal = [
    { value: "1000", label: "NPR 1000" },
    { value: "2000", label: " NPR 2000" },
    { value: "3000", label: "NPR 3000" },
  ];

  const handleSort = (sortData) => {
    const itemsToDisplay = sortData
      ? HotdealsData.filter((item) => item.price <= sortData)
      : itemsToShow;

    // Implement any other logic you need with the sorted items

    // For example, you might want to update the state with the sorted items
    setDealsPackage(itemsToDisplay);
    console.log(sortData);
    // Return the sorted items or perform other actions as needed
    return itemsToDisplay;
  };

  return (
    <div className="hotdeals-container">
      <div className="hotdeals-content">
        <div className="hotdeals-content-inner">
          <div className="hotdeals-content-inner-heading">
            <div className="hotdeal-heading">
              <h2>Unleash The Power Of</h2>
              <h1>Our Hot Deals</h1>
            </div>
            <div className="hotdeals-sort">
              <Sortcontainer
                prices={prices}
                Default={defaultVal}
                onSort={handleSort}
              />
            </div>
          </div>
          <div className="content-packages">
            {itemsToShow &&
              itemsToShow.map((item, index) => (
                <div class="package-item">
                  <div className="hotdeals-image">
                    <img src={item.image} alt="aa" />
                    <div className="hotdeals-pricing">
                      <h2>Deadline: June 10</h2>
                      <h2>Price: NPR {item.price}</h2>
                    </div>
                  </div>

                  <div>
                    <h2>{item.title}</h2>
                    <p>Minimum PAX:02</p>
                  </div>
                  <p>{item.description}</p>
                  <button className="book-now-global">Book Now</button>
                </div>
              ))}
          </div>
          <div className="pagination-div">
            <PaginationComp
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage}
              goToPage={goToPage}
              getPageNumbers={getPageNumbers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotdealsContent;
