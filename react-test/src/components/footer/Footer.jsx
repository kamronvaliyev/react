import React from "react";
import "../commons/commons.scss";
import "../footer/Footer.scss"

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer_section">
          <div class="footer__logo">
            <h2>
              <a href="/">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.262 10.0581L12.4513 18.8401C14.3523 22.2078 15.9036 23.3903 18.9512 23.2699C21.9358 23.1521 25.3719 19.0921 23.4369 15.6179L18.619 7.07527C18.4467 7.65024 17.4396 9.68846 17.2619 10.0581L17.262 10.0581ZM10.1434 20.6543C4.8786 27.3598 -2.71675 19.959 0.977333 14.198C0.977333 14.198 4.90991 7.30627 6.43925 4.62132C7.62519 2.53922 8.95382 1.22898 10.6813 0.808975C12.7879 0.296819 15.2547 1.41057 16.5697 3.4418C17.4837 4.85335 18.2925 6.14537 16.8671 8.58577C16.6977 8.87565 10.4768 20.2296 10.1434 20.6542V20.6543ZM10.5191 8.25137C9.08019 7.42186 9.08019 5.33682 10.5191 4.50732C11.9579 3.67782 13.7662 4.72032 13.7662 6.37932C13.7662 8.03832 11.9579 9.08086 10.5191 8.25137Z"
                    fill="#5FD788"
                  />
                </svg>
                <p>Toutem</p>
              </a>
            </h2>
          </div>
          <div class="footer-types">
            <div class="footer_box">
              <nav>
                <ul>
                  <li>
                    <a href="#" class="footer__link">
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Free Return</a>
                  </li>
                  <li>
                    <a href="#">Track your Order</a>
                  </li>
                  <li>
                    <a href="#">Gift Cards</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer_box">
              <nav>
                <ul>
                  <li>
                    <a href="#" class="footer__link">
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Free Return</a>
                  </li>
                  <li>
                    <a href="#">Track your Order</a>
                  </li>
                  <li>
                    <a href="#">Gift Cards</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer_box">
              <nav>
                <ul>
                  <li>
                    <a href="#" class="footer__link">
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Free Return</a>
                  </li>
                  <li>
                    <a href="#">Track your Order</a>
                  </li>
                  <li>
                    <a href="#">Gift Cards</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="footer__text">
            <p>copyright © 2022 Toutem all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
