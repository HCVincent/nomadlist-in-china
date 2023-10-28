import { NextResponse } from "next/server";
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '@/graphql/queries';
import { GraphQLResult } from "@aws-amplify/api";
import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure({ ...awsExports });

export async function POST(
    req: Request,
) {

}