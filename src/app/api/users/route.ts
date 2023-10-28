import { NextResponse } from "next/server";
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '@/graphql/queries';
import { GraphQLResult } from "@aws-amplify/api";
import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure({ ...awsExports });

export async function GET() {
    let usersData: GraphQLResult<ListUsersData> | undefined;
    try {
        usersData = await API.graphql(graphqlOperation(listUsers)) as GraphQLResult<ListUsersData>;
    } catch (error) {
        console.log('Error fetching users:', error);
    }

    if (usersData?.data?.listUsers) {
        return new NextResponse(JSON.stringify(usersData.data.listUsers.items), { status: 200 });
    } else {
        return new NextResponse("Failed to fetch users", { status: 500 });
    }
}
