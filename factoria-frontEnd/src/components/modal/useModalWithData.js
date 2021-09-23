import React from 'react';
import { useModal } from './modal/useModal';
import { useState } from 'react'

export const useModalWithData = (
    initialIsOpened = false,
    initialData = null
) => {
    const [isModalOpened, setIsModalOpened] = useModal(initialIsOpened);
    const [data, setData] = useState(initialData);
    const customSetIsModalOpened = isModalOpened => {
        setIsModalOpened(isModalOpened);
        if(isModalOpened === false){
            setData(null);
        }
    };
    return [ customSetIsModalOpened, isModalOpened, data, setData ];
}