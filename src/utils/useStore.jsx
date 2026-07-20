import { useState } from 'react';

export const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
};

export const useStore = () => {
    const [state, setState] = useState(initialState);

    return {
        getState: () => state,
        updateState: (fieldName, newValue) => {
            setState({ ...state, [fieldName]: newValue });
        }
    };
};

export const sendData = (formData) => {
	console.log(formData);
};