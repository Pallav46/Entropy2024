import React from 'react';

const Template = (props) => {

  const navigateToEvents = () => {
    if (props.url) {
      // Use window.location.href for navigation
      window.location.href = props.url;
    }
  }

  return (
    <div className="recipe-container">
      <h1>{props.name}</h1>
      <div className="swiper" onClick={navigateToEvents}>
        <div className="swiper-wrapper">
          {props.images.map((image, index) => (
            <div className="swiper-slide post" key={index}>
              <img
                className="post-img"
                src={image}
                alt="recipe"
              />
              <div className="post-body">
                <div className="post-detail">
                  <h2 className="post-name">{props.eventName[index]}</h2>
                </div>

                <div className="post-actions">
                  <a className="post-like" href="javascript:void(0)">
                    <i className="fas fa-heart"></i>
                  </a>
                  <button
                    className="post-actions-controller"
                    data-target={`post${index + 1}`}
                    aria-controls="post-actions-content"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className="post-actions-content"
                    id={`post${index + 1}`}
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
          ))}
        </div>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
}

export default Template;
