import React from 'react'
import {useNavigate} from 'react-router-dom'

const Template = (props) => {

  const navigate = useNavigate();

  const navigateToEvents = () => {
    if(props.url){
      navigate(props.url);
    }

  }

  
  return (
        <div className="recipe-container">
          <h1>{props.name}</h1>
          <div className="swiper" onClick={navigateToEvents}>
            <div className="swiper-wrapper">
              <div className="swiper-slide post">
                <img
                  className="post-img"
                  src={props.images[0]}
                  alt="recipe"
                />

                <div className="post-body">
                  {/* <img
                    className="post-avatar"
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f9d29d0e-f03b-4990-9bc5-ade57a276b41"
                    alt="avatar"
                  /> */}
                  <div className="post-detail">
                    <h2 className="post-name">{props.eventName[0]}</h2>
                    {/* <p className="post-author">Evelyn Taylor</p> */}
                  </div>

                  <div className="post-actions">
                    <a className="post-like" href="javascript:void(0)">
                      <i className="fas fa-heart"></i>
                    </a>
                    <button
                      className="post-actions-controller"
                      data-target="post1"
                      aria-controls="post-actions-content"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis fa-2xl"></i>
                    </button>
                    <div
                      className="post-actions-content"
                      id="post1"
                      data-visible="false"
                      aria-hidden="true"
                    >
                      <ul
                        role="list"
                        className="grid-flow"
                        data-spacing="small"
                      >
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-folder-open"></i>
                            <span>Add to Collection</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-eye"></i>
                            <span>Show the Recipe</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-user-plus"></i>
                            <span>Follow the User</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide post">
                <img
                  className="post-img"
                  src={props.images[1]}
                  alt="recipe"
                />

                <div className="post-body">
                  {/* <img
                    className="post-avatar"
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083"
                    alt="avatar"
                  /> */}
                  <div className="post-detail">
                    <h2 className="post-name">{props.eventName[1]}</h2>
                    {/* <p className="post-author">Ethan Wilson</p> */}
                  </div>

                  <div className="post-actions">
                    <a className="post-like" href="javascript:void(0)">
                      <i className="fas fa-heart"></i>
                    </a>
                    <button
                      className="post-actions-controller"
                      data-target="post2"
                      aria-controls="post-actions-content"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis fa-2xl"></i>
                    </button>
                    <div
                      className="post-actions-content"
                      id="post2"
                      data-visible="false"
                      aria-hidden="true"
                    >
                      <ul
                        role="list"
                        className="grid-flow"
                        data-spacing="small"
                      >
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-folder-open"></i>
                            <span>Add to Collection</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-eye"></i>
                            <span>Show the Recipe</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-user-plus"></i>
                            <span>Follow the User</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide post">
                <img
                  className="post-img"
                  src={props.images[2]}
                  alt="recipe"
                />

                <div className="post-body">
                  {/* <img
                    className="post-avatar"
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/01332597-5aeb-483b-b682-9379c6ed8f14"
                    alt="avatar"
                  /> */}
                  <div className="post-detail">
                    <h2 className="post-name">{props.eventName[2]}</h2>
                    {/* <p className="post-author">Bella Smith</p> */}
                  </div>

                  <div className="post-actions">
                    <a className="post-like" href="javascript:void(0)">
                      <i className="fas fa-heart"></i>
                    </a>
                    <button
                      className="post-actions-controller"
                      data-target="post3"
                      aria-controls="post-actions-content"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis fa-2xl"></i>
                    </button>
                    <div
                      className="post-actions-content"
                      id="post3"
                      data-visible="false"
                      aria-hidden="true"
                    >
                      <ul
                        role="list"
                        className="grid-flow"
                        data-spacing="small"
                      >
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-folder-open"></i>
                            <span>Add to Collection</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-eye"></i>
                            <span>Show the Recipe</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="post-actions-link"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-user-plus"></i>
                            <span>Follow the User</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>
   
  )
}

export default Template