import {gql, useQuery} from "@apollo/client";

 const GET_DIRECTORS = gql`
query{
    directors {
        name
        id
    }
}
`; 

const useDirectorsHook = () => {
 
    const {error, loading, data} = useQuery(GET_DIRECTORS);

  return {
    error, 
    loading,
    data
  } 
}

export default useDirectorsHook