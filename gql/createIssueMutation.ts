import { gql } from "@urql/next";

export const CreateIssueMutation = gql`
mutation Mutation($input: CreateIssueInput!) {
  createIssue(input: $input) {
    id
    createdAt
    name
    status
  }
}
`