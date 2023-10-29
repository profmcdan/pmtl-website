import React from 'react'

const SocialLinks = () => {
  return (
    <div>
        <ul className='header-social-links-style1'>
             <li
                      className='wow slideInUp'
                      data-wow-delay='0ms'
                      data-wow-duration='1200ms'
                    >  
                      <a href='#'>
                        <i className='fa fa-facebook' aria-hidden='true'></i>
                      </a>
                    </li>
                    <li
                      className='wow slideInUp'
                      data-wow-delay='300ms'
                      data-wow-duration='1500ms'
                    >
                      <a href='#'>
                        <i className='fa fa-twitter' aria-hidden='true'></i>
                      </a>
                    </li>

                    <li
                      className='wow slideInUp'
                      data-wow-delay='400ms'
                      data-wow-duration='1500ms'
                    >
                      <a href='#'>
                        <i className='fa fa-linkedin' aria-hidden='true'></i>
                      </a>
                    </li>
                  </ul>
    </div>
  )
}


export default SocialLinks;