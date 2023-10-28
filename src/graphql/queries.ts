/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getCity = /* GraphQL */ `query GetCity($id: ID!) {
  getCity(id: $id) {
    id
    name
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCityQueryVariables, APITypes.GetCityQuery>;
export const listCities = /* GraphQL */ `query ListCities(
  $filter: ModelCityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      imageUrl
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCitiesQueryVariables,
  APITypes.ListCitiesQuery
>;

export const getCityByName = /* GraphQL */ `
query GetCityByName($name: String!) {
  listCities(filter: {name: {eq: $name}}) {
    items {
      id
      name
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
}
` as GeneratedQuery<APITypes.GetCityByNameQueryVariables, APITypes.GetCityByNameQuery>;
