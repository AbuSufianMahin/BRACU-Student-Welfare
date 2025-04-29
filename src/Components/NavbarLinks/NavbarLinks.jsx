import React from 'react';
import { NavLink } from 'react-router';
import './navLink.css'
const NavbarLinks = () => {

    const sectionLinks = ['/course-materials', '/add-notes', '/marketplace']
    const sectionNames = ['Course Materials', 'Add Notes', 'Marketplace']

    
    return (
        <>
            {
                sectionLinks.map((singleLink, index) =>
                    <li key={index} className='text-lg'>
                        <NavLink to={singleLink}
                            className={ 
                                ({isActive}) =>
                                    isActive? 'activeNavLink': ""
                            }
                        >{sectionNames[index]}</NavLink>
                    </li>

                )
            }
        </>
    );
};

export default NavbarLinks;