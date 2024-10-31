import {useSearchParams} from 'react-router-dom'

export const useValidateQueryParams = (name) => {
    const [searchParams] = useSearchParams();

    return [searchParams.getAll(name).length === 2, searchParams.getAll(name)] 
}
