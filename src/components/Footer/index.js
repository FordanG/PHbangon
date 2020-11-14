import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="footer-copyright text-center">
        <div className="top-footer py-4">
          <p>
            If you want your organization/initiative to be listed in the
            database, please comment the necessary information in this{' '}
            <a href="https://www.facebook.com/vinejbsape/posts/827526581339500">
              Facebook Post
            </a>
          </p>
          <p>
            You can also contact me through{' '}
            <a href="mailto:gabrieljohnfordan@gmail.com">
              gabrieljohnfordan@gmail.com
            </a>{' '}
            for inquiries and collaborations.
          </p>
        </div>

        <div className="bottom-footer text-center py-2">
          &copy; <a href="https://gabrielfordan.xyz"> Bangon Pilipinas </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
