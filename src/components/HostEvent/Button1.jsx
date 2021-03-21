import React from 'react';

const Button1 = (props) => {
    return (
        <div className="confirm_button1" style={{
            width: props.width ? props.width : "100px",
            height: props.height ? props.height : "40px"
        }}>{props.text}</div>
    );
}

export default Button1;