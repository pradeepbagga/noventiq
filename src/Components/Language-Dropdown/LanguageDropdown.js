import React from 'react';
import { Form } from 'react-bootstrap';

const LanguageDropdown = (props) => {
    return (
        <Form.Select onChange={props.onChange}>
            <option value={'en'}>English</option>
            <option value={'hi'}>Hindi</option>
        </Form.Select>
    )
}

export default React.memo(LanguageDropdown);