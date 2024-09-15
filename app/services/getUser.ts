
import {client} from '@/lib/client';
import { gql } from '@apollo/client';


const GET_PROFILE_QUERY = gql`
  query GetProfile {
    myProfile {
      name
      avatar
    }
  }
`;

export async function getUser() {
    try {
        const { data } = await client.query({
            query: GET_PROFILE_QUERY,
            fetchPolicy: "no-cache",
          });
          return data.myProfile;
    } catch (error) {
        return null
    }
   
}
