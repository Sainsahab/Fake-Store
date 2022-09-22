import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [product, Setproduct] = useState([]);
  console.log(product);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      Setproduct(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="py-3">
        <div className="container">
          <h2 className="our-facultys">Store </h2>
          <div className="row">
            {product.map((item) => {
              return (
                <>
                  <div className="col-md-3">
                    <div className="course-card text-center">
                      <img
                        src={item.image}
                        className="img img-responsive"
                        alt="#!"
                      />
                      <div className="profile-content">
                        <div className="profile-name">{item.category}</div>
                        <div className="profile-description">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. In porro exercitationem praesentium error dolore
                          doloribus
                        </div>
                        <div className="row">
                          <div className="col-3">
                            <div className="profile-overview">
                              <div>
                                <span>
                                  <i className="fa-brands fa-slack me-2"></i>$
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="profile-overview">
                              <div>
                                <span>
                                  <i className="fa-solid fa-graduation-cap me-1"></i>
                                  6 week
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="profile-overview">
                              <div>
                                <span>
                                  <i className="fa-solid fa-user me-2"></i>
                                  200
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="profile-overview">
                              <div>
                                <a
                                  href="https://www.infonictraining.com/wp-content/themes/infonictraining/upload/digital-marketing-course-module.pdf"
                                  target="blank"
                                >
                                  <i className="fa-solid fa-download me-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
