import { gql } from "@urql/next";

export const signInMuation = gql`
    mutation SignIn($input: AuthInput!) {
        signin(input: $input) {
            token
        }
}
`