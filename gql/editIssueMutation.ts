import { gql } from '@urql/next'

export const EditIssueMutation = gql`

mutation Mutation($input: EditIssueInput!) {
  editIssue(input: $input) {
    status
    createdAt
    id
    name
  }
}

`;

