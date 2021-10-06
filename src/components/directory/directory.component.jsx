import React from 'react'
import { useSelector } from 'react-redux';
import './directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    console.log('rjot')
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
};

export default Directory;